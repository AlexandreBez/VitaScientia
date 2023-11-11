package com.vitascientia.model;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

/**
 * Classe Users como referencia para objeto e tabela users auxiliando no JPA
 * @author Lucas Alexandre
 * @since 1.0.0
 */
@Entity
@Table(name="USERS")
public class Users {

	/** Coluna id_user */
	@Id
	@Column(name="ID_USER")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_user;
	
	/** Coluna username. */
	@NotNull(message = "Email can't be empty...")
	@NotBlank(message = "Email can't be empty...")
	@Email(message = "Email not valid...")
	@Column(nullable = false, length = 100, unique = true,name="EMAIL")
	private String email;

	/** Coluna password. */
	@NotNull(message = "Password can't be empty...")
	@NotBlank(message = "Password can't be empty...")
	@Column(nullable = false, length = 255, name="PASSWORD")
	private String password;
	
	/** Coluna token. */
	@Column(nullable = true, length = 255, unique = true, name="TOKEN")
	private String token;
	
	/** Coluna expiration date. */
	@Column(nullable = true, name="EXPIRATION_DATE")
	private Date expiration_date;

	/**
	 * Intancia do Users.
	 */
	public Users() {}

	/**
	 * Intancia do Users.
	 * @param email
	 * @param password
	 * @param token
	 * @param expiration_date
	 */
	public Users(
			@NotNull(message = "Email can't be empty...") @NotBlank(message = "Email can't be empty...") @Email(message = "Email not valid...") String email,
			@NotNull(message = "Password can't be empty...") @NotBlank(message = "Password can't be empty...") String password,
			String token, Date expiration_date) {
		super();
		this.email = email;
		this.password = password;
		this.token = token;
		this.expiration_date = expiration_date;
	}

	/**
	 * Pega o id_user.
	 * @return o id_user
	 */
	public int getId_user() {
		return id_user;
	}

	/**
	 * Seta o token.
	 * @param token Seta o novo id_user
	 */
	public void setId_user(int id_user) {
		this.id_user = id_user;
	}

	/**
	 * Pega o email.
	 * @return o email
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * Seta o email.
	 * @param token Seta o novo email
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 * Pega o password.
	 * @return o password
	 */
	public String getPassword() {
		return password;
	}

	/**
	 * Seta o password.
	 * @param token Seta o novo password
	 */
	public void setPassword(String password) {
		this.password = password;
	}

	/**
	 * Pega o token.
	 * @return o token
	 */
	public String getToken() {
		return token;
	}

	/**
	 * Seta o token.
	 * @param token Seta o novo token
	 */
	public void setToken(String token) {
		this.token = token;
	}

	/**
	 * Pega o expiration_date.
	 * @return o expiration_date
	 */
	public Date getExpirationDate() {
		return expiration_date;
	}

	/**
	 * Seta o expiration_date.
	 * @param token Seta o novo expiration_date
	 */
	public void setExpirationDate(Date expiration_date) {
		this.expiration_date = expiration_date;
	}

}
