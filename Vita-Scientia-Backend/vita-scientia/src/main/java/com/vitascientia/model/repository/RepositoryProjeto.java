package com.vitascientia.model.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.vitascientia.model.Projeto;


// TODO: Auto-generated Javadoc
/**
 * The Interface RepositoryProjeto.
 */
public interface RepositoryProjeto extends JpaRepository<Projeto, Long> {
	
	/**
	 * Lista de projeto.
	 *
	 * @param id_usuario the id usuario
	 * @param pageable the pageable
	 * @return the page
	 */
	@Query("SELECT p FROM Projeto p WHERE p.fk_usuario = :id_usuario ORDER BY p.id_projeto")
	Page<Projeto> listaDeProjeto(@Param("id_usuario") Long id_usuario, Pageable pageable);
	
	/**
	 * Pesquisa pelo titulo.
	 *
	 * @param id_usuario the id usuario
	 * @param titulo the titulo
	 * @param pageable the pageable
	 * @return the page
	 */
	@Query("SELECT p FROM Projeto p WHERE p.fk_usuario = :id_usuario AND p.projeto_titulo LIKE %:titulo% ORDER BY p.id_projeto")
	Page<Projeto> pesquisaPeloTitulo(@Param("id_usuario") Long id_usuario,@Param("titulo") String titulo, Pageable pageable);
	
	/**
	 * Pesquisa pelo id.
	 *
	 * @param id_usuario the id usuario
	 * @param id_projeto the id projeto
	 * @param pageable the pageable
	 * @return the page
	 */
	@Query("SELECT p FROM Projeto p WHERE p.fk_usuario = :id_usuario AND p.id_projeto = :id_projeto ORDER BY p.id_projeto")
	Page<Projeto> pesquisaPeloId(@Param("id_usuario") Long id_usuario, @Param("id_projeto") Long id_projeto, Pageable pageable);
	
}
