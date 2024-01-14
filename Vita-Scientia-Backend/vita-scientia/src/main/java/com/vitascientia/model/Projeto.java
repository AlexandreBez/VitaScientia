package com.vitascientia.model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

// TODO: Auto-generated Javadoc
/**
 * The Class Projeto.
 */
@SuppressWarnings("serial")
@Entity
@Table
public class Projeto implements Serializable {

	/** The id projeto. */
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_projeto;

	/** The projeto titulo. */
	@Column(nullable = false)
	private String projeto_titulo;

	/** The projeto descricao. */
	@Column(nullable = false, columnDefinition = "TEXT")
	private String projeto_descricao;

	/** The status. */
	@Column(nullable = false)
	private String status;

	/** The data criacao. */
	@Column(nullable = false,columnDefinition = "CHAR(20)")
	@JsonFormat(pattern = "dd/MM/YYYY HH:mm:ss")
	private String data_criacao;

	/** The fk usuario. */
	@Column(nullable = false)
	private Long fk_usuario;

	/**
	 * Instantiates a new projeto.
	 */
	public Projeto() {
	}

	/**
	 * Instantiates a new projeto.
	 *
	 * @param id_projeto the id projeto
	 * @param projeto_titulo the projeto titulo
	 * @param projeto_descricao the projeto descricao
	 * @param status the status
	 * @param data_criacao the data criacao
	 * @param fk_usuario the fk usuario
	 * @param pesquisa the pesquisa
	 * @param anotacao the anotacao
	 */
	public Projeto(Long id_projeto, String projeto_titulo, String projeto_descricao, String status, String data_criacao, Long fk_usuario) {
		super();
		this.id_projeto = id_projeto;
		this.projeto_titulo = projeto_titulo;
		this.projeto_descricao = projeto_descricao;
		this.status = status;
		this.data_criacao = data_criacao;
		this.fk_usuario = fk_usuario;
	}

	/**
	 * Instantiates a new projeto.
	 *
	 * @param projeto_titulo the projeto titulo
	 * @param projeto_descricao the projeto descricao
	 * @param status the status
	 * @param data_criacao the data criacao
	 * @param fk_usuario the fk usuario
	 * @param pesquisa the pesquisa
	 * @param anotacao the anotacao
	 */
	public Projeto(String projeto_titulo, String projeto_descricao, String status, String data_criacao,Long fk_usuario) {
		super();
		this.projeto_titulo = projeto_titulo;
		this.projeto_descricao = projeto_descricao;
		this.status = status;
		this.data_criacao = data_criacao;
		this.fk_usuario = fk_usuario;
	}
	
	/**
	 * Gets the id projeto.
	 *
	 * @return the id projeto
	 */
	public Long getId_projeto() {
		return id_projeto;
	}

	/**
	 * Sets the id projeto.
	 *
	 * @param id_projeto the new id projeto
	 */
	public void setId_projeto(Long id_projeto) {
		this.id_projeto = id_projeto;
	}

	/**
	 * Gets the projeto titulo.
	 *
	 * @return the projeto titulo
	 */
	public String getProjeto_titulo() {
		return projeto_titulo;
	}

	/**
	 * Sets the projeto titulo.
	 *
	 * @param projeto_titulo the new projeto titulo
	 */
	public void setProjeto_titulo(String projeto_titulo) {
		this.projeto_titulo = projeto_titulo;
	}

	/**
	 * Gets the projeto descricao.
	 *
	 * @return the projeto descricao
	 */
	public String getProjeto_descricao() {
		return projeto_descricao;
	}

	/**
	 * Sets the projeto descricao.
	 *
	 * @param projeto_descricao the new projeto descricao
	 */
	public void setProjeto_descricao(String projeto_descricao) {
		this.projeto_descricao = projeto_descricao;
	}

	/**
	 * Gets the status.
	 *
	 * @return the status
	 */
	public String getStatus() {
		return status;
	}

	/**
	 * Sets the status.
	 *
	 * @param status the new status
	 */
	public void setStatus(String status) {
		this.status = status;
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
