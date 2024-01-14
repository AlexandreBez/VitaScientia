package com.vitascientia.OpenApi;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
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
import com.vitascientia.model.Pesquisa;
import com.vitascientia.model.Projeto;
import com.vitascientia.model.Requisitos;
import com.vitascientia.model.ObjectAux.PesquisaAux;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;

@Tag(name = "Pesquisa")
@RestController
@RequestMapping("Documentacao/Pesquisa")
public class PesquisaDocumentacao {

	/**
	 * Lista de pesquisas.
	 *
	 * @param id_usuario the id usuario
	 * @param pageable   the pageable
	 * @return the response entity
	 */
	@GetMapping("/ListaDePesquisas/{id_usuario}")
	@Operation(summary = "Pega a lista de pesquisa do usuario.", method = "GET")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Lista de pesquisas enviadas com sucesso", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 200, \"status\": OK}"))),
			@ApiResponse(responseCode = "400", description = "Dados enviados estão vazios", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 400, \"status\": BAD_REQUEST}"))),
			@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 500, \"status\": INTERNAL_SERVER_ERROR}")))})
	public ResponseEntity<Page<PesquisaAux>> listaDePesquisas(@PathVariable("id_usuario") Long id_usuario,
			@PageableDefault(size = 20) Pageable pageable) {
		Date data = new Date();
		SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
		String novaDataFormatada = dateFormat.format(data);

		PesquisaAux pesquisa = new PesquisaAux();
		pesquisa.setId_pesquisa(1l);
		pesquisa.setPesquisa_titulo("Pesquisa documentacao");
		pesquisa.setPesquisa_descricao("Descricao da pesquisa");
		pesquisa.setStatus("Abeto");
		pesquisa.setData_criacao(novaDataFormatada);
		pesquisa.setFk_usuario(id_usuario);

		Anotacao anotacao = new Anotacao();
		List<Anotacao> anotacoes = new ArrayList<>();
		anotacao.setId_anotacao(1L);
		anotacao.setAnotacao_titulo("Anotacao documentacao");
		anotacao.setAnotacao_descricao("Descricao da anotacao");
		anotacao.setData_criacao(novaDataFormatada);
		anotacao.setFk_usuario(id_usuario);
		anotacoes.add(anotacao);

		Projeto projeto = new Projeto();
		List<Projeto> projetos = new ArrayList<>();
		projeto.setId_projeto(1l);
		projeto.setProjeto_titulo("Resposta documentacao");
		projeto.setProjeto_descricao("Descricao do projeto");
		projeto.setStatus("Aberto");
		projeto.setData_criacao(novaDataFormatada);
		projeto.setFk_usuario(id_usuario);
		projetos.add(projeto);

		pesquisa.setProjeto(projetos);
		pesquisa.setAnotacao(anotacoes);
		List<PesquisaAux> listaDePesquisas = new ArrayList<>();
		listaDePesquisas.add(pesquisa);
		return new ResponseEntity<>(new PageImpl<>(listaDePesquisas, pageable, 1), HttpStatus.OK);
	}

	/**
	 * Pesquisa pelo titulo.
	 *
	 * @param id_usuario the id usuario
	 * @param titulo     the titulo
	 * @param pageable   the pageable
	 * @return the response entity
	 */
	@GetMapping("/PesquisaPeloTitulo/{id_usuario}/{titulo}")
	@Operation(summary = "Pega uma lista de pesquisa atraves do titulo pesquisado", method = "GET")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Lista de pesquisa enviada com sucesso", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 200, \"status\": OK}"))),
			@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 500, \"status\": INTERNAL_SERVER_ERROR}"))) })
	public ResponseEntity<Page<PesquisaAux>> procuraPeloTitulo(@PathVariable("id_usuario") Long id_usuario,
			@PathVariable("titulo") String titulo, @PageableDefault(size = 20) Pageable pageable) {
		Date data = new Date();
		SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
		String novaDataFormatada = dateFormat.format(data);

		PesquisaAux pesquisa = new PesquisaAux();
		pesquisa.setId_pesquisa(1l);
		pesquisa.setPesquisa_titulo("Pesquisa documentacao");
		pesquisa.setPesquisa_descricao("Descricao da pesquisa");
		pesquisa.setStatus("Abeto");
		pesquisa.setData_criacao(novaDataFormatada);
		pesquisa.setFk_usuario(id_usuario);

		Anotacao anotacao = new Anotacao();
		List<Anotacao> anotacoes = new ArrayList<>();
		anotacao.setId_anotacao(1L);
		anotacao.setAnotacao_titulo("Anotacao documentacao");
		anotacao.setAnotacao_descricao("Descricao da anotacao");
		anotacao.setData_criacao(novaDataFormatada);
		anotacao.setFk_usuario(id_usuario);
		anotacoes.add(anotacao);

		Projeto projeto = new Projeto();
		List<Projeto> projetos = new ArrayList<>();
		projeto.setId_projeto(1l);
		projeto.setProjeto_titulo("Resposta documentacao");
		projeto.setProjeto_descricao("Descricao do projeto");
		projeto.setStatus("Aberto");
		projeto.setData_criacao(novaDataFormatada);
		projeto.setFk_usuario(id_usuario);
		projetos.add(projeto);

		pesquisa.setProjeto(projetos);
		pesquisa.setAnotacao(anotacoes);
		List<PesquisaAux> listaDePesquisas = new ArrayList<>();
		listaDePesquisas.add(pesquisa);
		return new ResponseEntity<>(new PageImpl<>(listaDePesquisas, pageable, 1), HttpStatus.OK);
	}

	/**
	 * Pesquisa pelo id.
	 *
	 * @param id_usuario the id usuario
	 * @param nota_id    the nota id
	 * @param pageable   the pageable
	 * @return the response entity
	 */
	@GetMapping("/PesquisaPeloId/{id_usuario}/{nota_id}")
	@Operation(summary = "Pega uma lista de pesquisa atraves do id pesquisado", method = "GET")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Lista de pesquisa enviada com sucesso", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 200, \"status\": OK}"))),
			@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 500, \"status\": INTERNAL_SERVER_ERROR}"))) })
	public ResponseEntity<Page<PesquisaAux>> procuraPeloId(@PathVariable("id_usuario") Long id_usuario,
			@PathVariable("id_pesquisa") Long id_pesquisa, @PageableDefault(size = 20) Pageable pageable) {
		Date data = new Date();
		SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
		String novaDataFormatada = dateFormat.format(data);

		PesquisaAux pesquisa = new PesquisaAux();
		pesquisa.setId_pesquisa(id_pesquisa);
		pesquisa.setPesquisa_titulo("Pesquisa documentacao");
		pesquisa.setPesquisa_descricao("Descricao da pesquisa");
		pesquisa.setStatus("Abeto");
		pesquisa.setData_criacao(novaDataFormatada);
		pesquisa.setFk_usuario(id_usuario);

		Anotacao anotacao = new Anotacao();
		List<Anotacao> anotacoes = new ArrayList<>();
		anotacao.setId_anotacao(1L);
		anotacao.setAnotacao_titulo("Anotacao documentacao");
		anotacao.setAnotacao_descricao("Descricao da anotacao");
		anotacao.setData_criacao(novaDataFormatada);
		anotacao.setFk_usuario(id_usuario);
		anotacoes.add(anotacao);

		Projeto projeto = new Projeto();
		List<Projeto> projetos = new ArrayList<>();
		projeto.setId_projeto(1l);
		projeto.setProjeto_titulo("Resposta documentacao");
		projeto.setProjeto_descricao("Descricao do projeto");
		projeto.setStatus("Aberto");
		projeto.setData_criacao(novaDataFormatada);
		projeto.setFk_usuario(id_usuario);
		projetos.add(projeto);

		pesquisa.setProjeto(projetos);
		pesquisa.setAnotacao(anotacoes);
		List<PesquisaAux> listaDePesquisas = new ArrayList<>();
		listaDePesquisas.add(pesquisa);
		return new ResponseEntity<>(new PageImpl<>(listaDePesquisas, pageable, 1), HttpStatus.OK);
	}

	/**
	 * Edita pesquisa.
	 *
	 * @param pesquisa the pesquisa
	 * @return the response entity
	 */
	@PutMapping("/EditaPesquisa")
	@Operation(summary = "Edita pesquisa.", method = "PUT")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "201", description = "Pesquisa editada com sucesso", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 201, \"status\": CREATED}"))),
			@ApiResponse(responseCode = "400", description = "Dados enviados estão vazios", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 400, \"status\": BAD_REQUEST}"))),
			@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 500, \"status\": INTERNAL_SERVER_ERROR}")))})
	public ResponseEntity<HttpStatus> editaPesquisa(@RequestBody Pesquisa pesquisa) {
		return new ResponseEntity<>(HttpStatus.OK);
	}

	/**
	 * Nova pesquisa.
	 *
	 * @param pesquisa the pesquisa
	 * @return the response entity
	 */
	@PostMapping("/NovaPesquisa")
	@Operation(summary = "Cria uma nova pesquisa.", method = "POST")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "201", description = "Pesquisa criada com sucesso", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 201, \"status\": CREATED}"))),
			@ApiResponse(responseCode = "400", description = "Dados enviados estão vazios", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 400, \"status\": BAD_REQUEST}"))),
			@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 500, \"status\": INTERNAL_SERVER_ERROR}"))) })
	public ResponseEntity<Pesquisa> novaPesquisa(@RequestBody Pesquisa pesquisa) {
		return new ResponseEntity<>(pesquisa, HttpStatus.OK);
	}

	/**
	 * Deleta pesquisa.
	 *
	 * @param id_pesquisa the id pesquisa
	 * @return the response entity
	 */
	@DeleteMapping("/DeletaPesquisa/{id_pesquisa}")
	@Operation(summary = "Deleta uma pesquisa pelo id", method = "DELETE")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Pesquisa deletada com sucesso", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 200, \"status\": OK}"))),
			@ApiResponse(responseCode = "400", description = "Dados enviados estão vazios", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 400, \"status\": BAD_REQUEST}"))),
			@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 500, \"status\": INTERNAL_SERVER_ERROR}"))) })
	public ResponseEntity<HttpStatus> deletaPesquisa(@PathVariable("id_pesquisa") Long id_pesquisa) {
		return new ResponseEntity<>(null, HttpStatus.OK);
	}

	// --------------------------------Requisitos--------------------------------------

	/**
	 * Novo requisito.
	 *
	 * @param requisitos the requisitos
	 * @return the response entity
	 */
	@PostMapping("/Requisito/NovoRequisito")
	@Operation(summary = "Cria um novo requisito", method = "POST")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Requisito criado com sucesso", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 200, \"status\": OK}"))),
			@ApiResponse(responseCode = "400", description = "Dados enviados estão vazios", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 400, \"status\": BAD_REQUEST}"))),
			@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 500, \"status\": INTERNAL_SERVER_ERROR}"))) })
	public ResponseEntity<Requisitos> novoRequisito(@RequestBody Requisitos requisitos) {
		Date data = new Date();
		SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
		String novaDataFormatada = dateFormat.format(data);
		Requisitos resposta = new Requisitos();
		resposta.setId_requisito(requisitos.getId_requisito());
		resposta.setItem(requisitos.getItem());
		resposta.setPreco(requisitos.getPreco());
		resposta.setData_criacao(novaDataFormatada);
		return new ResponseEntity<>(resposta, HttpStatus.CREATED);
	}

	/**
	 * Deleta requisito.
	 *
	 * @param id_requisito the id requisito
	 * @return the response entity
	 */
	@DeleteMapping("/Requisito/DeletaRequisito/{id_requisito}")
	@Operation(summary = "Deleta o requisito", method = "DELETE")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Requisito atualizado com sucesso", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 200, \"status\": OK}"))),
			@ApiResponse(responseCode = "400", description = "Dados enviados estão vazios", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 400, \"status\": BAD_REQUEST}"))),
			@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 500, \"status\": INTERNAL_SERVER_ERROR}"))) })
	public ResponseEntity<HttpStatus> deletaRequisito(@PathVariable("id_requisito") Long id_requisito) {
		return new ResponseEntity<>(HttpStatus.OK);
	}

	/**
	 * Atualiza requisito.
	 *
	 * @param requisitos the requisitos
	 * @return the response entity
	 */
	@PutMapping("/Requisito/AtualizaRequisito")
	@Operation(summary = "Atualiza o requisito", method = "PUT")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Requisito atualizado com sucesso", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 200, \"status\": OK}"))),
			@ApiResponse(responseCode = "400", description = "Dados enviados estão vazios", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 400, \"status\": BAD_REQUEST}"))),
			@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 500, \"status\": INTERNAL_SERVER_ERROR}"))) })
	public ResponseEntity<HttpStatus> atualizaRequisito(@RequestBody Requisitos requisitos) {
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
