package com.vitascientia.OpenApi;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
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
import com.vitascientia.model.ObjectAux.ProjetoAux;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;

@Tag(name = "Projeto")
@RestController
@RequestMapping("Documentacao/Projeto")
public class ProjetoDocumentacao {

	@GetMapping("/ProjetosNaoAssociados/{id_pesquisa}/{id_usuario}")
	@Operation(summary = "Pega a lista de projetos não associados a pesquisa", method = "GET")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Lista de projetos enviado com sucesso", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 200, \"status\": OK}"))),
			@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 500, \"status\": INTERNAL_SERVER_ERROR}"))) })
	public ResponseEntity<List<Projeto>> projetosNaoAssociados(@PathVariable("id_pesquisa") Long id_pesquisa,
			@PathVariable("id_usuario") Long id_usuario) {
		Date data = new Date();
		SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
		String novaDataFormatada = dateFormat.format(data);
		Projeto projeto = new Projeto();
		projeto.setId_projeto(1L);
		projeto.setProjeto_titulo("Resposta documentacao");
		projeto.setProjeto_descricao("Descricao do projeto");
		projeto.setStatus("Aberto");
		projeto.setData_criacao(novaDataFormatada);
		projeto.setFk_usuario(id_usuario);
		List<Projeto> resposta = Arrays.asList(projeto);
		return new ResponseEntity<>(resposta, HttpStatus.OK);
	}

	@PostMapping("/AssociarProjeto/{id_pesquisa}")
	@Operation(summary = "Associa projetos a uma pesquisa", method = "POST")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Lista de projetos associados com sucesso", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 200, \"status\": OK}"))),
			@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 500, \"status\": INTERNAL_SERVER_ERROR}"))) })
	public ResponseEntity<List<Projeto>> associarProjeto(@PathVariable("id_pesquisa") Long id_pesquisa,
			@RequestBody List<Long> listaProjetos) {
		Date data = new Date();
		SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
		String novaDataFormatada = dateFormat.format(data);
		List<Projeto> resposta = new ArrayList<>();
		for (Long id : listaProjetos) {
			Projeto projeto = new Projeto();
			projeto.setId_projeto(id);
			projeto.setProjeto_titulo("Resposta documentacao " + id);
			projeto.setProjeto_descricao("Descricao do projeto " + id);
			projeto.setStatus("Aberto");
			projeto.setData_criacao(novaDataFormatada);
			projeto.setFk_usuario(1L);
			resposta.add(projeto);
		}
		return new ResponseEntity<>(resposta, HttpStatus.OK);
	}

	@DeleteMapping("/DesassociarProjeto/{id_pesquisa}/{id_projeto}")
	@Operation(summary = "Desassocia projetos de uma pesquisa", method = "DELETE")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Lista de projetos desassociados com sucesso", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 200, \"status\": OK}"))),
			@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 500, \"status\": INTERNAL_SERVER_ERROR}"))) })
	public ResponseEntity<HttpStatus> desassociarProjeto(@PathVariable("id_pesquisa") Long id_pesquisa,
			@PathVariable("id_projeto") Long id_projeto) {
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@GetMapping("/ListaDeProjeto/{id_usuario}")
	@Operation(summary = "Pega a lista de projetos do usuario", method = "GET")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Lista de projetos enviados com sucesso", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 200, \"status\": OK}"))),
			@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 500, \"status\": INTERNAL_SERVER_ERROR}"))) })
	public ResponseEntity<Page<ProjetoAux>> listaDeProjeto(@PathVariable("id_usuario") Long id_usuario,
			@PageableDefault(size = 20) Pageable pageable) {
		Date data = new Date();
		SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
		String novaDataFormatada = dateFormat.format(data);

		Pesquisa pesquisa = new Pesquisa();
		List<Pesquisa> pesquisas = new ArrayList<>();
		pesquisa.setId_pesquisa(1l);
		pesquisa.setPesquisa_titulo("Pesquisa documentacao");
		pesquisa.setPesquisa_descricao("Descricao da pesquisa");
		pesquisa.setStatus("Abeto");
		pesquisa.setData_criacao(novaDataFormatada);
		pesquisa.setFk_usuario(id_usuario);
		pesquisas.add(pesquisa);

		Anotacao anotacao = new Anotacao();
		List<Anotacao> anotacoes = new ArrayList<>();
		anotacao.setId_anotacao(1L);
		anotacao.setAnotacao_titulo("Anotacao documentacao");
		anotacao.setAnotacao_descricao("Descricao da anotacao");
		anotacao.setData_criacao(novaDataFormatada);
		anotacao.setFk_usuario(id_usuario);
		anotacoes.add(anotacao);

		ProjetoAux projeto = new ProjetoAux();
		projeto.setId_projeto(1l);
		projeto.setProjeto_titulo("Resposta documentacao");
		projeto.setProjeto_descricao("Descricao do projeto");
		projeto.setStatus("Aberto");
		projeto.setData_criacao(novaDataFormatada);
		projeto.setFk_usuario(id_usuario);
		projeto.setPesquisa(pesquisas);
		projeto.setAnotacao(anotacoes);

		List<ProjetoAux> listaDeProjetos = new ArrayList<>();
		listaDeProjetos.add(projeto);
		return new ResponseEntity<>(new PageImpl<>(listaDeProjetos, pageable, 1), HttpStatus.OK);
	}

	@GetMapping("/ProcuraPeloTitulo/{id_usuario}/{titulo}")
	@Operation(summary = "Pega uma lista de projetos atraves do titulo pesquisado", method = "GET")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Lista de projetos enviados com sucesso", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 200, \"status\": OK}"))),
			@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 500, \"status\": INTERNAL_SERVER_ERROR}"))) })
	public ResponseEntity<Page<ProjetoAux>> pesquisaPeloTitulo(@PathVariable("id_usuario") Long id_usuario,
			@PathVariable("titulo") String titulo, @PageableDefault(size = 20) Pageable pageable) {
		Date data = new Date();
		SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
		String novaDataFormatada = dateFormat.format(data);

		Pesquisa pesquisa = new Pesquisa();
		List<Pesquisa> pesquisas = new ArrayList<>();
		pesquisa.setId_pesquisa(1l);
		pesquisa.setPesquisa_titulo("Pesquisa documentacao");
		pesquisa.setPesquisa_descricao("Descricao da pesquisa");
		pesquisa.setStatus("Abeto");
		pesquisa.setData_criacao(novaDataFormatada);
		pesquisa.setFk_usuario(id_usuario);
		pesquisas.add(pesquisa);

		Anotacao anotacao = new Anotacao();
		List<Anotacao> anotacoes = new ArrayList<>();
		anotacao.setId_anotacao(1L);
		anotacao.setAnotacao_titulo("Anotacao documentacao");
		anotacao.setAnotacao_descricao("Descricao da anotacao");
		anotacao.setData_criacao(novaDataFormatada);
		anotacao.setFk_usuario(id_usuario);
		anotacoes.add(anotacao);

		ProjetoAux projeto = new ProjetoAux();
		projeto.setId_projeto(1l);
		projeto.setProjeto_titulo("Resposta documentacao");
		projeto.setProjeto_descricao("Descricao do projeto");
		projeto.setStatus("Aberto");
		projeto.setData_criacao(novaDataFormatada);
		projeto.setFk_usuario(id_usuario);
		projeto.setPesquisa(pesquisas);
		projeto.setAnotacao(anotacoes);

		List<ProjetoAux> listaDeProjetos = new ArrayList<>();
		listaDeProjetos.add(projeto);
		return new ResponseEntity<>(new PageImpl<>(listaDeProjetos, pageable, 1), HttpStatus.OK);
	}

	@GetMapping("/ProcuraPeloId/{id_usuario}/{projeto_id}")
	@Operation(summary = "Pega o projeto atraves do id pesquisado", method = "GET")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Lista de projeto enviado com sucesso", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 200, \"status\": OK}"))),
			@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 500, \"status\": INTERNAL_SERVER_ERROR}"))) })
	public ResponseEntity<Page<ProjetoAux>> pesquisaPeloId(@PathVariable("id_usuario") Long id_usuario,
			@PathVariable("projeto_id") Long projeto_id, @PageableDefault(size = 20) Pageable pageable) {
		Date data = new Date();
		SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
		String novaDataFormatada = dateFormat.format(data);

		Pesquisa pesquisa = new Pesquisa();
		List<Pesquisa> pesquisas = new ArrayList<>();
		pesquisa.setId_pesquisa(1l);
		pesquisa.setPesquisa_titulo("Pesquisa documentacao");
		pesquisa.setPesquisa_descricao("Descricao da pesquisa");
		pesquisa.setStatus("Abeto");
		pesquisa.setData_criacao(novaDataFormatada);
		pesquisa.setFk_usuario(id_usuario);
		pesquisas.add(pesquisa);

		Anotacao anotacao = new Anotacao();
		List<Anotacao> anotacoes = new ArrayList<>();
		anotacao.setId_anotacao(1L);
		anotacao.setAnotacao_titulo("Anotacao documentacao");
		anotacao.setAnotacao_descricao("Descricao da anotacao");
		anotacao.setData_criacao(novaDataFormatada);
		anotacao.setFk_usuario(id_usuario);
		anotacoes.add(anotacao);

		ProjetoAux projeto = new ProjetoAux();
		projeto.setId_projeto(1l);
		projeto.setProjeto_titulo("Resposta documentacao");
		projeto.setProjeto_descricao("Descricao do projeto");
		projeto.setStatus("Aberto");
		projeto.setData_criacao(novaDataFormatada);
		projeto.setFk_usuario(id_usuario);
		projeto.setPesquisa(pesquisas);
		projeto.setAnotacao(anotacoes);

		List<ProjetoAux> listaDeProjetos = new ArrayList<>();
		listaDeProjetos.add(projeto);
		return new ResponseEntity<>(new PageImpl<>(listaDeProjetos, pageable, 1), HttpStatus.OK);
	}
	
	/**
	 * Edita projeto.
	 *
	 * @param projeto the projeto
	 * @return the response entity
	 */
	@PutMapping("/EditaProjeto")
	@Operation(summary = "Edita um projeto", method = "PUT")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Projeto editado com sucesso", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 200, \"status\": OK}"))),
			@ApiResponse(responseCode = "400", description = "Dados enviados estão vazios", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 400, \"status\": BAD_REQUEST}"))),
			@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 500, \"status\": INTERNAL_SERVER_ERROR}"))) })
    public ResponseEntity<HttpStatus> editaProjeto(@RequestBody Projeto projeto) {
		return new ResponseEntity<>(HttpStatus.OK);
    }
	
	/**
	 * Novo projeto.
	 *
	 * @param projeto the projeto
	 * @return the response entity
	 */
	@PostMapping("/NovoProjeto")
	@Operation(summary = "cria um novo projeto", method = "POST")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "201", description = "Projeto salvo com sucesso", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 201, \"status\": CREATED}"))),
			@ApiResponse(responseCode = "400", description = "Dados enviados estão vazios", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 400, \"status\": BAD_REQUEST}"))),
			@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 500, \"status\": INTERNAL_SERVER_ERROR}"))) })
    public ResponseEntity<Projeto> novaPesquisa(@RequestBody Projeto projeto) {
		projeto.setId_projeto(1l);
        return new ResponseEntity<>(projeto,HttpStatus.CREATED);
    }
	
	/**
	 * Deleta projeto.
	 *
	 * @param id_projeto the id projeto
	 * @return the response entity
	 */
	@DeleteMapping("/DeletaProjeto/{id_projeto}")
	@Operation(summary = "Deleta um projeto", method = "DELETE")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "201", description = "Projeto deletado com sucesso", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 200, \"status\": OK}"))),
			@ApiResponse(responseCode = "400", description = "Dados enviados estão vazios", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 400, \"status\": BAD_REQUEST}"))),
			@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 500, \"status\": INTERNAL_SERVER_ERROR}"))) })
    public ResponseEntity<HttpStatus> deletaPesquisa(@PathVariable("id_projeto") Long id_projeto) {
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
