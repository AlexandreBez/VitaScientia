package com.vitascientia.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.vitascientia.model.Anotacao;
import com.vitascientia.model.Anotacao_projeto;
import com.vitascientia.model.repository.RepositoryAnotacao;
import com.vitascientia.model.repository.RepositoryAnotacaoProjeto;
import com.vitascientia.services.implementation.ImplAnotacaoProjeto;

// TODO: Auto-generated Javadoc
/**
 * The Class ServiceAnotacaoProjeto.
 */
@Service
public class ServiceAnotacaoProjeto implements ImplAnotacaoProjeto{

	/** The repository anotacao projeto. */
	@Autowired
	RepositoryAnotacaoProjeto repositoryAnotacaoProjeto;
	
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
			List<Anotacao> anotacaos = repositoryAnotacaoProjeto.anotacoesNaoAssociadas(id_pesquisa,id_usuario);
			return new ResponseEntity<>(anotacaos, HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e);
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	/**
	 * Associar anotacoes projeto.
	 *
	 * @param id_projeto the id projeto
	 * @param listaNotas the lista notas
	 * @return the response entity
	 */
	@Override
	public ResponseEntity<List<Anotacao>> associarAnotacoes(Long id_projeto, List<Long> listaNotas) {
		try {
			for (Long id_anotacao : listaNotas) {
				Boolean resultado = repositoryAnotacaoProjeto.validaAnotacaoAssociadoProjeto(id_projeto,id_anotacao);
				if (resultado == false) {
					Anotacao_projeto anotacao_pesquisa = new Anotacao_projeto();
					anotacao_pesquisa.setFk_projeto(id_projeto);
					anotacao_pesquisa.setFk_anotacao(id_anotacao);
					repositoryAnotacaoProjeto.save(anotacao_pesquisa);
				}
			}
			
			List<Anotacao> resposta = new ArrayList<>();
			for (Long id_anotacao : listaNotas) {
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
	 * Desassociar anotacoes projeto.
	 *
	 * @param id_pesquisa the id pesquisa
	 * @param id_nota the id nota
	 * @return the response entity
	 */
	@Override
	public ResponseEntity<HttpStatus> desassociarAnotacoes(Long id_pesquisa, Long id_nota) {
		try {
			repositoryAnotacaoProjeto.desassociarAnotacaoDaProjeto(id_pesquisa, id_nota);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e);
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
