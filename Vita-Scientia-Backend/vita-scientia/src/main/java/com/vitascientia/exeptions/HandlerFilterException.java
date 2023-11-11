package com.vitascientia.exeptions;

import java.io.IOException;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.web.filter.OncePerRequestFilter;

import com.auth0.jwt.exceptions.JWTVerificationException;

/**
 * Classe HandlerFilterException para auxiliar na repostas de erro de requests utilizando 
 * da extensao OncePerRequestFilter para evitar que a funcao seja chama mais de uma vez
 * @author Lucas Alexandre
 * @since 1.0.0
 */
public class HandlerFilterException extends OncePerRequestFilter{

	/**
	 * Caso no meio da cadeia de execucao do Spring Security aconteca os erros: 
	 * 	- Usuario inexistente
	 *  - JWT token for invalido/expirado
	 *  - Request feita pelo front end tiver erros
	 * essa funcao e responsavel por retornar o status e a mensagem de erro
	 * @param request
	 * @param response
	 * @param filterChain
	 * @throws ServletException
	 * @throws IOException
	 */
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
        try {
            filterChain.doFilter(request, response);
        } catch (EntityNotFoundException e) {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.getWriter().write("Username doesn't exist");
            response.getWriter().flush();
        } catch (JWTVerificationException e) {
            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
            response.getWriter().write("JWT NOT VALID");
            response.getWriter().flush();
        } catch (RuntimeException e) {
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            response.getWriter().write("BAD REQUEST");
            response.getWriter().flush();
        } 
		
	}

}
