package com.vitascientia.services;

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

import com.vitascientia.exceptions.ExceptionEntidadeNaoEncontrada;
import com.vitascientia.factory.EmailFactory;
import com.vitascientia.model.Usuarios;
import com.vitascientia.model.repository.RepositoryUsuarios;
import com.vitascientia.services.implementation.ImplUsuarios;

import jakarta.transaction.Transactional;

// TODO: Auto-generated Javadoc
/**
 * The Class ServiceUsuarios.
 */
@Service
public class ServiceUsuarios implements ImplUsuarios {

	/** The repository usuarios. */
	@Autowired
	private RepositoryUsuarios repositoryUsuarios;
	
	/** The password encoder. */
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	/** The email factory. */
	@Autowired
	EmailFactory emailFactory;
	
	/** The template engine. */
	@Autowired
	TemplateEngine templateEngine;

	/**
	 * Cria novo usuario.
	 *
	 * @param usuarios the usuarios
	 * @return the response entity
	 */
	@Override
	@Transactional
	public ResponseEntity<HttpStatus> criaNovoUsuario(Usuarios usuarios) {
		try {
			usuarios.setSenha(passwordEncoder.encode(usuarios.getSenha()));
			repositoryUsuarios.save(usuarios);
			return new ResponseEntity<>(HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	/**
	 * Pega usuario pelo email.
	 *
	 * @param email the email
	 * @return the usuarios
	 */
	@Override
	public Usuarios pegaUsuarioPeloEmail(String email) {
		Optional<Usuarios> usuarios = repositoryUsuarios.findByEmail(email);
		if (usuarios.isEmpty()) {
			throw new ExceptionEntidadeNaoEncontrada(Usuarios.class);
		}
		Usuarios usuario = new Usuarios(usuarios.get().getEmail(), usuarios.get().getSenha());
		return usuario;
	}

	/**
	 * Envia email de recuperacao de senha.
	 *
	 * @param email the email
	 * @return the response entity
	 */
	@Override
	@Profile("!test")
	public ResponseEntity<HttpStatus> enviaEmailDeRecuperacaoDeSenha(String email) {		
		try {

			Optional<Usuarios> usuarios = repositoryUsuarios.findByEmail(email);
			if (usuarios.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
			
			Context context = new Context();
			String token = UUID.randomUUID().toString();
			Date currentDate = new Date();
			Date dateExpiration = new Date(currentDate.getTime() + 60 * 60 * 1000);
			repositoryUsuarios.salvaInformacoesRecuperacaoSenha(token, dateExpiration, email);			
			context.setVariable("token", "http://localhost:4200/ResetaSenha/"+token);
			String corpoEmail = templateEngine.process("NewPasswordLink", context);
			emailFactory.geradorDeEmail(email, "Recuperar senha", corpoEmail, null, null);
			
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
	
	/**
	 * Envia email de recuperacao de senha funcao teste.
	 *
	 * @param email the email
	 * @return the response entity
	 */
	@Override
	@Profile("test")
	public ResponseEntity<HttpStatus> enviaEmailDeRecuperacaoDeSenhaFuncaoTeste(String email) {		
		try {

			Optional<Usuarios> usuarios = repositoryUsuarios.findByEmail(email);
			if (usuarios.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
			
			String token = UUID.randomUUID().toString();
			Date data_expiracao = new Date(new Date().getTime() + 60 * 60 * 1000);
			repositoryUsuarios.salvaInformacoesRecuperacaoSenha(token, data_expiracao, email);
			
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}

	/**
	 * Valida token de recuperacao de senha.
	 *
	 * @param token the token
	 * @return the response entity
	 */
	@Override
	public ResponseEntity<HttpStatus> validaTokenDeRecuperacaoDeSenha(String token) {
		try {
			
			Optional<Usuarios> usuarios = repositoryUsuarios.findByToken(token);
			if (usuarios.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			}
			Date data_atual = new Date();
			if (data_atual.equals(usuarios.get().getExpiracao_token()) || data_atual.after(usuarios.get().getExpiracao_token())) {
				return new ResponseEntity<>(HttpStatus.GONE);
			}
			
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	/**
	 * Atualiza senha do usuario.
	 *
	 * @param usuarios the usuarios
	 * @return the response entity
	 */
	@Override
	public ResponseEntity<HttpStatus> atualizaSenhaDoUsuario(Usuarios usuarios) {
		try {
			
			if (usuarios.getSenha().isEmpty() || usuarios.getToken().isEmpty()) {
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			}
			
			Optional<Usuarios> novosDados = repositoryUsuarios.findByToken(usuarios.getToken());
			
			if (novosDados.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
			
			Usuarios dadosAtualizados = novosDados.get();
			dadosAtualizados.setExpiracao_token(null);
			dadosAtualizados.setToken(null);
			dadosAtualizados.setSenha(passwordEncoder.encode(usuarios.getSenha()));
			
			repositoryUsuarios.save(dadosAtualizados);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	/**
	 * pega o id de um usuario.
	 *
	 * @param email the email
	 * @return the response entity
	 */
	@Override
	public ResponseEntity<Long> idUsuario(String email) {
		try {
			Optional<Usuarios> usuario = repositoryUsuarios.findByEmail(email);
			return new ResponseEntity<>(usuario.get().getId_usuario(), HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
