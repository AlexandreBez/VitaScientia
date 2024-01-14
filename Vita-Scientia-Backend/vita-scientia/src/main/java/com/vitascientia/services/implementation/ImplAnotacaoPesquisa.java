package com.vitascientia.services.implementation;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.vitascientia.model.Anotacao;

// TODO: Auto-generated Javadoc
/**
 * The Interface ImplAnotacaoPesquisa.
 */
public interface ImplAnotacaoPesquisa {

	/**
	 * Anotacoes nao associadas.
	 *
	 * @param id_pesquisa the id pesquisa
	 * @param id_usuario the id usuario
	 * @return the response entity
	 */
	ResponseEntity<List<Anotacao>> anotacoesNaoAssociadas(Long id_pesquisa, Long id_usuario);
	
	/**
	 * Associar anotacoes.
	 *
	 * @param id_pesquisa the id pesquisa
	 * @param listaNotas the lista notas
	 * @return the response entity
	 */
	ResponseEntity<List<Anotacao>> associarAnotacoes(Long id_pesquisa, List<Long> listaNotas);
	
	/**
	 * Desassociar anotacoes.
	 *
	 * @param id_pesquisa the id pesquisa
	 * @param id_anotacao the id anotacao
	 * @return the response entity
	 */
	ResponseEntity<HttpStatus> desassociarAnotacoes(Long id_pesquisa, Long id_anotacao);
}
