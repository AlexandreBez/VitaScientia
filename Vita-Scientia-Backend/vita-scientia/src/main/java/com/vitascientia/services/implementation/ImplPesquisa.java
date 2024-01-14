package com.vitascientia.services.implementation;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.vitascientia.model.Pesquisa;
import com.vitascientia.model.ObjectAux.PesquisaAux;

// TODO: Auto-generated Javadoc
/**
 * The Interface ImplPesquisa.
 */
public interface ImplPesquisa {
	
	/**
	 * Lista de pesquisas.
	 *
	 * @param id the id
	 * @param pageable the pageable
	 * @return the response entity
	 */
	ResponseEntity<Page<PesquisaAux>> listaDePesquisas(Long id, Pageable pageable);
	
	/**
	 * Procura pelo titulo.
	 *
	 * @param id the id
	 * @param titulo the titulo
	 * @param pageable the pageable
	 * @return the response entity
	 */
	ResponseEntity<Page<PesquisaAux>> procuraPeloTitulo(Long id, String titulo, Pageable pageable);
	
	/**
	 * Procura pelo id.
	 *
	 * @param id the id
	 * @param notaId the nota id
	 * @param pageable the pageable
	 * @return the response entity
	 */
	ResponseEntity<Page<PesquisaAux>> procuraPeloId(Long id, Long notaId, Pageable pageable);

	/**
	 * Nova pesquisa.
	 *
	 * @param pesquisa the pesquisa
	 * @return the response entity
	 */
	ResponseEntity<PesquisaAux> novaPesquisa(Pesquisa pesquisa);
	
	/**
	 * Edita pesquisa.
	 *
	 * @param pesquisa the pesquisa
	 * @return the response entity
	 */
	ResponseEntity<HttpStatus> editaPesquisa(Pesquisa pesquisa);
	
	/**
	 * Deleta pesquisa.
	 *
	 * @param id the id
	 * @return the response entity
	 */
	ResponseEntity<HttpStatus> deletaPesquisa(Long id);
}
