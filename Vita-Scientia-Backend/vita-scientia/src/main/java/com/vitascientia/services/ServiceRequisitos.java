package com.vitascientia.services;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Optional;

import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.vitascientia.model.Requisitos;
import com.vitascientia.model.repository.RepositoryPesquisa;
import com.vitascientia.model.repository.RepositoryRequisitos;
import com.vitascientia.services.implementation.ImplRequisitoPesquisa;

// TODO: Auto-generated Javadoc
/**
 * The Class ServiceRequisitos.
 */
@Service
public class ServiceRequisitos implements ImplRequisitoPesquisa{
	
	/** The repository requisitos. */
	@Autowired
	RepositoryRequisitos repositoryRequisitos;
	
	/** The repository pesquisa. */
	@Autowired
	RepositoryPesquisa repositoryPesquisa;

	/**
	 * Novo requisito.
	 *
	 * @param requisitos the requisitos
	 * @return the response entity
	 */
	@Override
	@Transactional
	public ResponseEntity<Requisitos> novoRequisito(Requisitos requisitos) {
		try {
			if (requisitos == null) {
				return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
			}
			
	    	Date data = new Date();
	    	SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
	    	String novaDataFormatada = dateFormat.format(data);
	    	requisitos.setData_criacao(novaDataFormatada);
	    	
			Requisitos resposta = repositoryRequisitos.save(requisitos);
			return new ResponseEntity<>(resposta, HttpStatus.CREATED);
		} catch (Exception e) {
			System.out.println(e);
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	/**
	 * Deleta requisito.
	 *
	 * @param id_requisito the id requisito
	 * @return the response entity
	 */
	@Override
	@Transactional
	public ResponseEntity<HttpStatus> deletaRequisito(Long id_requisito) {
		try {
			if (id_requisito == null) {
				return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
			}
			repositoryRequisitos.deleteById(id_requisito);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e);
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	/**
	 * Atualiza requisito.
	 *
	 * @param requisitos the requisitos
	 * @return the response entity
	 */
	@Override
	@Transactional
	public ResponseEntity<HttpStatus> atualizaRequisito(Requisitos requisitos) {
		try {
			
			Optional<Requisitos> requisito = repositoryRequisitos.findById(requisitos.getId_requisito());
			if (requisitos == null || requisito.isEmpty()) {
				return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
			}
			requisito.get().setItem(requisitos.getItem());
			requisito.get().setPreco(requisitos.getPreco());
			repositoryRequisitos.save(requisito.get());
			return new ResponseEntity<>(null, HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e);
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
