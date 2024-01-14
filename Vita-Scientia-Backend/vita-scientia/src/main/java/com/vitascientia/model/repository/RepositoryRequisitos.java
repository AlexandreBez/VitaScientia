package com.vitascientia.model.repository;

import java.util.List;

import jakarta.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.vitascientia.model.Requisitos;

// TODO: Auto-generated Javadoc
/**
 * The Interface RepositoryRequisitos.
 */
public interface RepositoryRequisitos extends JpaRepository<Requisitos, Long> {

	/**
	 * Lista de requisitos.
	 *
	 * @param id_pesquisa the id pesquisa
	 * @return the list
	 */
	@Query("SELECT r FROM Requisitos r WHERE r.fk_pesquisa = :id_pesquisa")
	List<Requisitos> listaDeRequisitos(@Param("id_pesquisa") Long id_pesquisa);
	
    /**
     * Deleta pelo id pesquisa.
     *
     * @param id the id
     */
    @Query("DELETE FROM Requisitos r WHERE r.fk_pesquisa = :id")
    @Modifying
    @Transactional
    void deletaPeloIdPesquisa(@Param("id") Long id);
}
