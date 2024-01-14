/*
 * 
 */
package com.vitascientia.services;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Optional;

import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.vitascientia.model.Anotacao;
import com.vitascientia.model.repository.RepositoryAnotacao;
import com.vitascientia.model.repository.RepositoryAnotacaoPesquisa;
import com.vitascientia.model.repository.RepositoryAnotacaoProjeto;
import com.vitascientia.services.implementation.ImplAnotacao;

// TODO: Auto-generated Javadoc
/**
 * The Class ServiceAnotacao.
 */
@Service
public class ServiceAnotacao implements ImplAnotacao {

	/** The repository anotacao. */
	@Autowired
	RepositoryAnotacao repositoryAnotacao;

	/** The repository anotacao pesquisa. */
	@Autowired
	RepositoryAnotacaoPesquisa repositoryAnotacaoPesquisa;

	/** The repository anotacao projeto. */
	@Autowired
	RepositoryAnotacaoProjeto repositoryAnotacaoProjeto;

	/**
	 * Lista de anotacoes.
	 *
	 * @param id the id
	 * @param pageable the pageable
	 * @return the response entity
	 */
	@Override
	public ResponseEntity<Page<Anotacao>> listaDeAnotacoes(Long id, Pageable pageable) {
		try {
			Page<Anotacao> resultado = repositoryAnotacao.listaDeAnotacoes(id, pageable);
			return new ResponseEntity<>(resultado, HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	/**
	 * Procura pelo titulo.
	 *
	 * @param id the id
	 * @param titulo the titulo
	 * @param pageable the pageable
	 * @return the response entity
	 */
	@Override
	public ResponseEntity<Page<Anotacao>> procuraPeloTitulo(Long id, String titulo, Pageable pageable) {
		try {
			Page<Anotacao> resultado = repositoryAnotacao.procuraPeloTitulo(id, titulo, pageable);
			return new ResponseEntity<>(resultado, HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	/**
	 * Procura pelo id.
	 *
	 * @param id the id
	 * @param notaId the nota id
	 * @param pageable the pageable
	 * @return the response entity
	 */
	@Override
	public ResponseEntity<Page<Anotacao>> procuraPeloId(Long id, Long notaId, Pageable pageable) {
		try {
			Page<Anotacao> resultado = repositoryAnotacao.procuraPeloId(id, notaId, pageable);
			return new ResponseEntity<>(resultado, HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	/**
	 * Deleta anotacao.
	 *
	 * @param id the id
	 * @return the response entity
	 */
	@Override
	public ResponseEntity<HttpStatus> deletaAnotacao(Long id) {
		try {
			
			repositoryAnotacaoPesquisa.deletaRegistrosDaAnotacao(id);
			repositoryAnotacaoProjeto.deletaRegistrosDaAnotacao(id);
			repositoryAnotacao.deleteById(id);

			return new ResponseEntity<>(null, HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	/**
	 * Nova anotacao.
	 *
	 * @param anotacao the anotacao
	 * @return the response entity
	 */
	@Override
	@Transactional
	public ResponseEntity<Anotacao> novaAnotacao(Anotacao anotacao) {
		try {
			if (anotacao == null) {
				return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
			}
	    	Date data = new Date();
	    	SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
	    	String novaDataFormatada = dateFormat.format(data);
	    	
	    	anotacao.setData_criacao(novaDataFormatada);
			Anotacao resposta = repositoryAnotacao.save(anotacao);
			return new ResponseEntity<>(resposta, HttpStatus.CREATED);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	/**
	 * Atualiza anotacao.
	 *
	 * @param atualizacao the atualizacao
	 * @return the response entity
	 */
	@Override
	public ResponseEntity<HttpStatus> atualizaAnotacao(Anotacao atualizacao) {
		try {
			Optional<Anotacao> anotacao = repositoryAnotacao.findById(atualizacao.getId_anotacao());
			if (anotacao.isEmpty()) {
				return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
			}
			Anotacao anotacaos = anotacao.get();
			anotacaos.setAnotacao_titulo(atualizacao.getAnotacao_titulo());
			anotacaos.setAnotacao_descricao(atualizacao.getAnotacao_descricao());
			repositoryAnotacao.save(anotacaos);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
