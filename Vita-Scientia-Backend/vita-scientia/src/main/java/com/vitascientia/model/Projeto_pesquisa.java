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
 * The Class Projeto_pesquisa.
 */
@SuppressWarnings("serial")
@Entity
@Table
public class Projeto_pesquisa implements Serializable{

	/** The id projeto pesquisa. */
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_projeto_pesquisa;
	
    /** The fk projeto. */
    @Column(nullable = false)
    private Long fk_projeto;
	
    /** The fk pesquisa. */
    @Column(nullable = false)
    private Long fk_pesquisa;
	
	/**
	 * Instantiates a new projeto pesquisa.
	 */
	public Projeto_pesquisa() {}

	/**
	 * Instantiates a new projeto pesquisa.
	 *
	 * @param id_projeto_pesquisa the id projeto pesquisa
	 * @param fk_projeto the fk projeto
	 * @param fk_pesquisa the fk pesquisa
	 */
	public Projeto_pesquisa(Long id_projeto_pesquisa, Long fk_projeto, Long fk_pesquisa) {
		super();
		this.id_projeto_pesquisa = id_projeto_pesquisa;
		this.fk_projeto = fk_projeto;
		this.fk_pesquisa = fk_pesquisa;
	}

	/**
	 * Instantiates a new projeto pesquisa.
	 *
	 * @param fk_projeto the fk projeto
	 * @param fk_pesquisa the fk pesquisa
	 */
	public Projeto_pesquisa(Long fk_projeto, Long fk_pesquisa) {
		super();
		this.fk_projeto = fk_projeto;
		this.fk_pesquisa = fk_pesquisa;
	}

	/**
	 * Gets the id projeto pesquisa.
	 *
	 * @return the id projeto pesquisa
	 */
	public Long getId_projeto_pesquisa() {
		return id_projeto_pesquisa;
	}

	/**
	 * Sets the id projeto pesquisa.
	 *
	 * @param id_projeto_pesquisa the new id projeto pesquisa
	 */
	public void setId_projeto_pesquisa(Long id_projeto_pesquisa) {
		this.id_projeto_pesquisa = id_projeto_pesquisa;
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
