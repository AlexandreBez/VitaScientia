package com.vitascientia.model.repository;

import java.util.List;

import jakarta.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.vitascientia.model.Pesquisa;
import com.vitascientia.model.Projeto;
import com.vitascientia.model.Projeto_pesquisa;

// TODO: Auto-generated Javadoc
/**
 * The Interface RepositoryProjetoPesquisa.
 */
public interface RepositoryProjetoPesquisa extends JpaRepository<Projeto_pesquisa, Long> {
	
	//	-------------------------------Projeto_pesquisa-------------------------------------------
	
    /**
	 * Desassociar projeto E pesquisa.
	 *
	 * @param id_pesquisa the id pesquisa
	 * @param id_projeto the id projeto
	 */
	@Query("DELETE FROM Projeto_pesquisa p WHERE p.fk_pesquisa = :id_pesquisa AND p.fk_projeto = :id_projeto")
    @Modifying
    @Transactional
    void desassociarProjetoEPesquisa(@Param("id_pesquisa") Long id_pesquisa, @Param("id_projeto") Long id_projeto);
    
    /**
     * Valida se projeto ou pesquisa associado.
     *
     * @param id_pesquisa the id pesquisa
     * @param id_projeto the id projeto
     * @return the boolean
     */
    @Query("SELECT COUNT(*) > 0 AS resultado FROM Projeto_pesquisa p WHERE p.fk_pesquisa = :id_pesquisa AND p.fk_projeto = :id_projeto")
    Boolean validaSeProjetoOuPesquisaAssociado(@Param("id_pesquisa") Long id_pesquisa, @Param("id_projeto") Long id_projeto);

	//	-------------------------------Projeto-------------------------------------------
	
    /**
	 * Lista de projetos.
	 *
	 * @param id_pesquisa the id pesquisa
	 * @return the list
	 */
	@Query("SELECT p FROM Projeto p INNER JOIN Projeto_pesquisa e ON e.fk_projeto = p.id_projeto WHERE e.fk_pesquisa = :id_pesquisa")
	List<Projeto> listaDeProjetos(@Param("id_pesquisa") Long id_pesquisa);
    
    /**
     * Projetos nao associados.
     *
     * @param id_pesquisa the id pesquisa
     * @param id_usuario the id usuario
     * @return the list
     */
    @Query("SELECT p FROM Projeto p LEFT JOIN Projeto_pesquisa e ON e.fk_projeto = p.id_projeto AND e.fk_pesquisa = :id_pesquisa WHERE p.fk_usuario = :id_usuario AND e.fk_projeto IS NULL ORDER BY p.id_projeto")
    List<Projeto> projetosNaoAssociados(@Param("id_pesquisa") Long id_pesquisa, @Param("id_usuario") Long id_usuario);
    
    /**
     * Deleta registros pesquisa associados projeto.
     *
     * @param id_projeto the id projeto
     */
    @Query("DELETE FROM Projeto_pesquisa p WHERE p.fk_projeto = :id_projeto")
    @Modifying
    @Transactional
    void deletaRegistrosPesquisaAssociadosProjeto(@Param("id_projeto") Long id_projeto);
    
    //	-------------------------------Pesquisa-------------------------------------------
    
    /**
     * Lista de pesquisas.
     *
     * @param id_projeto the id projeto
     * @return the list
     */
    @Query("SELECT p FROM Pesquisa p INNER JOIN Projeto_pesquisa e ON e.fk_pesquisa = p.id_pesquisa WHERE e.fk_projeto = :id_projeto")
    List<Pesquisa> listaDePesquisas(@Param("id_projeto") Long id_projeto);
    
    /**
     * Pesquisas nao associadas.
     *
     * @param id the id
     * @return the list
     */
    @Query("SELECT p FROM Pesquisa p INNER JOIN Projeto_pesquisa e ON e.fk_pesquisa = p.id_pesquisa WHERE e.fk_projeto = :id")
    List<Pesquisa> pesquisasNaoAssociadas(@Param("id") Long id);
    
    /**
     * Deleta registros projetos associados pesquisa.
     *
     * @param id_pesquisa the id pesquisa
     */
    @Query("DELETE FROM Projeto_pesquisa p WHERE p.fk_pesquisa = :id_pesquisa")
    @Modifying
    @Transactional
    void deletaRegistrosProjetosAssociadosPesquisa(@Param("id_pesquisa") Long id_pesquisa);
    
}
