package com.vitascientia.service.implementation;

import java.util.Date;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import com.vitascientia.email.EmailFactory;
import com.vitascientia.exeptions.EntityNotFoundException;
import com.vitascientia.model.Users;
import com.vitascientia.model.repository.UserRepository;
import com.vitascientia.service.UserService;
import com.vitascientia.service.objects.UpdatePasswordObj;

import jakarta.transaction.Transactional;

/**
 * Classe UserServiceImpl para implementar os servicos do UserService obrigatoriamente
 * @author Lucas Alexandre
 * @since 1.0.0
 */
@Service
public class UserServiceImpl implements UserService {

	/** Injeta a class userRepository*/
	@Autowired
	private UserRepository userRepository;
	
	/** Injeta a class passwordEncoder */
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	/** Injeta a class emailFactory */
	@Autowired
	EmailFactory emailFactory;
	
	/** Injeta a class templateEngine */
	@Autowired
	TemplateEngine templateEngine;

	/**
	 * Procura e pega usuario atraves do id
	 * Caso encontrar retorna o status e a lista com as informacoes do usuario e caso não encontrar
	 * retorna uma response com o codigo 404
	 * @param id
	 * @return uma Response entity com os valores da operacao
	 */
	@Override
	public ResponseEntity<Optional<Users>> getUser(int id) {
		try {
			Optional<Users> user = userRepository.findById(id);
			if (user.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
			return new ResponseEntity<>(user, HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e);
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}

	/**
	 * Pega as informacoes de um objeto User criando um novo usuario
	 * aplicando o BCriptEncoder para senha antes de salvar
	 * @param user
	 * @return uma Response entity com os valores da operacao
	 */
	@Override
	@Transactional
	public ResponseEntity<HttpStatus> saveUser(Users user) {
		try {
			user.setPassword(passwordEncoder.encode(user.getPassword()));
			userRepository.save(user);
			return new ResponseEntity<>(HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	/**
	 * Procura e pega usuario atraves do username
	 * Caso encontrar retorna o status e a lista com as informacoes do usuario e caso não encontrar
	 * retorna uma execao EntityNotFoundException
	 * @param username
	 * @return uma Response entity com os valores da operacao
	 */
	@Override
	public Users getUser(String email) {
		Optional<Users> user = userRepository.findByEmail(email);
		if (user.isEmpty()) {
			throw new EntityNotFoundException(Users.class);
		}
		return user.get();

	}

	/**
	 * Procura e pega usuario atraves do username
	 * Caso encontrar: 
	 *  Gera um UUID unico e uma nova data de expiração de cerca de 1 hora, salva no bancos de dados, gera um link
	 *  com o token(UUID) gerado e envia o email para o username enviado na request
	 * caso não encontrar retorna uma response com o codigo 404
	 * @param username
	 * @return uma Response entity com os valores da operacao
	 */
	@Override
	@Profile("!test")
	public ResponseEntity<HttpStatus> sendRecoverEmail(String email) {		
		try {

			Optional<Users> user = userRepository.findByEmail(email);
			if (user.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
			
			Context context = new Context();
			String token = UUID.randomUUID().toString();
			Date currentDate = new Date();
			Date dateExpiration = new Date(currentDate.getTime() + 60 * 60 * 1000);
			userRepository.saveRecoverPasswordInformations(token, dateExpiration, email);			
			context.setVariable("token", "http://localhost:4200/ResetPassword/"+token);
			String htmlBody = templateEngine.process("NewPasswordLink", context);
			emailFactory.emailNoReplyGenerator(email, "Recover Password", htmlBody, null, null);
			
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
	
	@Override
	@Profile("test")
	public ResponseEntity<HttpStatus> sendRecoverEmailTest(String email) {		
		try {

			Optional<Users> user = userRepository.findByEmail(email);
			if (user.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
			
			String token = UUID.randomUUID().toString();
			Date currentDate = new Date();
			Date dateExpiration = new Date(currentDate.getTime() + 60 * 60 * 1000);
			userRepository.saveRecoverPasswordInformations(token, dateExpiration, email);
			
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}

	/**
	 * Procura e pega usuario atraves do token
	 * Caso encontrar: 
	 *  Valida o expiration date se esta ainda valido
	 *  Valida se o token existe
	 * Caso for valida retorna o status 200
	 * caso não encontrar retorna uma response com o codigo 404
	 * @param token
	 * @return uma Response entity com os valores da operacao
	 */
	@Override
	public ResponseEntity<HttpStatus> validateToken(String token) {
		try {
			
			Optional<Users> user = userRepository.findByToken(token);
			if (user.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			}
			Date currentDate = new Date();
			if (currentDate.equals(user.get().getExpirationDate()) || currentDate.after(user.get().getExpirationDate())) {
				return new ResponseEntity<>(HttpStatus.GONE);
			}
			
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	/**
	 * Procura e pega usuario atraves do token extraido do objeto UpdatePasswordObj da req
	 * Caso encontrar, o sistema encripta a nova senha e fazer o update do usuario
	 * retornando com o status 200
	 * caso não encontrar ele retorna uma response com o codigo 400
	 * @param token
	 * @return uma Response entity com os valores da operacao
	 */
	@Override
	public ResponseEntity<HttpStatus> updatePassword(UpdatePasswordObj updatePasswordObj) {
		try {
			
			Optional<Users> user = userRepository.findByToken(updatePasswordObj.getToken());
			if (user.isEmpty() || updatePasswordObj.getPassword().isEmpty() || updatePasswordObj.getToken().isEmpty()) {
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			}
			userRepository.updatePassword(passwordEncoder.encode(updatePasswordObj.getPassword()),updatePasswordObj.getToken());
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
