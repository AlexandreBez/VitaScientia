package com.vitascientia.services.implementation;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.vitascientia.model.Requisitos;

/**
 * Interface ImplRequisito_Pesquisa com os metodos para serem implementados na classe ServicoRequisito
 * @author Lucas Alexandre
 * @since 2.0.0
 */
public interface ImplRequisitoPesquisa {
	
	ResponseEntity<Requisitos> novoRequisito(Requisitos requisitos);
	ResponseEntity<HttpStatus> deletaRequisito(Long id_requisito);
	ResponseEntity<HttpStatus> atualizaRequisito(Requisitos requisitos);
}
