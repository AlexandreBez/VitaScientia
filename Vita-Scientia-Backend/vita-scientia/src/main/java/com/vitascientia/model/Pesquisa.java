package com.vitascientia.model;

import java.io.Serializable;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

// TODO: Auto-generated Javadoc
/**
 * The Class Pesquisa.
 */
@SuppressWarnings("serial")
@Entity
@Table
public class Pesquisa implements Serializable{

	/** The id pesquisa. */
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_pesquisa;
	
	/** The pesquisa titulo. */
	@Column(nullable = false)
	private String pesquisa_titulo;
	
	/** The pesquisa descricao. */
	@Column(nullable = false, columnDefinition = "TEXT")
	private String pesquisa_descricao;
	
	/** The data criacao. */
	@Column(nullable = false, columnDefinition = "CHAR(20)")
	@JsonFormat(pattern = "dd/MM/YYYY HH:mm:ss")
	private String data_criacao;
	
	/** The status. */
	@Column(nullable = false)
	private String status;
	
	/** The fk usuario. */
	@Column(nullable = false)
	private Long fk_usuario;
	
	/**
	 * Instantiates a new pesquisa.
	 */
	public Pesquisa(){}
	
	/**
	 * Instantiates a new pesquisa.
	 *
	 * @param id_pesquisa the id pesquisa
	 * @param pesquisa_titulo the pesquisa titulo
	 * @param pesquisa_descricao the pesquisa descricao
	 * @param data_criacao the data criacao
	 * @param status the status
	 * @param fk_usuario the fk usuario
	 * @param projeto the projeto
	 * @param anotacao the anotacao
	 * @param requisito the requisito
	 */
	public Pesquisa(Long id_pesquisa, String pesquisa_titulo, String pesquisa_descricao, String data_criacao,
			String status, Long fk_usuario, List<Projeto> projeto, List<Anotacao> anotacao, List<Requisitos> requisito) {
		super();
		this.id_pesquisa = id_pesquisa;
		this.pesquisa_titulo = pesquisa_titulo;
		this.pesquisa_descricao = pesquisa_descricao;
		this.data_criacao = data_criacao;
		this.status = status;
		this.fk_usuario = fk_usuario;
	}

	/**
	 * Instantiates a new pesquisa.
	 *
	 * @param pesquisa_titulo the pesquisa titulo
	 * @param pesquisa_descricao the pesquisa descricao
	 * @param data_criacao the data criacao
	 * @param status the status
	 * @param fk_usuario the fk usuario
	 * @param projeto the projeto
	 * @param anotacao the anotacao
	 * @param requisito the requisito
	 */
	public Pesquisa(String pesquisa_titulo, String pesquisa_descricao, String data_criacao,
			String status, Long fk_usuario, List<Projeto> projeto, List<Anotacao> anotacao, List<Requisitos> requisito) {
		super();
		this.pesquisa_titulo = pesquisa_titulo;
		this.pesquisa_descricao = pesquisa_descricao;
		this.data_criacao = data_criacao;
		this.status = status;
		this.fk_usuario = fk_usuario;
	}

	/**
	 * Gets the id pesquisa.
	 *
	 * @return the id pesquisa
	 */
	public Long getId_pesquisa() {
		return id_pesquisa;
	}

	/**
	 * Sets the id pesquisa.
	 *
	 * @param id_pesquisa the new id pesquisa
	 */
	public void setId_pesquisa(Long id_pesquisa) {
		this.id_pesquisa = id_pesquisa;
	}

	/**
	 * Gets the pesquisa titulo.
	 *
	 * @return the pesquisa titulo
	 */
	public String getPesquisa_titulo() {
		return pesquisa_titulo;
	}

	/**
	 * Sets the pesquisa titulo.
	 *
	 * @param pesquisa_titulo the new pesquisa titulo
	 */
	public void setPesquisa_titulo(String pesquisa_titulo) {
		this.pesquisa_titulo = pesquisa_titulo;
	}

	/**
	 * Gets the pesquisa descricao.
	 *
	 * @return the pesquisa descricao
	 */
	public String getPesquisa_descricao() {
		return pesquisa_descricao;
	}

	/**
	 * Sets the pesquisa descricao.
	 *
	 * @param pesquisa_descricao the new pesquisa descricao
	 */
	public void setPesquisa_descricao(String pesquisa_descricao) {
		this.pesquisa_descricao = pesquisa_descricao;
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
