package com.vitascientia.model;

import java.io.Serializable;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;

import com.fasterxml.jackson.annotation.JsonFormat;

// TODO: Auto-generated Javadoc
/**
 * The Class Usuarios.
 */
@SuppressWarnings("serial")
@Entity
@Table
public class Usuarios implements Serializable{

	/** The id usuario. */
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_usuario;
	
	/** The email. */
	@Email(message = "Formato do email inválido")
	@Column(nullable = false, unique = true)
	private String email;

	/** The senha. */
	@Column(nullable = false)
	private String senha;
	
	/** The token. */
	@Column(nullable = true, unique = true)
	private String token;
	
	/** The expiracao token. */
	@Column(nullable = true)
	@JsonFormat(pattern = "dd/MM/YYYY HH:mm:ss")
	private Date expiracao_token;

	/**
	 * Instantiates a new usuarios.
	 */
	public Usuarios() {}

	/**
	 * Instantiates a new usuarios.
	 *
	 * @param email the email
	 * @param senha the senha
	 * @param token the token
	 * @param expiracao_token the expiracao token
	 */
	public Usuarios(@Email(message = "Formato do email inválido") String email, String senha, String token,
			Date expiracao_token) {
		super();
		this.email = email;
		this.senha = senha;
		this.token = token;
		this.expiracao_token = expiracao_token;
	}

	/**
	 * Instantiates a new usuarios.
	 *
	 * @param id_usuario the id usuario
	 * @param email the email
	 * @param senha the senha
	 * @param token the token
	 * @param expiracao_token the expiracao token
	 */
	public Usuarios(Long id_usuario, @Email(message = "Formato do email inválido") String email, String senha,
			String token, Date expiracao_token) {
		super();
		this.id_usuario = id_usuario;
		this.email = email;
		this.senha = senha;
		this.token = token;
		this.expiracao_token = expiracao_token;
	}
	
	/**
	 * Instantiates a new usuarios.
	 *
	 * @param email the email
	 * @param senha the senha
	 */
	public Usuarios(@Email(message = "Formato do email inválido") String email, String senha) {
		super();
		this.email = email;
		this.senha = senha;
	}

	/**
	 * Gets the id usuario.
	 *
	 * @return the id usuario
	 */
	public Long getId_usuario() {
		return id_usuario;
	}

	/**
	 * Sets the id usuario.
	 *
	 * @param id_usuario the new id usuario
	 */
	public void setId_usuario(Long id_usuario) {
		this.id_usuario = id_usuario;
	}

	/**
	 * Gets the email.
	 *
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * Sets the email.
	 *
	 * @param email the new email
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 * Gets the senha.
	 *
	 * @return the senha
	 */
	public String getSenha() {
		return senha;
	}

	/**
	 * Sets the senha.
	 *
	 * @param senha the new senha
	 */
	public void setSenha(String senha) {
		this.senha = senha;
	}

	/**
	 * Gets the token.
	 *
	 * @return the token
	 */
	public String getToken() {
		return token;
	}

	/**
	 * Sets the token.
	 *
	 * @param token the new token
	 */
	public void setToken(String token) {
		this.token = token;
	}

	/**
	 * Gets the expiracao token.
	 *
	 * @return the expiracao token
	 */
	public Date getExpiracao_token() {
		return expiracao_token;
	}

	/**
	 * Sets the expiracao token.
	 *
	 * @param expiracao_token the new expiracao token
	 */
	public void setExpiracao_token(Date expiracao_token) {
		this.expiracao_token = expiracao_token;
	}

}