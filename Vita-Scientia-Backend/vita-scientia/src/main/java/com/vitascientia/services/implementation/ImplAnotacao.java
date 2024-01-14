package com.vitascientia.services.implementation;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.vitascientia.model.Anotacao;

public interface ImplAnotacao {

	ResponseEntity<Page<Anotacao>> listaDeAnotacoes(Long usuario_id, Pageable pageable);
	ResponseEntity<Page<Anotacao>> procuraPeloTitulo(Long usuario_id, String titulo, Pageable pageable);
	ResponseEntity<Page<Anotacao>> procuraPeloId(Long id, Long notaId, Pageable pageable);
	
	ResponseEntity<HttpStatus> deletaAnotacao(Long id);
	ResponseEntity<Anotacao> novaAnotacao(Anotacao anotacao);
	ResponseEntity<HttpStatus> atualizaAnotacao(Anotacao anotacao);
	
}
