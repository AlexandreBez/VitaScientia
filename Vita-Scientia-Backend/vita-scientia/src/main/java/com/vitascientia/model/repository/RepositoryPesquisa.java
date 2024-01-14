package com.vitascientia.model.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.vitascientia.model.Pesquisa;


// TODO: Auto-generated Javadoc
/**
 * The Interface RepositoryPesquisa.
 */
public interface RepositoryPesquisa extends JpaRepository<Pesquisa, Long> {
	
	//---------------------------Query para procurar---------------------------
	/**
	 * Lista de pesquisas.
	 *
	 * @param id_usuario the id usuario
	 * @param pageable the pageable
	 * @return the page
	 */
	@Query("SELECT p FROM Pesquisa p WHERE p.fk_usuario = :id_usuario ORDER BY p.id_pesquisa")
	Page<Pesquisa> listaDePesquisas(@Param("id_usuario") Long id_usuario, Pageable pageable);
	
	/**
	 * Procura pelo titulo.
	 *
	 * @param id_usuario the id usuario
	 * @param titulo the titulo
	 * @param pageable the pageable
	 * @return the page
	 */
	@Query("SELECT p FROM Pesquisa p WHERE p.fk_usuario = :id_usuario AND p.pesquisa_titulo LIKE %:titulo% ORDER BY p.id_pesquisa")
	Page<Pesquisa> procuraPeloTitulo(@Param("id_usuario") Long id_usuario,@Param("titulo") String titulo, Pageable pageable);
	
	/**
	 * Procura pelo id.
	 *
	 * @param id_usuario the id usuario
	 * @param id_pesquisa the id pesquisa
	 * @param pageable the pageable
	 * @return the page
	 */
	@Query("SELECT p FROM Pesquisa p WHERE p.fk_usuario = :id_usuario AND p.id_pesquisa = :id_pesquisa ORDER BY p.id_pesquisa")
	Page<Pesquisa> procuraPeloId(@Param("id_usuario") Long id_usuario, @Param("id_pesquisa") Long id_pesquisa, Pageable pageable);
	
}
