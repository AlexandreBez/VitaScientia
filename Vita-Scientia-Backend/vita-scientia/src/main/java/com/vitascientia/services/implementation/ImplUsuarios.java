package com.vitascientia.services.implementation;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.vitascientia.model.Usuarios;

// TODO: Auto-generated Javadoc
/**
 * The Interface ImplUsuarios.
 */
public interface ImplUsuarios{
	
	/**
	 * Pega usuario pelo email.
	 *
	 * @param email the email
	 * @return the usuarios
	 */
	Usuarios pegaUsuarioPeloEmail(String email);
	
	/**
	 * Cria novo usuario.
	 *
	 * @param usuarios the usuarios
	 * @return the response entity
	 */
	ResponseEntity<HttpStatus> criaNovoUsuario(Usuarios usuarios);
	
	/**
	 * Envia email de recuperacao de senha.
	 *
	 * @param email the email
	 * @return the response entity
	 */
	ResponseEntity<HttpStatus> enviaEmailDeRecuperacaoDeSenha(String email);
	
	/**
	 * Valida token de recuperacao de senha.
	 *
	 * @param token the token
	 * @return the response entity
	 */
	ResponseEntity<HttpStatus> validaTokenDeRecuperacaoDeSenha(String token);
	
	/**
	 * Atualiza senha do usuario.
	 *
	 * @param usuarios the usuarios
	 * @return the response entity
	 */
	ResponseEntity<HttpStatus> atualizaSenhaDoUsuario(Usuarios usuarios);
	
	/**
	 * Envia email de recuperacao de senha funcao teste.
	 *
	 * @param email the email
	 * @return the response entity
	 */
	ResponseEntity<HttpStatus> enviaEmailDeRecuperacaoDeSenhaFuncaoTeste(String email);
	
	/**
	 * pega o id de um usuario
	 *
	 * @param email the email
	 * @return the response entity
	 */
	ResponseEntity<Long> idUsuario(String email);
}
