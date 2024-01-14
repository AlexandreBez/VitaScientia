package com.vitascientia.model.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.vitascientia.model.Anotacao;


// TODO: Auto-generated Javadoc
/**
 * The Interface RepositoryAnotacao.
 */
public interface RepositoryAnotacao extends JpaRepository<Anotacao, Long>{
	
	//---------------------------Query para procurar---------------------------

	/**
	 * Lista de anotacoes.
	 *
	 * @param id_usuario the id usuario
	 * @param pageable the pageable
	 * @return the page
	 */
	@Query("SELECT n FROM Anotacao n WHERE n.fk_usuario = :id_usuario ORDER BY n.id_anotacao")
	Page<Anotacao> listaDeAnotacoes(@Param("id_usuario") Long id_usuario, Pageable pageable);
	

	/**
	 * Procura pelo titulo.
	 *
	 * @param id_usuario the id usuario
	 * @param titulo the titulo
	 * @param pageable the pageable
	 * @return the page
	 */
	@Query("SELECT n FROM Anotacao n WHERE n.fk_usuario = :id_usuario AND n.anotacao_titulo LIKE %:titulo% ORDER BY n.id_anotacao")
	Page<Anotacao> procuraPeloTitulo(@Param("id_usuario") Long id_usuario,@Param("titulo") String titulo, Pageable pageable);
	

	/**
	 * Procura pelo id.
	 *
	 * @param id_usuario the id usuario
	 * @param id_anotacao the id anotacao
	 * @param pageable the pageable
	 * @return the page
	 */
	@Query("SELECT n FROM Anotacao n WHERE n.fk_usuario = :id_usuario AND n.id_anotacao = :id_anotacao ORDER BY n.id_anotacao")
	Page<Anotacao> procuraPeloId(@Param("id_usuario") Long id_usuario, @Param("id_anotacao") Long id_anotacao, Pageable pageable);
	

}
