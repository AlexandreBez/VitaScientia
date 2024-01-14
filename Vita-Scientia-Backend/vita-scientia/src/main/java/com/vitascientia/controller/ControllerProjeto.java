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

import com.vitascientia.model.Projeto;
import com.vitascientia.model.ObjectAux.ProjetoAux;
import com.vitascientia.services.ServiceProjeto;

import io.swagger.v3.oas.annotations.Hidden;

// TODO: Auto-generated Javadoc
/**
 * The Class ControllerProjeto.
 */
@Hidden
@RestController
@RequestMapping("/Projeto")
public class ControllerProjeto {

	/** The service projeto. */
	@Autowired
	ServiceProjeto serviceProjeto;
	
	
	/**
	 * Lista de pesquisas.
	 *
	 * @param id_usuario the id usuario
	 * @param pageable the pageable
	 * @return the response entity
	 */
	@GetMapping("/ListaDeProjeto/{id_usuario}")
    public ResponseEntity<Page<ProjetoAux>> listaDePesquisas(@PathVariable("id_usuario") Long id_usuario, @PageableDefault(size = 20) Pageable pageable) {
        return serviceProjeto.listaDeProjeto(id_usuario, pageable);
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
    public ResponseEntity<Page<ProjetoAux>> pesquisaPeloTitulo(@PathVariable("id_usuario") Long id_usuario, @PathVariable("titulo") String titulo, @PageableDefault(size = 20) Pageable pageable) {
        return serviceProjeto.pesquisaPeloTitulo(id_usuario, titulo, pageable);
    }
	
	/**
	 * Pesquisa pelo id.
	 *
	 * @param id_usuario the id usuario
	 * @param projeto_id the projeto id
	 * @param pageable the pageable
	 * @return the response entity
	 */
	@GetMapping("/ProcuraPeloId/{id_usuario}/{projeto_id}")
    public ResponseEntity<Page<ProjetoAux>> pesquisaPeloId(@PathVariable("id_usuario") Long id_usuario, @PathVariable("projeto_id") Long projeto_id, @PageableDefault(size = 20) Pageable pageable) {
        return serviceProjeto.pesquisaPeloId(id_usuario, projeto_id, pageable);
    }
	
	/**
	 * Edita projeto.
	 *
	 * @param projeto the projeto
	 * @return the response entity
	 */
	@PutMapping("/EditaProjeto")
    public ResponseEntity<HttpStatus> editaProjeto(@RequestBody Projeto projeto) {
        return serviceProjeto.editaProjeto(projeto);
    }
	
	/**
	 * Novo projeto.
	 *
	 * @param projeto the projeto
	 * @return the response entity
	 */
	@PostMapping("/NovoProjeto")
    public ResponseEntity<ProjetoAux> novaPesquisa(@RequestBody Projeto projeto) {
        return serviceProjeto.novoProjeto(projeto);
    }
	
	/**
	 * Deleta projeto.
	 *
	 * @param id_projeto the id projeto
	 * @return the response entity
	 */
	@DeleteMapping("/DeletaProjeto/{id_projeto}")
    public ResponseEntity<HttpStatus> deletaPesquisa(@PathVariable("id_projeto") Long id_projeto) {
        return serviceProjeto.deletaProjeto(id_projeto);
    }
	
	/**
	 * Projetos nao associados.
	 *
	 * @param id_pesquisa the id pesquisa
	 * @param id_usuario the id usuario
	 * @return the response entity
	 */
	@GetMapping("/ProjetosNaoAssociados/{id_pesquisa}/{id_usuario}")
	public ResponseEntity<List<Projeto>> projetosNaoAssociados(@PathVariable("id_pesquisa") Long id_pesquisa,@PathVariable("id_usuario") Long id_usuario){
		return serviceProjeto.projetosNaoAssociados(id_pesquisa, id_usuario);
	}
	
	/**
	 * Associar projeto.
	 *
	 * @param id_pesquisa the id pesquisa
	 * @param listaProjetos the lista projetos
	 * @return the response entity
	 */
	@PostMapping("/AssociarProjeto/{id_pesquisa}")
	public ResponseEntity<List<Projeto>> associarProjeto(@PathVariable("id_pesquisa") Long id_pesquisa,@RequestBody List<Long> listaProjetos){
		return serviceProjeto.associarProjeto(id_pesquisa, listaProjetos);
	}
	
	/**
	 * Desassociar projeto.
	 *
	 * @param id_pesquisa the id pesquisa
	 * @param id_projeto the id projeto
	 * @return the response entity
	 */
	@DeleteMapping("/DesassociarProjeto/{id_pesquisa}/{id_projeto}")
	public ResponseEntity<HttpStatus> desassociarProjeto(@PathVariable("id_pesquisa") Long id_pesquisa,@PathVariable("id_projeto") Long id_projeto){
		return serviceProjeto.desassociarProjeto(id_pesquisa, id_projeto);
	}
	
}
