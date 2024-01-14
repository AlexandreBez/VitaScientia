package com.vitascientia.model;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

// TODO: Auto-generated Javadoc
/**
 * The Class Anotacao.
 */
@SuppressWarnings("serial")
@Entity
@Table
public class Anotacao implements Serializable{

	/** The id anotacao. */
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_anotacao;

	/** The anotacao titulo. */
	@Column(nullable = false)
	private String anotacao_titulo;

	/** The anotacao descricao. */
	@Column(nullable = false,columnDefinition = "TEXT")
	private String anotacao_descricao;

	/** The data criacao. */
	@JsonFormat(pattern = "dd/MM/YYYY HH:mm:ss")
	@Column(nullable = false, columnDefinition = "CHAR(20)")
	private String data_criacao;

	/** The fk usuario. */
	@Column(nullable = false)
	private Long fk_usuario;
   
    
	/**
	 * Instantiates a new anotacao.
	 */
	public Anotacao() {}

	/**
	 * Instantiates a new anotacao.
	 *
	 * @param id_anotacao the id anotacao
	 * @param anotacao_titulo the anotacao titulo
	 * @param anotacao_descricao the anotacao descricao
	 * @param data_criacao the data criacao
	 * @param fk_usuario the fk usuario
	 * @param pesquisa the pesquisa
	 * @param projeto the projeto
	 */
	public Anotacao(Long id_anotacao, String anotacao_titulo, String anotacao_descricao, String data_criacao,Long fk_usuario) {
		super();
		this.id_anotacao = id_anotacao;
		this.anotacao_titulo = anotacao_titulo;
		this.anotacao_descricao = anotacao_descricao;
		this.data_criacao = data_criacao;
		this.fk_usuario = fk_usuario;
	}

	/**
	 * Instantiates a new anotacao.
	 *
	 * @param anotacao_titulo the anotacao titulo
	 * @param anotacao_descricao the anotacao descricao
	 * @param data_criacao the data criacao
	 * @param fk_usuario the fk usuario
	 * @param pesquisa the pesquisa
	 * @param projeto the projeto
	 */
	public Anotacao(String anotacao_titulo, String anotacao_descricao, String data_criacao,Long fk_usuario) {
		super();
		this.anotacao_titulo = anotacao_titulo;
		this.anotacao_descricao = anotacao_descricao;
		this.data_criacao = data_criacao;
		this.fk_usuario = fk_usuario;
	}

	/**
	 * Gets the id anotacao.
	 *
	 * @return the id anotacao
	 */
	public Long getId_anotacao() {
		return id_anotacao;
	}

	/**
	 * Sets the id anotacao.
	 *
	 * @param id_anotacao the new id anotacao
	 */
	public void setId_anotacao(Long id_anotacao) {
		this.id_anotacao = id_anotacao;
	}

	/**
	 * Gets the anotacao titulo.
	 *
	 * @return the anotacao titulo
	 */
	public String getAnotacao_titulo() {
		return anotacao_titulo;
	}

	/**
	 * Sets the anotacao titulo.
	 *
	 * @param anotacao_titulo the new anotacao titulo
	 */
	public void setAnotacao_titulo(String anotacao_titulo) {
		this.anotacao_titulo = anotacao_titulo;
	}

	/**
	 * Gets the anotacao descricao.
	 *
	 * @return the anotacao descricao
	 */
	public String getAnotacao_descricao() {
		return anotacao_descricao;
	}

	/**
	 * Sets the anotacao descricao.
	 *
	 * @param anotacao_descricao the new anotacao descricao
	 */
	public void setAnotacao_descricao(String anotacao_descricao) {
		this.anotacao_descricao = anotacao_descricao;
	}

	/**
	 * Gets the data criacao.
	 *
	 * @return the data criacao
	 */
	public String getData_criacao() {
		return data_criacao;
	}

	/**
	 * Sets the data criacao.
	 *
	 * @param data_criacao the new data criacao
	 */
	public void setData_criacao(String data_criacao) {
		this.data_criacao = data_criacao;
	}

	/**
	 * Gets the fk usuario.
	 *
	 * @return the fk usuario
	 */
	public Long getFk_usuario() {
		return fk_usuario;
	}

	/**
	 * Sets the fk usuario.
	 *
	 * @param fk_usuario the new fk usuario
	 */
	public void setFk_usuario(Long fk_usuario) {
		this.fk_usuario = fk_usuario;
	}

}
