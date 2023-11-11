package com.vitascientia.security.manager;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import com.vitascientia.model.Users;
import com.vitascientia.service.implementation.UserServiceImpl;

/**
 * A Class CustomAuthenticationManager com as configuracoes de uma entidade manager do spring security.
 * @author Lucas Alexandre
 * @since 1.0.0
 */
@Component
public class CustomAuthenticationManager implements AuthenticationManager{

	/** Injeta a class userServiceImpl*/
	@Autowired
	private UserServiceImpl userServiceImpl;
	
	/** Injeta a class passwordEncoder*/
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	/**
	 * Faz um Override do Authenticate.
	 * Funcao na corrente do security procura o usuario pelo email,
	 * caso encontrar, valida se a senha enviada corresponde
	 * a senha salva no banco de dados e envia de volta na corrente os dados
	 * Caso não for igual, retorna na corrente BadCredentialsException com mensagem de erro
	 * @param authentication the authentication
	 * @return Retorna UsernamePasswordAuthenticationToken com o username, senha e auttoridade(Vazio, não pretendo implementar)
	 * @throws AuthenticationException
	 */
	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {
		Users user = userServiceImpl.getUser(authentication.getName());
		List<SimpleGrantedAuthority> simpleGrantedAuthority = new ArrayList<>();
		
		if (!passwordEncoder.matches(authentication.getCredentials().toString(), user.getPassword())) {
			throw new BadCredentialsException("Wrong email/password...");
		}
		return new UsernamePasswordAuthenticationToken(authentication.getName(), user.getPassword(), simpleGrantedAuthority);
	}

}
