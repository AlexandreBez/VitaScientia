package com.vitascientia.security.filter;

import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.vitascientia.model.Users;
import com.vitascientia.security.SecurityConstants;
import com.vitascientia.security.manager.CustomAuthenticationManager;

/**
 * Classe AuthenticationFilter para customizacao da corrente do Spring Security
 * @author Lucas Alexandre
 * @since 1.0.0
 */
public class AuthenticationFilter extends UsernamePasswordAuthenticationFilter{
	
    /** Inicializacao da class authenticationManager. */
    private CustomAuthenticationManager authenticationManager;
    
    /**
     * Intancia uma nova class authenticationFilter.
     * Necessario fazer desse jeito para injetar o custom authenticationManager
     * @param authenticationManager
     */
    public AuthenticationFilter(CustomAuthenticationManager authenticationManager) {
    	this.authenticationManager = authenticationManager;
    }

    /**
     * Classe responsavel pela chamada de tentativa de autenticacao na corrente
     * Pega da request os dados para criar um objeto Users, chama o authentication manager enviando os dados
     * e retorna um objeto authentication para a corrente
     * @param request
     * @param response
     * @return Objeto authentication para a corrente
     * @throws AuthenticationException
     */
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
            throws AuthenticationException {
        try {
            Users user = new ObjectMapper().readValue(request.getInputStream(), Users.class);
            Authentication authentication = new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword());
            return authenticationManager.authenticate(authentication);
        } catch (IOException e) {
            throw new RuntimeException();
        } 
    }
    
    /**
     * Funcao chamada na corrente caso a tentativa de login ser falha com o status e a mensagem
     * Encerrando a corrente
     * @param request
     * @param response
     * @param failed
     * @throws IOException
     * @throws ServletException
     */
    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response,
    		AuthenticationException failed) throws IOException, ServletException {
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.getWriter().write(failed.getMessage());
        response.getWriter().flush();
    }
    
    /**
     * Funcao chamada na corrente caso a tentative de login ser feita com sucesso e enviando um JWT token e a data 
     * de expiracao do token(24 horas) no cabecalho e encerra a corrente
     * @param request
     * @param response
     * @param chain
     * @param authResult
     * @throws IOException
     * @throws ServletException
     */
    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
    		Authentication authResult) throws IOException, ServletException {
    	Date expirationDate = new Date(System.currentTimeMillis() + 86400000);
    	String token = JWT.create()
    			.withSubject(authResult.getName())
    			.withExpiresAt(expirationDate)
    			.sign(Algorithm.HMAC512(SecurityConstants.SECRET_KEY));

		Map<String, Object> responseBody = new HashMap<>();
		responseBody.put("token", token);
		responseBody.put("expiration", expirationDate.toString());
	    
		ObjectMapper objectMapper = new ObjectMapper();
		objectMapper.writeValue(response.getWriter(), responseBody);
    }
}
