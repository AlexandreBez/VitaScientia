package com.vitascientia.security.filter;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;

import com.vitascientia.security.SecurityConstants;
import com.vitascientia.service.implementation.UserServiceImpl;

/**
 * Classe JWTAuthorizationFilter para validacao de token utilizando da extensao OncePerRequestFilter
 * para evitar que a funcao seja chama mais de uma vez
 * @author Lucas Alexandre
 * @since 1.0.0
 */
public class JWTAuthorizationFilter extends OncePerRequestFilter {
	
	/** Injeta a class userServiceImpl*/
	@Autowired
	UserServiceImpl userServiceImpl;

	/**
	 * Caso uma requisicao que não seja de login for feita, essa funcao ira validar o token recebido no cabecalho
	 * e caso for valido a request será liberada para execucao.
	 * Caso contrario encerra a corrente e retorna o status not authorized 
	 * @param request
	 * @param response
	 * @param filterChain
	 * @throws ServletException
	 * @throws IOException
	 */
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		String token = request.getHeader("Authorization");
		
		if (token == null || !token.startsWith(SecurityConstants.BEARER)) {
			filterChain.doFilter(request, response);
			return;
		}
		
    	String user = JWT.require(Algorithm.HMAC512(SecurityConstants.SECRET_KEY))
    		.build()
    		.verify(token)
    		.getSubject();
    	
    	List<SimpleGrantedAuthority> roles = new ArrayList<>();
        Authentication authentication = new UsernamePasswordAuthenticationToken(user, null, roles);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        filterChain.doFilter(request, response);
	}



}
