package com.vitascientia.security.managers;

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

import com.vitascientia.model.Usuarios;
import com.vitascientia.services.implementation.ImplUsuarios;

// TODO: Auto-generated Javadoc
/**
 * The Class CustomAuthenticationManager.
 */
@Component
public class CustomAuthenticationManager implements AuthenticationManager{

	/** The impl usuarios. */
	@Autowired
	private ImplUsuarios implUsuarios;
	
	/** The password encoder. */
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	/**
	 * Authenticate.
	 *
	 * @param authentication the authentication
	 * @return the authentication
	 * @throws AuthenticationException the authentication exception
	 */
	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {
		Usuarios user = implUsuarios.pegaUsuarioPeloEmail(authentication.getName());
		List<SimpleGrantedAuthority> simpleGrantedAuthority = new ArrayList<>();
		
		if (!passwordEncoder.matches(authentication.getCredentials().toString(), user.getSenha())) {
			throw new BadCredentialsException("Email/senha incorretos...");
		}
		return new UsernamePasswordAuthenticationToken(authentication.getName(), authentication.getCredentials(), simpleGrantedAuthority);
	}

}