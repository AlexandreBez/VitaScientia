package com.vitascientia.model.repository;

import java.util.Date;
import java.util.Optional;

import jakarta.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.vitascientia.model.Users;

/**
 * A interface UserRepository com a extencao JPARepository fazendo a implementação de funcoes de CRUD alem de 
 * implementações customizadas
 * @author Lucas Alexandre
 * @since 1.0.0
 */
public interface UserRepository extends JpaRepository<Users, Integer>{
	
	/**
	 * Encontra usuario pelo email.
	 * @param username
	 * @return Lista(Opcional) de usuarios
	 */
	Optional<Users> findByEmail(String email);
	
	/**
	 * Encontra usuario pelo token.
	 * @param token
	 * @return Lista(Opcional) de usuarios
	 */
	Optional<Users> findByToken(String token);
	
	/**
	 * Salva/Atualiza o token e a data de expiracao para a requisicao de reset de senha
	 * @param token
	 * @param expiration
	 * @param username
	 * @return Resultado da operacao do SQL
	 */
	@Modifying
	@Query("UPDATE Users u SET u.token = :token, u.expiration_date = :expiration WHERE u.email = :email")
	@Transactional
	Integer saveRecoverPasswordInformations(@Param("token") String token, @Param("expiration") Date expiration, @Param("email") String email);

	/**
	 * Salva a nova senha, limpando as colunas do token e a data de expiracao com valores null 
	 * para a requisicao de reset de senha
	 * @param password
	 * @param token
	 * @return Resultado da operacao do SQL
	 */
	@Modifying
	@Query("UPDATE Users u SET u.token = null, u.expiration_date = null, u.password = :password  WHERE u.token = :token")
	@Transactional
	Integer updatePassword(@Param("password") String password,@Param("token") String token);
	
}
