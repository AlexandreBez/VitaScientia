package com.vitascientia.service;

import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.vitascientia.model.Users;
import com.vitascientia.service.objects.UpdatePasswordObj;

/**
 * Interface UserService para obrigar a utilizacao dos metodos quando implementado em uma class.
 * @author Lucas Alexandre
 * @since 1.0.0
 */
public interface UserService{

	/**
	 * Pega uma lista de todos os usuarios atraves do id
	 * @param id
	 * @return uma lista de usuarios
	 */
	ResponseEntity<Optional<Users>> getUser(int id);
	
	/**
	 * Pega uma lista de todos os usuarios atraves do username
	 * @param username
	 * @return uma lista de usuarios
	 */
	Users getUser(String username);
	
	/**
	 * Salva novo usuario
	 * @param user
	 * @return o status da transacao
	 */
	ResponseEntity<HttpStatus> saveUser(Users user);
	
	/**
	 * Envia email para recuperara senha
	 * @param username
	 * @return o status da transacao
	 */
	ResponseEntity<HttpStatus> sendRecoverEmail(String email);
	
	/**
	 * Valida o token pra resetar a senha
	 * @param id user_id do banco de dados
	 * @return o status da transacao
	 */
	ResponseEntity<HttpStatus> validateToken(String token);
	
	/**
	 * Faz o update da senha do usuario
	 * @param updatePasswordObj 
	 * @return o status da transacao
	 */
	ResponseEntity<HttpStatus> updatePassword(UpdatePasswordObj updatePasswordObj);

	ResponseEntity<HttpStatus> sendRecoverEmailTest(String email);
}
