package com.vitascientia.service.objects;

/**
 * Classe UpdatePasswordObj para o requisicao de nova password
 * @author Lucas Alexandre
 * @since 1.0.0
 */
public class UpdatePasswordObj {

	/** Variavel token. */
	private String token;
	
	/** Variavel password. */
	private String password;
	
	/**
	 * Intancia do UpdatePasswordObj.
	 */
	public UpdatePasswordObj() {}
	
	/**
	 * Intancia do UpdatePasswordObj.
	 *
	 * @param token
	 * @param password
	 */
	public UpdatePasswordObj(String token, String password) {
		super();
		this.token = token;
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
	
}
