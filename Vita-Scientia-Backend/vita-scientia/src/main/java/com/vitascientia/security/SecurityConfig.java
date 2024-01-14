package com.vitascientia.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

import com.vitascientia.exceptions.ExceptionAutenticacaoFiltro;
import com.vitascientia.security.filters.AuthenticationFilter;
import com.vitascientia.security.filters.JWTAuthorizationFilter;
import com.vitascientia.security.managers.CustomAuthenticationManager;

// TODO: Auto-generated Javadoc
/**
 * The Class SecurityConfig.
 */
@Configuration
public class SecurityConfig {

	/** The custom authentication manager. */
	@Autowired
	CustomAuthenticationManager customAuthenticationManager;

	/**
	 * Filter chain.
	 *
	 * @param http the http
	 * @return the security filter chain
	 * @throws Exception the exception
	 */
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
		
		AuthenticationFilter authenticationFilter = new AuthenticationFilter(customAuthenticationManager);
		authenticationFilter.setFilterProcessesUrl("/login");
		
		http
		.headers().frameOptions().disable()
		.and()
		.csrf().disable()
		.authorizeHttpRequests()
		.requestMatchers(HttpMethod.GET, "/Usuario/EmailRecuperacao/**").permitAll()
		.requestMatchers(HttpMethod.GET, "/Usuario/ValidaToken/**").permitAll()
		.requestMatchers(HttpMethod.POST, "/Usuario/ResetaSenha/**").permitAll()
		.anyRequest().authenticated()
		.and()
		.addFilterBefore(new ExceptionAutenticacaoFiltro(), AuthenticationFilter.class)
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
