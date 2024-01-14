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
import com.vitascientia.model.Projeto_pesquisa;
import com.vitascientia.model.ObjectAux.ProjetoAux;
import com.vitascientia.model.repository.RepositoryAnotacao;
import com.vitascientia.model.repository.RepositoryAnotacaoProjeto;
import com.vitascientia.model.repository.RepositoryProjeto;
import com.vitascientia.model.repository.RepositoryProjetoPesquisa;
import com.vitascientia.services.implementation.ImplProjeto;

// TODO: Auto-generated Javadoc
/**
 * The Class ServiceProjeto.
 */
@Service
public class ServiceProjeto implements ImplProjeto{
	
	/** The repository projeto pesquisa. */
	@Autowired
	RepositoryProjetoPesquisa repositoryProjetoPesquisa;
	
	/** The repository projeto. */
	@Autowired
	RepositoryProjeto repositoryProjeto;
	
	/** The repository anotacao projeto. */
	@Autowired
	RepositoryAnotacaoProjeto repositoryAnotacaoProjeto;
	
	/** The repository anotacao. */
	@Autowired
	RepositoryAnotacao repositoryAnotacao;

	/**
	 * Projetos nao associados.
	 *
	 * @param id_pesquisa the id pesquisa
	 * @param id_usuario the id usuario
	 * @return the response entity
	 */
	@Override
	public ResponseEntity<List<Projeto>> projetosNaoAssociados(Long id_pesquisa, Long id_usuario) {
		try {
			List<Projeto> projetos = repositoryProjetoPesquisa.projetosNaoAssociados(id_pesquisa, id_usuario);
			return new ResponseEntity<>(projetos, HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e);
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	/**
	 * Associar projeto.
	 *
	 * @param id_pesquisa the id pesquisa
	 * @param listaProjetos the lista projetos
	 * @return the response entity
	 */
	@Override
	public ResponseEntity<List<Projeto>> associarProjeto(Long id_pesquisa, List<Long> listaProjetos) {
		try {
			for (Long id_projeto : listaProjetos) {
				Boolean resultado = repositoryProjetoPesquisa.validaSeProjetoOuPesquisaAssociado(id_pesquisa, id_projeto);
				if (resultado == false) {
					Projeto_pesquisa projeto_pesquisa = new Projeto_pesquisa();
					projeto_pesquisa.setFk_pesquisa(id_pesquisa);
					projeto_pesquisa.setFk_projeto(id_projeto);
					repositoryProjetoPesquisa.save(projeto_pesquisa);					
				}				
			}
			
			List<Projeto> resposta = new ArrayList<>();
			for (Long id_projeto : listaProjetos) {
				Optional<Projeto> projeto = repositoryProjeto.findById(id_projeto);
				resposta.add(projeto.get());			
			}
			
			return new ResponseEntity<>(resposta, HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e);
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	/**
	 * Desassociar projeto.
	 *
	 * @param id_pesquisa the id pesquisa
	 * @param id_projeto the id projeto
	 * @return the response entity
	 */
	@Override
	public ResponseEntity<HttpStatus> desassociarProjeto(Long id_pesquisa, Long id_projeto) {
		try {
			repositoryProjetoPesquisa.desassociarProjetoEPesquisa(id_pesquisa, id_projeto);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e);
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	/**
	 * Lista de projeto.
	 *
	 * @param id_usuario the id usuario
	 * @param pageable the pageable
	 * @return the response entity
	 */
	@Override
	public ResponseEntity<Page<ProjetoAux>> listaDeProjeto(Long id_usuario, Pageable pageable) {
	    try {
	        Page<Projeto> resultado = repositoryProjeto.listaDeProjeto(id_usuario, pageable);

	        List<ProjetoAux> listaDeProjetos = new ArrayList<>();
	        for (Projeto projeto : resultado.getContent()) {
	        	ProjetoAux resposta = new ProjetoAux();
	            resposta.setId_projeto(projeto.getId_projeto());
	            resposta.setProjeto_titulo(projeto.getProjeto_titulo());
	            resposta.setProjeto_descricao(projeto.getProjeto_descricao());
	            resposta.setData_criacao(projeto.getData_criacao());
	            resposta.setStatus(projeto.getStatus());
		    	resposta.setPesquisa(repositoryProjetoPesquisa.listaDePesquisas(projeto.getId_projeto()));
	            resposta.setAnotacao(repositoryAnotacaoProjeto.listaDeAnotacoes(projeto.getId_projeto()));
	            listaDeProjetos.add(resposta);
	        }

	        return new ResponseEntity<>(new PageImpl<>(listaDeProjetos, pageable, resultado.getTotalElements()), HttpStatus.OK);
	    } catch (Exception e) {
	        System.out.println(e.getMessage());
	        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}

	/**
	 * Pesquisa pelo titulo.
	 *
	 * @param id_usuario the id usuario
	 * @param titulo the titulo
	 * @param pageable the pageable
	 * @return the response entity
	 */
	@Override
	public ResponseEntity<Page<ProjetoAux>> pesquisaPeloTitulo(Long id_usuario, String titulo, Pageable pageable) {
		try {

	        Page<Projeto> resultado = repositoryProjeto.pesquisaPeloTitulo(id_usuario, titulo, pageable);

	        List<ProjetoAux> listaDeProjetos = new ArrayList<>();
	        for (Projeto projeto : resultado.getContent()) {
	        	ProjetoAux resposta = new ProjetoAux();
	            resposta.setId_projeto(projeto.getId_projeto());
	            resposta.setProjeto_titulo(projeto.getProjeto_titulo());
	            resposta.setProjeto_descricao(projeto.getProjeto_descricao());
	            resposta.setData_criacao(projeto.getData_criacao());
	            resposta.setStatus(projeto.getStatus());
		    	resposta.setPesquisa(repositoryProjetoPesquisa.listaDePesquisas(projeto.getId_projeto()));
	            resposta.setAnotacao(repositoryAnotacaoProjeto.listaDeAnotacoes(projeto.getId_projeto()));
	            listaDeProjetos.add(resposta);
	        }

	        return new ResponseEntity<>(new PageImpl<>(listaDeProjetos, pageable, resultado.getTotalElements()), HttpStatus.OK);
	    } catch (Exception e) {
	        System.out.println(e.getMessage());
	        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	/**
	 * Pesquisa pelo id.
	 *
	 * @param id_usuario the id usuario
	 * @param nota_id the nota id
	 * @param pageable the pageable
	 * @return the response entity
	 */
	@Override
	public ResponseEntity<Page<ProjetoAux>> pesquisaPeloId(Long id_usuario, Long nota_id, Pageable pageable) {
		try {

			Page<Projeto> resultado = repositoryProjeto.pesquisaPeloId(id_usuario, nota_id, pageable);
			
	        List<ProjetoAux> listaDeProjetos = new ArrayList<>();
	        for (Projeto projeto : resultado.getContent()) {
	        	ProjetoAux resposta = new ProjetoAux();
	            resposta.setId_projeto(projeto.getId_projeto());
	            resposta.setProjeto_titulo(projeto.getProjeto_titulo());
	            resposta.setProjeto_descricao(projeto.getProjeto_descricao());
	            resposta.setData_criacao(projeto.getData_criacao());
	            resposta.setStatus(projeto.getStatus());
		    	resposta.setPesquisa(repositoryProjetoPesquisa.listaDePesquisas(projeto.getId_projeto()));
	            resposta.setAnotacao(repositoryAnotacaoProjeto.listaDeAnotacoes(projeto.getId_projeto()));
	            listaDeProjetos.add(resposta);
	        }

			return new ResponseEntity<>(new PageImpl<>(listaDeProjetos, pageable, resultado.getTotalElements()), HttpStatus.OK);
	    } catch (Exception e) {
	        System.out.println(e.getMessage());
	        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	/**
	 * Edita projeto.
	 *
	 * @param projeto the projeto
	 * @return the response entity
	 */
	@Override
	public ResponseEntity<HttpStatus> editaProjeto(Projeto projeto) {
	    try {
	    	Optional<Projeto> dados = repositoryProjeto.findById(projeto.getId_projeto());
	    	if (dados.isEmpty()) {
	    		return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
	    	}
	    	
	    	dados.get().setStatus(projeto.getStatus());
	    	dados.get().setProjeto_titulo(projeto.getProjeto_titulo());
	    	dados.get().setProjeto_descricao(projeto.getProjeto_descricao());
	    	
	    	repositoryProjeto.save(dados.get());
	        return new ResponseEntity<>(null, HttpStatus.OK);
	    } catch (Exception e) {
	    	System.out.println(e);
	        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}
	
	/**
	 * Novo projeto.
	 *
	 * @param projeto the projeto
	 * @return the response entity
	 */
	@Override
	@Transactional
	public ResponseEntity<ProjetoAux> novoProjeto(Projeto projeto) {
	    try {
	    	if (projeto == null) {
	    		return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
	    	}
	    	Date data = new Date();
	    	SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
	    	String novaDataFormatada = dateFormat.format(data);
	    	projeto.setData_criacao(novaDataFormatada);
	    	Projeto resposta = repositoryProjeto.save(projeto);
	    	
	    	ProjetoAux aux = new ProjetoAux();
	    	aux.setId_projeto(resposta.getId_projeto());
	    	aux.setProjeto_titulo(resposta.getProjeto_titulo());
	    	aux.setProjeto_descricao(resposta.getProjeto_descricao());
	    	aux.setStatus(resposta.getStatus());
	    	aux.setData_criacao(novaDataFormatada);
	    	aux.setFk_usuario(resposta.getFk_usuario());
	    	List<Pesquisa> pesquisa = new ArrayList<>();
	    	aux.setPesquisa(pesquisa);
	    	List<Anotacao> anotacao = new ArrayList<>();
	    	aux.setAnotacao(anotacao);
	    	
	        return new ResponseEntity<>(aux, HttpStatus.CREATED);
	    } catch (Exception e) {
	    	System.out.println(e);
	        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}
	
	/**
	 * Deleta projeto.
	 *
	 * @param id_projeto the id projeto
	 * @return the response entity
	 */
	@Override
	@Transactional
	public ResponseEntity<HttpStatus> deletaProjeto(Long id_projeto) {
	    try {

	    	if (id_projeto == null) {
	    		return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
	    	}
	    	
	    	repositoryProjetoPesquisa.deletaRegistrosPesquisaAssociadosProjeto(id_projeto);
	    	repositoryAnotacaoProjeto.deletaRegistrosDoProjeto(id_projeto);
	    	repositoryProjeto.deleteById(id_projeto);
	    	
	        return new ResponseEntity<>(null, HttpStatus.OK);
	    } catch (Exception e) {
	    	System.out.println(e);
	        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}

}
