package com.vitascientia.model.repository;

import java.util.List;

import jakarta.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.vitascientia.model.Anotacao;
import com.vitascientia.model.Anotacao_pesquisa;


// TODO: Auto-generated Javadoc
/**
 * The Interface RepositoryAnotacaoPesquisa.
 */
public interface RepositoryAnotacaoPesquisa extends JpaRepository<Anotacao_pesquisa, Long> {
    
	//	-------------------------------Anotacao-------------------------------------------
	
    /**
	 * Deleta registros da anotacao.
	 *
	 * @param id_anotacao the id anotacao
	 */
	@Query("DELETE FROM Anotacao_pesquisa n WHERE n.fk_anotacao = :id_anotacao")
    @Modifying
    @Transactional
    void deletaRegistrosDaAnotacao(@Param("id_anotacao") Long id_anotacao);
    
    /**
     * Deleta registros da pesquisa.
     *
     * @param id_pesquisa the id pesquisa
     */
    @Query("DELETE FROM Anotacao_pesquisa n WHERE n.fk_pesquisa = :id_pesquisa")
    @Modifying
    @Transactional
    void deletaRegistrosDaPesquisa(@Param("id_pesquisa") Long id_pesquisa);
    
    //	-------------------------------Pesquisa-------------------------------------------

	/**
     * Lista de anotacoes.
     *
     * @param id_pesquisa the id pesquisa
     * @return the list
     */
    @Query("SELECT n FROM  Anotacao n INNER JOIN Anotacao_pesquisa p ON p.fk_anotacao = n.id_anotacao WHERE p.fk_pesquisa = :id_pesquisa")
    List<Anotacao> listaDeAnotacoes(@Param("id_pesquisa") Long id_pesquisa);

    /**
     * Anotacoes nao associadas.
     *
     * @param id_pesquisa the id pesquisa
     * @param id_usuario the id usuario
     * @return the list
     */
    @Query("SELECT n FROM Anotacao n LEFT JOIN Anotacao_pesquisa e ON e.fk_anotacao = n.id_anotacao AND e.fk_pesquisa = :id_pesquisa WHERE n.fk_usuario = :id_usuario AND e.fk_anotacao IS NULL ORDER BY n.id_anotacao")
    List<Anotacao> anotacoesNaoAssociadas(@Param("id_pesquisa") Long id_pesquisa, @Param("id_usuario") Long id_usuario);
    
    /**
     * Valida anotacao associado pesquisa.
     *
     * @param id_pesquisa the id pesquisa
     * @param id_nota the id nota
     * @return the boolean
     */
    @Query("SELECT COUNT(*) > 0 AS resultado FROM Anotacao_pesquisa n WHERE n.fk_pesquisa = :id_pesquisa AND n.fk_anotacao = :id_nota")
    Boolean validaAnotacaoAssociadoPesquisa(@Param("id_pesquisa") Long id_pesquisa, @Param("id_nota") Long id_nota);
    
    /**
     * Desassociar anotacao da pesquisa.
     *
     * @param id_pesquisa the id pesquisa
     * @param id_nota the id nota
     */
    @Query("DELETE FROM Anotacao_pesquisa n WHERE n.fk_pesquisa = :id_pesquisa AND n.fk_anotacao = :id_nota")
    @Modifying
    @Transactional
    void desassociarAnotacoes(@Param("id_pesquisa") Long id_pesquisa, @Param("id_nota") Long id_nota);
 
}
