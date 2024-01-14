package com.vitascientia.services;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.vitascientia.model.Anotacao;
import com.vitascientia.model.Pesquisa;
import com.vitascientia.model.Projeto;
import com.vitascientia.model.Requisitos;
import com.vitascientia.model.ObjectAux.PesquisaAux;
import com.vitascientia.model.repository.RepositoryAnotacao;
import com.vitascientia.model.repository.RepositoryAnotacaoPesquisa;
import com.vitascientia.model.repository.RepositoryPesquisa;
import com.vitascientia.model.repository.RepositoryProjetoPesquisa;
import com.vitascientia.model.repository.RepositoryRequisitos;
import com.vitascientia.services.implementation.ImplPesquisa;

// TODO: Auto-generated Javadoc
/**
 * The Class ServicePesquisa.
 */
@Service
public class ServicePesquisa implements ImplPesquisa{

	/** The repository pesquisa. */
	@Autowired
	RepositoryPesquisa repositoryPesquisa;
	
	/** The repository projeto pesquisa. */
	@Autowired
	RepositoryProjetoPesquisa repositoryProjetoPesquisa;
	
	/** The repository anotacao. */
	@Autowired
	RepositoryAnotacao repositoryAnotacao;
	
	/** The repository anotacao pesquisa. */
	@Autowired
	RepositoryAnotacaoPesquisa repositoryAnotacaoPesquisa;
	
	/** The repository requisitos. */
	@Autowired
	RepositoryRequisitos repositoryRequisitos;
	
