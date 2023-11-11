package com.vitascientia.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

import com.vitascientia.exeptions.HandlerFilterException;
import com.vitascientia.security.SecurityConstants;
import com.vitascientia.security.filter.AuthenticationFilter;
import com.vitascientia.security.filter.JWTAuthorizationFilter;
import com.vitascientia.security.manager.CustomAuthenticationManager;

/**
 * Classe SecurityConfig para configurar o Spring Security.
 * @since 1.0.0
 */
@Configuration
public class SecurityConfig {

	/** Injeta a class authenticationManager. */
	@Autowired
	CustomAuthenticationManager authenticationManager;

	/**
	 * Funcao do filtro de corrente do spring security
	 * Utilizado para:
	 *  - Definir rota de login
	 *  - Definir rotas publicas
	 *  - Chamada de filtros 
	 * @param http
	 * @return a response com os dados processado na corrente ou a resposta do servidor de uma req
	 * @throws Exception
	 */
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
		
		AuthenticationFilter authenticationFilter = new AuthenticationFilter(authenticationManager);
		authenticationFilter.setFilterProcessesUrl("/authenticate");
		
		http
		.csrf().disable()
		.authorizeHttpRequests()
		.requestMatchers(HttpMethod.POST, SecurityConstants.REGISTER_PATH).permitAll()
		.requestMatchers(HttpMethod.GET, "/user/SendRecoverEmail/**").permitAll()
		.requestMatchers(HttpMethod.GET, "/user/validatedToken/**").permitAll()
		.requestMatchers(HttpMethod.POST, "/user/validatedToken/**").permitAll()
		.requestMatchers("/css/**").permitAll()
		.anyRequest().authenticated()
		.and()
		.addFilterBefore(new HandlerFilterException(), AuthenticationFilter.class)
		.addFilter(authenticationFilter)
		.addFilterBefore(new JWTAuthorizationFilter(), AuthenticationFilter.class)
		.httpBasic()
		.and()
		.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
		.and()
		.cors();
		
		return http.build();
	}

}
