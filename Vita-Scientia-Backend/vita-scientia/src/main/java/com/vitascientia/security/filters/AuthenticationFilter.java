package com.vitascientia.security.filters;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.vitascientia.model.Usuarios;
import com.vitascientia.security.managers.CustomAuthenticationManager;

// TODO: Auto-generated Javadoc
/**
 * The Class AuthenticationFilter.
 */
public class AuthenticationFilter extends UsernamePasswordAuthenticationFilter{
	
    /** The authentication manager. */
    @Autowired
    CustomAuthenticationManager authenticationManager;
    
    /**
     * Instantiates a new authentication filter.
     *
     * @param authenticationManager the authentication manager
     */
    public AuthenticationFilter(CustomAuthenticationManager authenticationManager) {
    	this.authenticationManager = authenticationManager;
    }

    /**
     * Attempt authentication.
     *
     * @param request the request
     * @param response the response
     * @return the authentication
     * @throws AuthenticationException the authentication exception
     */
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
            throws AuthenticationException {
        try {
            Usuarios user = new ObjectMapper().readValue(request.getInputStream(), Usuarios.class);
            Authentication authentication = new UsernamePasswordAuthenticationToken(user.getEmail(), user.getSenha());
            return authenticationManager.authenticate(authentication);
        } catch (IOException e) {
            throw new RuntimeException();
        } 
    }
    
    /**
     * Unsuccessful authentication.
     *
     * @param request the request
     * @param response the response
     * @param failed the failed
     * @throws IOException Signals that an I/O exception has occurred.
     * @throws ServletException the servlet exception
     */
    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response,
    		AuthenticationException failed) throws IOException, ServletException {
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.getWriter().write(failed.getMessage());
        response.getWriter().flush();
    }
    
    /**
     * Successful authentication.
     *
     * @param request the request
     * @param response the response
     * @param chain the chain
     * @param authResult the auth result
     * @throws IOException Signals that an I/O exception has occurred.
     * @throws ServletException the servlet exception
     */
    @Override
    @Transactional
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
    	Date currentDate = new Date();
        long eightHoursInMillis = 8 * 60 * 60 * 1000; // 8 hours in milliseconds
        Date newDate = new Date(currentDate.getTime() + eightHoursInMillis);
    	SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/YYYY HH:mm:ss");
    	
    	String token = JWT.create()
    			.withSubject(authResult.getName())
    			.withExpiresAt(newDate)
    			.sign(Algorithm.HMAC512("bQeThWmZq4t7w!z$C&F)J@NcRfUjXn2r5u8x/A?D*G-KaPdSgVkYp3s6v9y$B&E("));
   
		Map<String, Object> responseBody = new HashMap<>();
		responseBody.put("expiracao", dateFormat.format(newDate));
		responseBody.put("jwt", token);
		responseBody.put("email", authResult.getName());
	    
		ObjectMapper objectMapper = new ObjectMapper();
		objectMapper.writeValue(response.getWriter(), responseBody);
    }

}