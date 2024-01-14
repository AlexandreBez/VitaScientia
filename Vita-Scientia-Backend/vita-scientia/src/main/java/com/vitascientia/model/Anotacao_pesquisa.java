package com.vitascientia.model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

// TODO: Auto-generated Javadoc
/**
 * The Class Anotacao_pesquisa.
 */
@SuppressWarnings("serial")
@Entity
@Table
public class Anotacao_pesquisa implements Serializable{

	/** The id anotacao pesquisa. */
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_anotacao_pesquisa;
	
	/** The fk anotacao. */
	@Column(nullable = false)
    private Long fk_anotacao;

	/** The fk pesquisa. */
	@Column(nullable = false)
    private Long fk_pesquisa;
	
	/**
	 * Instantiates a new anotacao pesquisa.
	 */
	public Anotacao_pesquisa() {}

	/**
	 * Instantiates a new anotacao pesquisa.
	 *
	 * @param id_anotacao_pesquisa the id anotacao pesquisa
	 * @param fk_anotacao the fk anotacao
	 * @param fk_pesquisa the fk pesquisa
	 */
	public Anotacao_pesquisa(Long id_anotacao_pesquisa, Long fk_anotacao, Long fk_pesquisa) {
		super();
		this.id_anotacao_pesquisa = id_anotacao_pesquisa;
		this.fk_anotacao = fk_anotacao;
		this.fk_pesquisa = fk_pesquisa;
	}

	/**
	 * Instantiates a new anotacao pesquisa.
	 *
	 * @param fk_anotacao the fk anotacao
	 * @param fk_pesquisa the fk pesquisa
	 */
	public Anotacao_pesquisa(Long fk_anotacao, Long fk_pesquisa) {
		super();
		this.fk_anotacao = fk_anotacao;
		this.fk_pesquisa = fk_pesquisa;
	}

	/**
	 * Gets the id anotacao pesquisa.
	 *
	 * @return the id anotacao pesquisa
	 */
	public Long getId_anotacao_pesquisa() {
		return id_anotacao_pesquisa;
	}

	/**
	 * Sets the id anotacao pesquisa.
	 *
	 * @param id_anotacao_pesquisa the new id anotacao pesquisa
	 */
	public void setId_anotacao_pesquisa(Long id_anotacao_pesquisa) {
		this.id_anotacao_pesquisa = id_anotacao_pesquisa;
	}

	/**
	 * Gets the fk anotacao.
	 *
	 * @return the fk anotacao
	 */
	public Long getFk_anotacao() {
		return fk_anotacao;
	}

	/**
	 * Sets the fk anotacao.
	 *
	 * @param fk_anotacao the new fk anotacao
	 */
	public void setFk_anotacao(Long fk_anotacao) {
		this.fk_anotacao = fk_anotacao;
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