	/**
	 * Lista de pesquisas.
	 *
	 * @param id_usuario the id usuario
	 * @param pageable the pageable
	 * @return the response entity
	 */
	@Override
	public ResponseEntity<Page<PesquisaAux>> listaDePesquisas(Long id_usuario, Pageable pageable) {
	    try {
	        Page<Pesquisa> resultado = repositoryPesquisa.listaDePesquisas(id_usuario, pageable);

	        List<PesquisaAux> listaDePesquisas = new ArrayList<>();
	        for (Pesquisa pesquisa : resultado.getContent()) {
	        	PesquisaAux resposta = new PesquisaAux();
	            resposta.setId_pesquisa(pesquisa.getId_pesquisa());
	            resposta.setPesquisa_titulo(pesquisa.getPesquisa_titulo());
	            resposta.setPesquisa_descricao(pesquisa.getPesquisa_descricao());
	            resposta.setData_criacao(pesquisa.getData_criacao());
	            resposta.setStatus(pesquisa.getStatus());
	            resposta.setFk_usuario(pesquisa.getFk_usuario());
	            List<Requisitos> requisitos = repositoryRequisitos.listaDeRequisitos(pesquisa.getId_pesquisa());
	            resposta.setRequisito(requisitos);
	            List<Projeto> projetos = repositoryProjetoPesquisa.listaDeProjetos(pesquisa.getId_pesquisa());
	            resposta.setProjeto(projetos);
	            List<Anotacao> anotacoes = repositoryAnotacaoPesquisa.listaDeAnotacoes(pesquisa.getId_pesquisa());
	            resposta.setAnotacao(anotacoes);
	            listaDePesquisas.add(resposta);
	        }
	        
	        return new ResponseEntity<>(new PageImpl<>(listaDePesquisas, pageable, resultado.getTotalElements()), HttpStatus.OK);
	    } catch (Exception e) {
	        System.out.println(e.getMessage());
	        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}


	/**
	 * Procura pelo titulo.
	 * 
	 * @param id_usuario the id usuario
	 * @param titulo the titulo
	 * @param pageable the pageable
	 * @return the response entity
	 */
	@Override
	public ResponseEntity<Page<PesquisaAux>> procuraPeloTitulo(Long id_usuario, String titulo, Pageable pageable) {
		try {
	        Page<Pesquisa> resultado = repositoryPesquisa.procuraPeloTitulo(id_usuario, titulo, pageable);

	        List<PesquisaAux> listaDePesquisas = new ArrayList<>();
	        for (Pesquisa pesquisa : resultado.getContent()) {
	        	PesquisaAux resposta = new PesquisaAux();
	            resposta.setId_pesquisa(pesquisa.getId_pesquisa());
	            resposta.setPesquisa_titulo(pesquisa.getPesquisa_titulo());
	            resposta.setPesquisa_descricao(pesquisa.getPesquisa_descricao());
	            resposta.setData_criacao(pesquisa.getData_criacao());
	            resposta.setStatus(pesquisa.getStatus());
	            resposta.setFk_usuario(pesquisa.getFk_usuario());
	            List<Requisitos> requisitos = repositoryRequisitos.listaDeRequisitos(pesquisa.getId_pesquisa());
	            resposta.setRequisito(requisitos);
	            List<Projeto> projetos = repositoryProjetoPesquisa.listaDeProjetos(pesquisa.getId_pesquisa());
	            resposta.setProjeto(projetos);
	            List<Anotacao> anotacoes = repositoryAnotacaoPesquisa.listaDeAnotacoes(pesquisa.getId_pesquisa());
	            resposta.setAnotacao(anotacoes);
	            listaDePesquisas.add(resposta);
	        }

	        return new ResponseEntity<>(new PageImpl<>(listaDePesquisas, pageable, resultado.getTotalElements()), HttpStatus.OK);
	    } catch (Exception e) {
	        System.out.println(e.getMessage());
	        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	/**
	 * Procura pelo id.
	 *
	 * @param id_usuario the id usuario
	 * @param nota_id the nota id
	 * @param pageable the pageable
	 * @return the response entity
	 */
	@Override
	public ResponseEntity<Page<PesquisaAux>> procuraPeloId(Long id_usuario, Long id_pesquisa, Pageable pageable) {
		try {
			Page<Pesquisa> resultado = repositoryPesquisa.procuraPeloId(id_usuario, id_pesquisa, pageable);
			
	        List<PesquisaAux> listaDePesquisas = new ArrayList<>();
	        for (Pesquisa pesquisa : resultado.getContent()) {
	        	PesquisaAux resposta = new PesquisaAux();
	            resposta.setId_pesquisa(pesquisa.getId_pesquisa());
	            resposta.setPesquisa_titulo(pesquisa.getPesquisa_titulo());
	            resposta.setPesquisa_descricao(pesquisa.getPesquisa_descricao());
	            resposta.setData_criacao(pesquisa.getData_criacao());
	            resposta.setStatus(pesquisa.getStatus());
	            resposta.setFk_usuario(pesquisa.getFk_usuario());
	            List<Requisitos> requisitos = repositoryRequisitos.listaDeRequisitos(pesquisa.getId_pesquisa());
	            resposta.setRequisito(requisitos);
	            List<Projeto> projetos = repositoryProjetoPesquisa.listaDeProjetos(pesquisa.getId_pesquisa());
	            resposta.setProjeto(projetos);
	            List<Anotacao> anotacoes = repositoryAnotacaoPesquisa.listaDeAnotacoes(pesquisa.getId_pesquisa());
	            resposta.setAnotacao(anotacoes);
	            listaDePesquisas.add(resposta);
	        }

	        return new ResponseEntity<>(new PageImpl<>(listaDePesquisas, pageable, resultado.getTotalElements()), HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	/**
	 * Edita pesquisa.
	 *
	 * @param pesquisa the pesquisa
	 * @return the response entity
	 */
	@Override
	public ResponseEntity<HttpStatus> editaPesquisa(Pesquisa pesquisa) {
	    try {
	    	Optional<Pesquisa> dados = repositoryPesquisa.findById(pesquisa.getId_pesquisa());
	    	if (dados.isEmpty()) {
	    		return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
	    	}
	    	
	    	dados.get().setStatus(pesquisa.getStatus());
	    	dados.get().setPesquisa_titulo(pesquisa.getPesquisa_titulo());
	    	dados.get().setPesquisa_descricao(pesquisa.getPesquisa_descricao());
	    	
	    	repositoryPesquisa.save(dados.get());
	        return new ResponseEntity<>(null, HttpStatus.OK);
	    } catch (Exception e) {
	    	System.out.println(e);
	        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}
	
	/**
	 * Nova pesquisa.
	 *
	 * @param pesquisa the pesquisa
	 * @return the response entity
	 */
	@Override
	@Transactional
	public ResponseEntity<PesquisaAux> novaPesquisa(Pesquisa pesquisa) {
	    try {
	    	if (pesquisa == null) {
	    		return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
	    	}
	    	Date data = new Date();
	    	SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
	    	String novaDataFormatada = dateFormat.format(data);
	    	pesquisa.setData_criacao(novaDataFormatada);
	    	
	    	Pesquisa resposta = repositoryPesquisa.save(pesquisa);
	    	
	    	PesquisaAux aux = new PesquisaAux();
	    	aux.setId_pesquisa(resposta.getId_pesquisa());
	    	aux.setPesquisa_titulo(resposta.getPesquisa_titulo());
	    	aux.setPesquisa_descricao(resposta.getPesquisa_descricao());
	    	aux.setStatus(resposta.getStatus());
	    	aux.setData_criacao(novaDataFormatada);
	    	aux.setFk_usuario(resposta.getFk_usuario());
	    	List<Requisitos> requisito = new ArrayList<>();
	    	aux.setRequisito(requisito);
	    	List<Projeto> projeto = new ArrayList<>();
	    	aux.setProjeto(projeto);
	    	List<Anotacao> anotacao = new ArrayList<>();
	    	aux.setAnotacao(anotacao);
	    	
	        return new ResponseEntity<>(aux, HttpStatus.CREATED);
	    } catch (Exception e) {
	    	System.out.println(e);
	        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}
	
	/**
	 * Deleta pesquisa.
	 *
	 * @param id_pesquisa the id pesquisa
	 * @return the response entity
	 */
	@Override
	@Transactional
	public ResponseEntity<HttpStatus> deletaPesquisa(Long id_pesquisa) {
	    try {

	    	if (id_pesquisa == null) {
	    		return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
	    	}
	    	
	    	repositoryRequisitos.deletaPeloIdPesquisa(id_pesquisa);
	    	repositoryProjetoPesquisa.deletaRegistrosProjetosAssociadosPesquisa(id_pesquisa);
	    	repositoryAnotacaoPesquisa.deletaRegistrosDaPesquisa(id_pesquisa);
	    	repositoryPesquisa.deleteById(id_pesquisa);
	    	
	        return new ResponseEntity<>(null, HttpStatus.OK);
	    } catch (Exception e) {
	    	System.out.println(e);
	        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}
	
}
