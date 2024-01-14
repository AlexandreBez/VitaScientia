package com.vitascientia.model;

import java.io.Serializable;
import java.math.BigDecimal;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

// TODO: Auto-generated Javadoc
/**
 * The Class Requisitos.
 */
@SuppressWarnings("serial")
@Entity
@Table
public class Requisitos implements Serializable{

	/** The id requisito. */
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_requisito;

	/** The item. */
	@Column(nullable = false)
	private String item;

	/** The preco. */
	@Column(nullable = false, columnDefinition = "DECIMAL(10,2)")
	private BigDecimal preco;

	/** The data criacao. */
	@JsonFormat(pattern = "dd/MM/YYYY HH:mm:ss")
	@Column(nullable = false, columnDefinition = "CHAR(20)")
	private String data_criacao;
	
    /** The pesquisa. */
	@Column(nullable = false)
    private Long fk_pesquisa;

	/**
	 * Instantiates a new requisitos.
	 */
	public Requisitos() {}

	/**
	 * Instantiates a new requisitos.
	 *
	 * @param id_requisito the id requisito
	 * @param item the item
	 * @param preco the preco
	 * @param data_criacao the data criacao
	 * @param fk_pesquisa the fk pesquisa
	 */
	public Requisitos(Long id_requisito, String item, BigDecimal preco, String data_criacao, Long fk_pesquisa) {
		super();
		this.id_requisito = id_requisito;
		this.item = item;
		this.preco = preco;
		this.data_criacao = data_criacao;
		this.fk_pesquisa = fk_pesquisa;
	}

	/**
	 * Instantiates a new requisitos.
	 *
	 * @param item the item
	 * @param preco the preco
	 * @param data_criacao the data criacao
	 * @param fk_pesquisa the fk pesquisa
	 */
	public Requisitos(String item, BigDecimal preco, String data_criacao, Long fk_pesquisa) {
		super();
		this.item = item;
		this.preco = preco;
		this.data_criacao = data_criacao;
		this.fk_pesquisa = fk_pesquisa;
	}

	/**
	 * Gets the id requisito.
	 *
	 * @return the id requisito
	 */
	public Long getId_requisito() {
		return id_requisito;
	}

	/**
	 * Sets the id requisito.
	 *
	 * @param id_requisito the new id requisito
	 */
	public void setId_requisito(Long id_requisito) {
		this.id_requisito = id_requisito;
	}

	/**
	 * Gets the item.
	 *
	 * @return the item
	 */
	public String getItem() {
		return item;
	}

	/**
	 * Sets the item.
	 *
	 * @param item the new item
	 */
	public void setItem(String item) {
		this.item = item;
	}

	/**
	 * Gets the preco.
	 *
	 * @return the preco
	 */
	public BigDecimal getPreco() {
		return preco;
	}

	/**
	 * Sets the preco.
	 *
	 * @param preco the new preco
	 */
	public void setPreco(BigDecimal preco) {
		this.preco = preco;
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
	 * Gets the fk pesquisa.
	 *
	 * @return the fk pesquisa
	 */
	public Long getFk_pesquisa() {
		return fk_pesquisa;
	}

	/**
	 * Sets the fk pesquisa.
	 *
	 * @param fk_pesquisa the new fk pesquisa
	 */
	public void setFk_pesquisa(Long fk_pesquisa) {
		this.fk_pesquisa = fk_pesquisa;
	}

}
