package com.vitascientia.services.implementation;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.vitascientia.model.Projeto;
import com.vitascientia.model.ObjectAux.ProjetoAux;

// TODO: Auto-generated Javadoc
/**
 * The Interface ImplProjeto.
 */
public interface ImplProjeto {

	/**
	 * Projetos nao associados.
	 *
	 * @param id_pesquisa the id pesquisa
	 * @param id_usuario the id usuario
	 * @return the response entity
	 */
	ResponseEntity<List<Projeto>> projetosNaoAssociados(Long id_pesquisa, Long id_usuario);
	
	/**
	 * Associar projeto.
	 *
	 * @param id_pesquisa the id pesquisa
	 * @param listaProjetos the lista projetos
	 * @return the response entity
	 */
	ResponseEntity<List<Projeto>> associarProjeto(Long id_pesquisa, List<Long> listaProjetos);
	
	/**
	 * Desassociar projeto.
	 *
	 * @param id_pesquisa the id pesquisa
	 * @param id_projeto the id projeto
	 * @return the response entity
	 */
	ResponseEntity<HttpStatus> desassociarProjeto(Long id_pesquisa, Long id_projeto);
	
	/**
	 * Lista de projeto.
	 *
	 * @param id_usuario the id usuario
	 * @param pageable the pageable
	 * @return the response entity
	 */
	ResponseEntity<Page<ProjetoAux>> listaDeProjeto(Long id_usuario, Pageable pageable);
	
	/**
	 * Pesquisa pelo titulo.
	 *
	 * @param id_usuario the id usuario
	 * @param titulo the titulo
	 * @param pageable the pageable
	 * @return the response entity
	 */
	ResponseEntity<Page<ProjetoAux>> pesquisaPeloTitulo(Long id_usuario, String titulo, Pageable pageable);
	
	/**
	 * Pesquisa pelo id.
	 *
	 * @param id_usuario the id usuario
	 * @param nota_id the nota id
	 * @param pageable the pageable
	 * @return the response entity
	 */
	ResponseEntity<Page<ProjetoAux>> pesquisaPeloId(Long id_usuario, Long nota_id, Pageable pageable);
	
	/**
	 * Edita projeto.
	 *
	 * @param projeto the projeto
	 * @return the response entity
	 */
	ResponseEntity<HttpStatus> editaProjeto(Projeto projeto);
	
	/**
	 * Novo projeto.
	 *
	 * @param projeto the projeto
	 * @return the response entity
	 */
	ResponseEntity<ProjetoAux> novoProjeto(Projeto projeto);
	
	/**
	 * Deleta projeto.
	 *
	 * @param id_projeto the id projeto
	 * @return the response entity
	 */
	ResponseEntity<HttpStatus> deletaProjeto(Long id_projeto);
	
}
