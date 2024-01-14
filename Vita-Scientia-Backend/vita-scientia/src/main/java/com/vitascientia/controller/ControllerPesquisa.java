package com.vitascientia.controller;

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

import com.vitascientia.model.Pesquisa;
import com.vitascientia.model.Requisitos;
import com.vitascientia.model.ObjectAux.PesquisaAux;
import com.vitascientia.services.ServicePesquisa;
import com.vitascientia.services.ServiceRequisitos;

import io.swagger.v3.oas.annotations.Hidden;

// TODO: Auto-generated Javadoc
/**
 * The Class ControllerPesquisa.
 */
@RestController
@Hidden
@RequestMapping("/Pesquisa")
public class ControllerPesquisa {

	/** The service pesquisa. */
	@Autowired
	ServicePesquisa servicePesquisa;
	
	/** The service requisitos. */
	@Autowired
	ServiceRequisitos serviceRequisitos;
	
	/**
	 * Lista de pesquisas.
	 *
	 * @param id_usuario the id usuario
	 * @param pageable the pageable
	 * @return the response entity
	 */
	@GetMapping("/ListaDePesquisas/{id_usuario}")
    public ResponseEntity<Page<PesquisaAux>> listaDeAnotacoes(@PathVariable Long id_usuario, @PageableDefault(size = 20) Pageable pageable) {
		return servicePesquisa.listaDePesquisas(id_usuario, pageable);
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
    public ResponseEntity<Page<PesquisaAux>> procuraPeloTitulo(@PathVariable("id_usuario") Long id_usuario, @PathVariable("titulo") String titulo, @PageableDefault(size = 20) Pageable pageable) {
        return servicePesquisa.procuraPeloTitulo(id_usuario, titulo, pageable);
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
    public ResponseEntity<Page<PesquisaAux>> procuraPeloId(@PathVariable("id_usuario") Long id_usuario, @PathVariable("nota_id") Long nota_id, @PageableDefault(size = 20) Pageable pageable) {
        return servicePesquisa.procuraPeloId(id_usuario, nota_id, pageable);
    }
	
	/**
	 * Edita pesquisa.
	 *
	 * @param pesquisa the pesquisa
	 * @return the response entity
	 */
	@PutMapping("/EditaPesquisa")
    public ResponseEntity<HttpStatus> editaPesquisa(@RequestBody Pesquisa pesquisa) {
        return servicePesquisa.editaPesquisa(pesquisa);
    }
	
	/**
	 * Nova pesquisa.
	 *
	 * @param pesquisa the pesquisa
	 * @return the response entity
	 */
	@PostMapping("/NovaPesquisa")
    public ResponseEntity<PesquisaAux> novaPesquisa(@RequestBody Pesquisa pesquisa) {
        return servicePesquisa.novaPesquisa(pesquisa);
    }
	
	/**
	 * Deleta pesquisa.
	 *
	 * @param id_pesquisa the id pesquisa
	 * @return the response entity
	 */
	@DeleteMapping("/DeletaPesquisa/{id_pesquisa}")
    public ResponseEntity<HttpStatus> deletaPesquisa(@PathVariable("id_pesquisa") Long id_pesquisa) {
        return servicePesquisa.deletaPesquisa(id_pesquisa);
    }
	
	// --------------------------------Requisitos--------------------------------------
	
	/**
	 * Novo requisito.
	 *
	 * @param requisitos the requisitos
	 * @return the response entity
	 */
	@PostMapping("/Requisito/NovoRequisito")
    public ResponseEntity<Requisitos> novoRequisito(@RequestBody Requisitos requisitos) {
        return serviceRequisitos.novoRequisito(requisitos);
    }
	
	/**
	 * Deleta requisito.
	 *
	 * @param id_requisito the id requisito
	 * @return the response entity
	 */
	@DeleteMapping("/Requisito/DeletaRequisito/{id_requisito}")
    public ResponseEntity<HttpStatus> deletaRequisito(@PathVariable("id_requisito") Long id_requisito) {
        return serviceRequisitos.deletaRequisito(id_requisito);
    }
    
	/**
	 * Atualiza requisito.
	 *
	 * @param requisitos the requisitos
	 * @return the response entity
	 */
	@PutMapping("/Requisito/AtualizaRequisito")
    public ResponseEntity<HttpStatus> atualizaRequisito(@RequestBody Requisitos requisitos) {
        return serviceRequisitos.atualizaRequisito(requisitos);
    }
}
