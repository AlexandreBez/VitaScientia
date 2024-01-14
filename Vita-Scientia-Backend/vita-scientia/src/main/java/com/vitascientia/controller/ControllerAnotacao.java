package com.vitascientia.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vitascientia.model.Anotacao;
import com.vitascientia.services.ServiceAnotacao;
import com.vitascientia.services.ServiceAnotacaoPesquisa;
import com.vitascientia.services.ServiceAnotacaoProjeto;

import io.swagger.v3.oas.annotations.Hidden;

// TODO: Auto-generated Javadoc
/**
 * The Class ControllerAnotacao.
 */
@Hidden
@RestController
@RequestMapping("/Anotacao")
public class ControllerAnotacao {
	
	/** The service anotacao. */
	@Autowired
	ServiceAnotacao serviceAnotacao;
	
	/** The service anotacao pesquisa. */
	@Autowired
	ServiceAnotacaoPesquisa serviceAnotacaoPesquisa;
	
	/** The service anotacao projeto. */
	@Autowired
	ServiceAnotacaoProjeto serviceAnotacaoProjeto;
	
	/**
	 * Lista de notas.
	 *
	 * @param id_usuario the id usuario
	 * @param pageable the pageable
	 * @return the response entity
	 */
	@GetMapping("/ListaDeAnotacoes/{id_usuario}")
    public ResponseEntity<Page<Anotacao>> listaDeAnotacoes(@PathVariable Long id_usuario, @PageableDefault(size = 20) Pageable pageable) {
        return serviceAnotacao.listaDeAnotacoes(id_usuario, pageable);
    }
	
	/**
	 * Pesquisa pelo titulo.
	 *
	 * @param id_usuario the id usuario
	 * @param titulo the titulo
	 * @param pageable the pageable
	 * @return the response entity
	 */
	@GetMapping("/ProcuraPeloTitulo/{id_usuario}/{titulo}")
    public ResponseEntity<Page<Anotacao>> procuraPeloTitulo(@PathVariable Long id_usuario, @PathVariable String titulo, @PageableDefault(size = 20) Pageable pageable) {
        return serviceAnotacao.procuraPeloTitulo(id_usuario, titulo, pageable);
    }
	
	/**
	 * Pesquisa pelo id.
	 *
	 * @param id_usuario the id usuario
	 * @param nota_id the nota id
	 * @param pageable the pageable
	 * @return the response entity
	 */
	@GetMapping("/ProcuraPeloId/{id_usuario}/{nota_id}")
    public ResponseEntity<Page<Anotacao>> procuraPeloId(@PathVariable Long id_usuario, @PathVariable Long nota_id, @PageableDefault(size = 20) Pageable pageable) {
        return serviceAnotacao.procuraPeloId(id_usuario, nota_id, pageable);
    }
	
	/**
	 * Deleta anotacao.
	 *
	 * @param nota_id the nota id
	 * @return the response entity
	 */
	@DeleteMapping("/DeletaAnotacao/{nota_id}")
    public ResponseEntity<HttpStatus> deletaAnotacao(@PathVariable Long nota_id) {
        return serviceAnotacao.deletaAnotacao(nota_id);
    }
	
	/**
	 * Nova anotacao.
	 *
	 * @param anotacao the anotacao
	 * @return the response entity
	 */
	@PostMapping("/NovaAnotacao")
    public ResponseEntity<Anotacao> novaAnotacao(@RequestBody Anotacao anotacao) {
        return serviceAnotacao.novaAnotacao(anotacao);
    }
	
	/**
	 * Atualiza anotacao.
	 *
	 * @param anotacao the anotacao
	 * @return the response entity
	 */
	@PutMapping("/AtualizaAnotacao")
    public ResponseEntity<HttpStatus> atualizaAnotacao(@RequestBody Anotacao anotacao) {
        return serviceAnotacao.atualizaAnotacao(anotacao);
    }
	
	//	-------------------------------Pesquisa-------------------------------------------
    
	/**
	 * Anotacoes nao associadas pesquisa.
	 *
	 * @param id_pesquisa the id pesquisa
	 * @param id_usuario the id usuario
	 * @return the response entity
	 */
	@GetMapping("/Pesquisa/AnotacoesNaoAssociadas/{id_pesquisa}/{id_usuario}")
	public ResponseEntity<List<Anotacao>> anotacoesNaoAssociadasPesquisa(@PathVariable("id_pesquisa") Long id_pesquisa,@PathVariable("id_usuario") Long id_usuario){
		return serviceAnotacaoPesquisa.anotacoesNaoAssociadas(id_pesquisa, id_usuario);
	}
	
	/**
	 * Associar anotacoes pesquisa.
	 *
	 * @param id_pesquisa the id pesquisa
	 * @param listaNotas the lista notas
	 * @return the response entity
	 */
	@PostMapping("/Pesquisa/AssociarAnotacoes/{id_pesquisa}")
	public ResponseEntity<List<Anotacao>> associarAnotacoesPesquisa(@PathVariable("id_pesquisa") Long id_pesquisa,@RequestBody List<Long> listaNotas){
		return serviceAnotacaoPesquisa.associarAnotacoes(id_pesquisa, listaNotas);
	}
	
	/**
	 * Desassociar anotacoes pesquisa.
	 *
	 * @param id_pesquisa the id pesquisa
	 * @param id_nota the id nota
	 * @return the response entity
	 */
	@DeleteMapping("/Pesquisa/DesassociarAnotacoes/{id_pesquisa}/{id_nota}")
	public ResponseEntity<HttpStatus> desassociarAnotacoesPesquisa(@PathVariable("id_pesquisa") Long id_pesquisa,@PathVariable("id_nota") Long id_nota){
		return serviceAnotacaoPesquisa.desassociarAnotacoes(id_pesquisa, id_nota);
	}
	
	//	-------------------------------Projeto-------------------------------------------
    
	/**
	 * Anotacoes nao associadas projeto.
	 *
	 * @param id_projeto the id projeto
	 * @param id_usuario the id usuario
	 * @return the response entity
	 */
	@GetMapping("/Projeto/AnotacoesNaoAssociadas/{id_projeto}/{id_usuario}")
	public ResponseEntity<List<Anotacao>> anotacoesNaoAssociadasProjeto(@PathVariable("id_projeto") Long id_projeto,@PathVariable("id_usuario") Long id_usuario){
		return serviceAnotacaoProjeto.anotacoesNaoAssociadas(id_projeto, id_usuario);
	}
	
	/**
	 * Associar anotacoes projeto.
	 *
	 * @param id_projeto the id projeto
	 * @param listaNotas the lista notas
	 * @return the response entity
	 */
	@PostMapping("/Projeto/AssociarAnotacoes/{id_projeto}")
	public ResponseEntity<List<Anotacao>> associarAnotacoesProjeto(@PathVariable("id_projeto") Long id_projeto,@RequestBody List<Long> listaNotas){
		return serviceAnotacaoProjeto.associarAnotacoes(id_projeto, listaNotas);
	}
	
	/**
	 * Desassociar anotacoes projeto.
	 *
	 * @param id_projeto the id projeto
	 * @param id_nota the id nota
	 * @return the response entity
	 */
	@DeleteMapping("/Projeto/DesassociarAnotacoes/{id_projeto}/{id_anotacao}")
	public ResponseEntity<HttpStatus> desassociarAnotacoesProjeto(@PathVariable("id_projeto") Long id_projeto,@PathVariable("id_anotacao") Long id_anotacao){
		return serviceAnotacaoProjeto.desassociarAnotacoes(id_projeto, id_anotacao);
	}
	
}
