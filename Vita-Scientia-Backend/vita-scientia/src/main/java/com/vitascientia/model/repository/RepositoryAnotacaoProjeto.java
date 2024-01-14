package com.vitascientia.model.repository;

import java.util.List;

import jakarta.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.vitascientia.model.Anotacao;
import com.vitascientia.model.Anotacao_projeto;

// TODO: Auto-generated Javadoc
/**
 * The Interface RepositoryAnotacaoProjeto.
 */
public interface RepositoryAnotacaoProjeto extends JpaRepository<Anotacao_projeto, Long> {
	
	//	-------------------------------Anotacao-------------------------------------------

	/**
	 * Deleta registros da anotacao.
	 *
	 * @param id_projeto the id projeto
	 */
	@Query("DELETE FROM Anotacao_projeto n WHERE n.fk_anotacao = :id_projeto")
    @Modifying
    @Transactional
    void deletaRegistrosDaAnotacao(@Param("id_projeto") Long id_projeto);
    
    /**
     * Deleta registros do projeto.
     *
     * @param id_projeto the id projeto
     */
    @Query("DELETE FROM Anotacao_projeto n WHERE n.fk_projeto = :id_projeto")
    @Modifying
    @Transactional
    void deletaRegistrosDoProjeto(@Param("id_projeto") Long id_projeto);
    
    //	-------------------------------Projeto-------------------------------------------
    
    /**
     * Lista de anotacoes.
     *
     * @param id_projeto the id projeto
     * @return the list
     */
    @Query("SELECT n FROM Anotacao n INNER JOIN Anotacao_projeto p ON p.fk_anotacao = n.id_anotacao WHERE p.fk_projeto = :id_projeto")
    List<Anotacao> listaDeAnotacoes(@Param("id_projeto") Long id_projeto);
    
    /**
     * Anotacoes nao associadas.
     *
     * @param id_projeto the id projeto
     * @param id_usuario the id usuario
     * @return the list
     */
    @Query("SELECT n FROM Anotacao n LEFT JOIN Anotacao_projeto e ON e.fk_anotacao = n.id_anotacao AND e.fk_projeto = :id_projeto WHERE n.fk_usuario = :id_usuario AND e.fk_anotacao IS NULL ORDER BY n.id_anotacao")
    List<Anotacao> anotacoesNaoAssociadas(@Param("id_projeto") Long id_projeto, @Param("id_usuario") Long id_usuario);
    
    /**
     * Valida anotacao associado projeto.
     *
     * @param id_projeto the id projeto
     * @param id_nota the id nota
     * @return the boolean
     */
    @Query("SELECT COUNT(*) > 0 AS resultado FROM Anotacao_projeto n WHERE n.fk_projeto = :id_projeto AND n.fk_anotacao = :id_nota")
    Boolean validaAnotacaoAssociadoProjeto(@Param("id_projeto") Long id_projeto, @Param("id_nota") Long id_nota);
    
    /**
     * Desassociar anotacao da projeto.
     *
     * @param id_projeto the id projeto
     * @param id_nota the id nota
     */
    @Query("DELETE FROM Anotacao_projeto n WHERE n.fk_projeto = :id_projeto AND n.fk_anotacao = :id_nota")
    @Modifying
    @Transactional
    void desassociarAnotacaoDaProjeto(@Param("id_projeto") Long id_projeto, @Param("id_nota") Long id_nota);
    
}
