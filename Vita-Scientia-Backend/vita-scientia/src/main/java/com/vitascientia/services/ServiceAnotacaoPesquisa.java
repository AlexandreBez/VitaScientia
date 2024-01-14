package com.vitascientia.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.vitascientia.model.Anotacao;
import com.vitascientia.model.Anotacao_pesquisa;
import com.vitascientia.model.repository.RepositoryAnotacao;
import com.vitascientia.model.repository.RepositoryAnotacaoPesquisa;
import com.vitascientia.services.implementation.ImplAnotacaoPesquisa;

// TODO: Auto-generated Javadoc
/**
 * The Class ServiceAnotacaoPesquisa.
 */
@Service
public class ServiceAnotacaoPesquisa implements ImplAnotacaoPesquisa{
	
	/** The repository anotacao pesquisa. */
	@Autowired
	RepositoryAnotacaoPesquisa repositoryAnotacaoPesquisa;
	
	/** The repository anotacao. */
	@Autowired
	RepositoryAnotacao repositoryAnotacao;

	/**
	 * Anotacoes nao associadas.
	 *
	 * @param id_pesquisa the id pesquisa
	 * @param id_usuario the id usuario
	 * @return the response entity
	 */
	@Override
	public ResponseEntity<List<Anotacao>> anotacoesNaoAssociadas(Long id_pesquisa, Long id_usuario) {
		try {
			List<Anotacao> anotacaos = repositoryAnotacaoPesquisa.anotacoesNaoAssociadas(id_pesquisa,id_usuario);
			return new ResponseEntity<>(anotacaos, HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e);
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	/**
	 * Associar anotacoes.
	 *
	 * @param id_pesquisa the id pesquisa
	 * @param listaAnotacoes the lista anotacoes
	 * @return the response entity
	 */
	@Override
	public ResponseEntity<List<Anotacao>> associarAnotacoes(Long id_pesquisa, List<Long> listaAnotacoes) {
		try {

			for (Long id_anotacao : listaAnotacoes) {

				Boolean resultado = repositoryAnotacaoPesquisa.validaAnotacaoAssociadoPesquisa(id_pesquisa,id_anotacao);

				if (resultado == false) {
					Anotacao_pesquisa anotacao_pesquisa = new Anotacao_pesquisa();
					anotacao_pesquisa.setFk_pesquisa(id_pesquisa);
					anotacao_pesquisa.setFk_anotacao(id_anotacao);
					repositoryAnotacaoPesquisa.save(anotacao_pesquisa);
				}
			}
			
			List<Anotacao> resposta = new ArrayList<>();
			
			for (Long id_anotacao : listaAnotacoes) {
				Optional<Anotacao> anotacao = repositoryAnotacao.findById(id_anotacao);
				resposta.add(anotacao.get());			
			}

			return new ResponseEntity<>(resposta, HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e);
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	/**
	 * Desassociar anotacoes.
	 *
	 * @param id_pesquisa the id pesquisa
	 * @param id_anotacao the id anotacao
	 * @return the response entity
	 */
	@Override
	public ResponseEntity<HttpStatus> desassociarAnotacoes(Long id_pesquisa, Long id_anotacao) {
		try {
			repositoryAnotacaoPesquisa.desassociarAnotacoes(id_pesquisa, id_anotacao);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e);
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
