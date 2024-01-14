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
 * The Class Anotacao_projeto.
 */
@SuppressWarnings("serial")
@Entity
@Table
public class Anotacao_projeto implements Serializable{
	
	/** The id anotacao projeto. */
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_anotacao_projeto;
	
	/** The fk anotacao. */
	@Column(nullable = false)
    private Long fk_anotacao;

	/** The fk projeto. */
	@Column(nullable = false)
    private Long fk_projeto;
	
	/**
	 * Instantiates a new anotacao projeto.
	 */
	public Anotacao_projeto() {}

	/**
	 * Instantiates a new anotacao projeto.
	 *
	 * @param id_anotacao_projeto the id anotacao projeto
	 * @param fk_anotacao the fk anotacao
	 * @param fk_projeto the fk projeto
	 */
	public Anotacao_projeto(Long id_anotacao_projeto, Long fk_anotacao, Long fk_projeto) {
		super();
		this.id_anotacao_projeto = id_anotacao_projeto;
		this.fk_anotacao = fk_anotacao;
		this.fk_projeto = fk_projeto;
	}

	/**
	 * Instantiates a new anotacao projeto.
	 *
	 * @param fk_anotacao the fk anotacao
	 * @param fk_projeto the fk projeto
	 */
	public Anotacao_projeto(Long fk_anotacao, Long fk_projeto) {
		super();
		this.fk_anotacao = fk_anotacao;
		this.fk_projeto = fk_projeto;
	}

	/**
	 * Gets the id anotacao projeto.
	 *
	 * @return the id anotacao projeto
	 */
	public Long getId_anotacao_projeto() {
		return id_anotacao_projeto;
	}

	/**
	 * Sets the id anotacao projeto.
	 *
	 * @param id_anotacao_projeto the new id anotacao projeto
	 */
	public void setId_anotacao_projeto(Long id_anotacao_projeto) {
		this.id_anotacao_projeto = id_anotacao_projeto;
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
	 * Gets the fk projeto.
	 *
	 * @return the fk projeto
	 */
	public Long getFk_projeto() {
		return fk_projeto;
	}

	/**
	 * Sets the fk projeto.
	 *
	 * @param fk_projeto the new fk projeto
	 */
	public void setFk_projeto(Long fk_projeto) {
		this.fk_projeto = fk_projeto;
	}

}
