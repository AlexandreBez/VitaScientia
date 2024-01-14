package com.vitascientia.model.repository;

import java.util.Date;
import java.util.Optional;

import jakarta.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.vitascientia.model.Usuarios;

// TODO: Auto-generated Javadoc
/**
 * The Interface RepositoryUsuarios.
 */
public interface RepositoryUsuarios extends JpaRepository<Usuarios, Long>{
	
	/**
	 * Find by email.
	 *
	 * @param email the email
	 * @return the optional
	 */
	Optional<Usuarios> findByEmail(String email);
	
	/**
	 * Find by token.
	 *
	 * @param token the token
	 * @return the optional
	 */
	Optional<Usuarios> findByToken(String token);
	
	/**
	 * Salva informacoes recuperacao senha.
	 *
	 * @param token the token
	 * @param expiracao the expiracao
	 * @param email the email
	 */
	@Modifying
	@Query("UPDATE Usuarios u SET u.token = :token, u.expiracao_token = :expiracao WHERE u.email = :email")
	@Transactional
	void salvaInformacoesRecuperacaoSenha(@Param("token") String token, @Param("expiracao") Date expiracao, @Param("email") String email);
	
}
