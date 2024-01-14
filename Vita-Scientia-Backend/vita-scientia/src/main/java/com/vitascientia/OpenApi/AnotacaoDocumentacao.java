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

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;

@Tag(name = "Anotação")
@RestController
@RequestMapping("Documentacao/Anotacao")
public class AnotacaoDocumentacao {
	
	/**
	 * Lista de anotacoes.
	 *
	 * @param id_usuario the id usuario
	 * @param pageable the pageable
	 * @return the response entity
	 */
	@GetMapping("/ListaDeNotas/{id_usuario}")
	@Operation(summary = "Pega a lista de anotacoes do usuario.", method = "GET")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Lista de anotacoes enviadas com sucesso", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 200, \"status\": OK}"))),
			@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 500, \"status\": INTERNAL_SERVER_ERROR}")))})
    public ResponseEntity<Page<Anotacao>> listaDeAnotacoes(@PathVariable Long id_usuario, @PageableDefault(size = 20) Pageable pageable) {
		Date data = new Date();
		SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
		String novaDataFormatada = dateFormat.format(data);
		
		List<Anotacao> listaDeAnotacoes = new ArrayList<>();
		Anotacao anotacao = new Anotacao();
		anotacao.setId_anotacao(1L);
		anotacao.setAnotacao_titulo("Anotacao documentacao");
		anotacao.setAnotacao_descricao("Descricao da anotacao");
		anotacao.setData_criacao(novaDataFormatada);
		anotacao.setFk_usuario(id_usuario);
		listaDeAnotacoes.add(anotacao);
		
		return new ResponseEntity<>(new PageImpl<>(listaDeAnotacoes, pageable, 1), HttpStatus.OK);
    }
	
	/**
	 * Pesquisa pelo titulo.
	 *
	 * @param id_usuario the id usuario
	 * @param titulo the titulo
	 * @param pageable the pageable
	 * @return the response entity
	 */
	@GetMapping("/PesquisaPeloTitulo/{id_usuario}/{titulo}")
	@Operation(summary = "Pega uma lista de anotacoes atraves do titulo pesquisado.", method = "GET")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Lista de anotacoes enviadas com sucesso", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 200, \"status\": OK}"))),
			@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 500, \"status\": INTERNAL_SERVER_ERROR}")))})
    public ResponseEntity<Page<Anotacao>> pesquisaPeloTitulo(@PathVariable Long id_usuario, @PathVariable String titulo, @PageableDefault(size = 20) Pageable pageable) {
		Date data = new Date();
		SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
		String novaDataFormatada = dateFormat.format(data);
		
		List<Anotacao> listaDeAnotacoes = new ArrayList<>();
		Anotacao anotacao = new Anotacao();
		anotacao.setId_anotacao(1L);
		anotacao.setAnotacao_titulo("Anotacao documentacao");
		anotacao.setAnotacao_descricao("Descricao da anotacao");
		anotacao.setData_criacao(novaDataFormatada);
		anotacao.setFk_usuario(id_usuario);
		listaDeAnotacoes.add(anotacao);
		
		return new ResponseEntity<>(new PageImpl<>(listaDeAnotacoes, pageable, 1), HttpStatus.OK);
    }
	
	/**
	 * Pesquisa pelo id.
	 *
	 * @param id_usuario the id usuario
	 * @param nota_id the nota id
	 * @param pageable the pageable
	 * @return the response entity
	 */
	@GetMapping("/PesquisaPeloId/{id_usuario}/{nota_id}")
	@Operation(summary = "Pega uma lista de anotacoes atraves do id pesquisado.", method = "GET")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Lista de anotacoes enviadas com sucesso", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 200, \"status\": OK}"))),
			@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 500, \"status\": INTERNAL_SERVER_ERROR}")))})
    public ResponseEntity<Page<Anotacao>> pesquisaPeloId(@PathVariable Long id_usuario, @PathVariable Long nota_id, @PageableDefault(size = 20) Pageable pageable) {
		Date data = new Date();
		SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
		String novaDataFormatada = dateFormat.format(data);
		
		List<Anotacao> listaDeAnotacoes = new ArrayList<>();
		Anotacao anotacao = new Anotacao();
		anotacao.setId_anotacao(1L);
		anotacao.setAnotacao_titulo("Anotacao documentacao");
		anotacao.setAnotacao_descricao("Descricao da anotacao");
		anotacao.setData_criacao(novaDataFormatada);
		anotacao.setFk_usuario(id_usuario);
		listaDeAnotacoes.add(anotacao);
		
		return new ResponseEntity<>(new PageImpl<>(listaDeAnotacoes, pageable, 1), HttpStatus.OK);
    }
	
	/**
	 * Deleta anotacao.
	 *
	 * @param nota_id the nota id
	 * @return the response entity
	 */
	@DeleteMapping("/DeletaAnotacao/{nota_id}")
	@Operation(summary = "Deleta uma anotacao atraves do id.", method = "DELETE")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Anotacao deletada com sucesso", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 200, \"status\": OK}"))),
			@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 500, \"status\": INTERNAL_SERVER_ERROR}")))})
    public ResponseEntity<HttpStatus> deletaAnotacao(@PathVariable Long nota_id) {
		return new ResponseEntity<>(HttpStatus.OK);
    }
	
	/**
	 * Nova anotacao.
	 *
	 * @param anotacao the anotacao
	 * @return the response entity
	 */
	@PostMapping("/NovaAnotacao")
	@Operation(summary = "Cria uma nova anotacao.", method = "POST")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "201", description = "Anotacao criada com sucesso", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 201, \"status\": CREATED}"))),
			@ApiResponse(responseCode = "400", description = "Dados enviados estão vazios", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 400, \"status\": BAD_REQUEST}"))),
			@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 500, \"status\": INTERNAL_SERVER_ERROR}")))})
    public ResponseEntity<Anotacao> novaAnotacao(@RequestBody Anotacao anotacao) {
		return new ResponseEntity<>(anotacao, HttpStatus.CREATED);
    }
	
	/**
	 * Atualiza anotacao.
	 *
	 * @param anotacao the anotacao
	 * @return the response entity
	 */
	@PutMapping("/AtualizaAnotacao")
	@Operation(summary = "Atualiza uma anotacao.", method = "PUT")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Anotacao atualizada com sucesso", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 200, \"status\": OK}"))),
			@ApiResponse(responseCode = "400", description = "Dados enviados estão vazios", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 400, \"status\": BAD_REQUEST}"))),
			@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 500, \"status\": INTERNAL_SERVER_ERROR}")))})
    public ResponseEntity<HttpStatus> atualizaAnotacao(@RequestBody Anotacao anotacao) {
		return new ResponseEntity<>(HttpStatus.OK);
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
	@Operation(summary = "Pega uma lista com as anotacoes não associadas a pesquisa.", method = "PUT")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Lista de anotacoes enviado com sucesso", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 200, \"status\": OK}"))),
			@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 500, \"status\": INTERNAL_SERVER_ERROR}")))})
	public ResponseEntity<List<Anotacao>> anotacoesNaoAssociadasPesquisa(@PathVariable("id_pesquisa") Long id_pesquisa,@PathVariable("id_usuario") Long id_usuario){
		Date data = new Date();
		SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
		String novaDataFormatada = dateFormat.format(data);
		
		List<Anotacao> listaDeAnotacoes = new ArrayList<>();
		Anotacao anotacao = new Anotacao();
		anotacao.setId_anotacao(1L);
		anotacao.setAnotacao_titulo("Anotacao documentacao");
		anotacao.setAnotacao_descricao("Descricao da anotacao");
		anotacao.setData_criacao(novaDataFormatada);
		anotacao.setFk_usuario(id_usuario);
		listaDeAnotacoes.add(anotacao);
		return new ResponseEntity<>(listaDeAnotacoes, HttpStatus.OK);
	}
	
	/**
	 * Associar anotacoes pesquisa.
	 *
	 * @param id_pesquisa the id pesquisa
	 * @param listaNotas the lista notas
	 * @return the response entity
	 */
	@PostMapping("/Pesquisa/AssociarAnotacoes/{id_pesquisa}")
	@Operation(summary = "Associa as anotacoes a pesquisa.", method = "POST")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Anotacoes associados com sucesso", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 200, \"status\": OK}"))),
			@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 500, \"status\": INTERNAL_SERVER_ERROR}")))})
	public ResponseEntity<List<Anotacao>> associarAnotacoesPesquisa(@PathVariable("id_pesquisa") Long id_pesquisa,@RequestBody List<Long> listaNotas){
		Date data = new Date();
		SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
		String novaDataFormatada = dateFormat.format(data);
		
		List<Anotacao> listaDeAnotacoes = new ArrayList<>();
		for (Long id : listaNotas) {			
			Anotacao anotacao = new Anotacao();
			anotacao.setId_anotacao(id);
			anotacao.setAnotacao_titulo("Anotacao documentacao");
			anotacao.setAnotacao_descricao("Descricao da anotacao");
			anotacao.setData_criacao(novaDataFormatada);
			anotacao.setFk_usuario(1l);
			listaDeAnotacoes.add(anotacao);
		}
		
		return new ResponseEntity<>(listaDeAnotacoes, HttpStatus.OK);
	}
	
	/**
	 * Desassociar anotacoes pesquisa.
	 *
	 * @param id_pesquisa the id pesquisa
	 * @param id_nota the id nota
	 * @return the response entity
	 */
	@DeleteMapping("/Pesquisa/DesassociarAnotacoes/{id_pesquisa}/{id_nota}")
	@Operation(summary = "Desassocia as anotacoes da pesquisa.", method = "POST")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Anotacoes desassociadas com sucesso", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 200, \"status\": OK}"))),
			@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 500, \"status\": INTERNAL_SERVER_ERROR}")))})
	public ResponseEntity<HttpStatus> desassociarAnotacoesPesquisa(@PathVariable("id_pesquisa") Long id_pesquisa,@PathVariable("id_nota") Long id_nota){
		return new ResponseEntity<>(HttpStatus.OK);
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
	@Operation(summary = "Pega uma lista com as anotacoes não associadas ao projeto.", method = "PUT")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Lista de anotacoes enviado com sucesso", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 200, \"status\": OK}"))),
			@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 500, \"status\": INTERNAL_SERVER_ERROR}")))})
	public ResponseEntity<List<Anotacao>> anotacoesNaoAssociadasProjeto(@PathVariable("id_projeto") Long id_projeto,@PathVariable("id_usuario") Long id_usuario){
		Date data = new Date();
		SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
		String novaDataFormatada = dateFormat.format(data);
		
		List<Anotacao> listaDeAnotacoes = new ArrayList<>();
		Anotacao anotacao = new Anotacao();
		anotacao.setId_anotacao(1L);
		anotacao.setAnotacao_titulo("Anotacao documentacao");
		anotacao.setAnotacao_descricao("Descricao da anotacao");
		anotacao.setData_criacao(novaDataFormatada);
		anotacao.setFk_usuario(id_usuario);
		listaDeAnotacoes.add(anotacao);
		return new ResponseEntity<>(listaDeAnotacoes, HttpStatus.OK);
	}
	
	/**
	 * Associar anotacoes projeto.
	 *
	 * @param id_projeto the id projeto
	 * @param listaNotas the lista notas
	 * @return the response entity
	 */
	@PostMapping("/Projeto/AssociarAnotacoes/{id_projeto}")
	@Operation(summary = "Associa as anotacoes ao projeto.", method = "POST")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Anotacoes associados com sucesso", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 200, \"status\": OK}"))),
			@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 500, \"status\": INTERNAL_SERVER_ERROR}")))})
	public ResponseEntity<List<Anotacao>> associarAnotacoesProjeto(@PathVariable("id_projeto") Long id_projeto,@RequestBody List<Long> listaNotas){
		Date data = new Date();
		SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
		String novaDataFormatada = dateFormat.format(data);
		
		List<Anotacao> listaDeAnotacoes = new ArrayList<>();
		for (Long id : listaNotas) {			
			Anotacao anotacao = new Anotacao();
			anotacao.setId_anotacao(id);
			anotacao.setAnotacao_titulo("Anotacao documentacao");
			anotacao.setAnotacao_descricao("Descricao da anotacao");
			anotacao.setData_criacao(novaDataFormatada);
			anotacao.setFk_usuario(1l);
			listaDeAnotacoes.add(anotacao);
		}
		
		return new ResponseEntity<>(listaDeAnotacoes, HttpStatus.OK);
	}
	
	/**
	 * Desassociar anotacoes projeto.
	 *
	 * @param id_projeto the id projeto
	 * @param id_nota the id nota
	 * @return the response entity
	 */
	@DeleteMapping("/Projeto/DesassociarAnotacoes/{id_projeto}/{id_nota}")
	@Operation(summary = "Desassocia as anotacoes do projeto.", method = "POST")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "Anotacoes desassociadas com sucesso", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 200, \"status\": OK}"))),
			@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(mediaType = "application/json", examples = @ExampleObject(value = "{\"code\": 500, \"status\": INTERNAL_SERVER_ERROR}")))})
	public ResponseEntity<HttpStatus> desassociarAnotacoesProjeto(@PathVariable("id_projeto") Long id_projeto,@PathVariable("id_nota") Long id_nota){
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
}
