package com.vitascientia.OpenApi;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vitascientia.model.Usuarios;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;

@Tag(name = "Usuario")
@RestController
@RequestMapping("Documentacao/Usuario")
public class UsuarioDocumentacao {

	/**
	 * Cria novo usuario.
	 *
	 * @param usuarios the usuarios
	 * @return the response entity
	 */
	@PostMapping("/Registrar")
	@Operation(summary = "Cria um novo usuario", method = "POST")
	@ApiResponses(value = {
					@ApiResponse(responseCode = "201", description = "Usuário registrado com sucesso", content = @Content(
									mediaType = "application/json", 
									examples = @ExampleObject(value = "{\"code\": 201, \"status\": CREATED}"))),
					@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(
									mediaType = "application/json", 
									examples = @ExampleObject(
											value = "{\"code\": 500, \"status\": INTERNAL_SERVER_ERROR}"))) }) 
	public ResponseEntity<HttpStatus> criaNovoUsuario(@RequestBody Usuarios usuarios) {
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	/**
	 * Envia email de recuperacao de senha.
	 *
	 * @param email the email
	 * @return the response entity
	 */
	@Operation(summary = "Envia email de recuperacao de senha.", method = "GET")
	@ApiResponses(value = {
					@ApiResponse(responseCode = "200", description = "Email enviado com sucesso", content = @Content(
									mediaType = "application/json", 
									examples = @ExampleObject(value = "{\"code\": 200, \"status\": OK}"))),
					@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(
									mediaType = "application/json", 
									examples = @ExampleObject(
											value = "{\"code\": 500, \"status\": INTERNAL_SERVER_ERROR}"))) })
	@GetMapping("/EmailRecuperacao/{email}")
	public ResponseEntity<HttpStatus> enviaEmailDeRecuperacaoDeSenha(@PathVariable String email) {
		return new ResponseEntity<>(HttpStatus.OK);
	}

	/**
	 * Valida token de recuperacao de senha.
	 *
	 * @param token the token
	 * @return the response entity
	 */
	@Operation(summary = "Valida token de recuperacao de senha.", method = "GET")
	@ApiResponses(value = {
					@ApiResponse(responseCode = "400", description = "Request enviada sem dados", content = @Content(
									mediaType = "application/json", 
									examples = @ExampleObject(value = "{\"code\": 400, \"status\": BAD_REQUEST}"))),
					@ApiResponse(responseCode = "410", description = "Token expirado", content = @Content(
							mediaType = "application/json", 
							examples = @ExampleObject(value = "{\"code\": 410, \"status\": GONE}"))),
					@ApiResponse(responseCode = "200", description = "Token valido", content = @Content(
							mediaType = "application/json", 
							examples = @ExampleObject(value = "{\"code\": 200, \"status\": OK}"))),
					@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(
									mediaType = "application/json", 
									examples = @ExampleObject(
											value = "{\"code\": 500, \"status\": INTERNAL_SERVER_ERROR}"))) })
	@GetMapping("/ValidaToken/{token}")
	public ResponseEntity<HttpStatus> validaTokenDeRecuperacaoDeSenha(@PathVariable String token) {
		return new ResponseEntity<>(HttpStatus.OK);
	}

	/**
	 * Atualiza senha do usuario.
	 *
	 * @param usuarios the usuarios
	 * @return the response entity
	 */
	@Operation(summary = "Atualiza a senha do usuario.", method = "POST")
	@ApiResponses(value = {
					@ApiResponse(responseCode = "400", description = "Request enviada sem dados", content = @Content(
									mediaType = "application/json", 
									examples = @ExampleObject(value = "{\"code\": 400, \"status\": BAD_REQUEST}"))),
					@ApiResponse(responseCode = "404", description = "Usuario não encontrado/token inválido", content = @Content(
							mediaType = "application/json", 
							examples = @ExampleObject(value = "{\"code\": 404, \"status\": NOT_FOUND}"))),
					@ApiResponse(responseCode = "200", description = "Senha alterada com sucesso", content = @Content(
							mediaType = "application/json", 
							examples = @ExampleObject(value = "{\"code\": 200, \"status\": OK}"))),
					@ApiResponse(responseCode = "500", description = "Erro interno do servidor", content = @Content(
									mediaType = "application/json", 
									examples = @ExampleObject(
											value = "{\"code\": 500, \"status\": INTERNAL_SERVER_ERROR}"))) })
	@PostMapping("/ResetaSenha")
	public ResponseEntity<HttpStatus> atualizaSenhaDoUsuario(@RequestBody Usuarios usuarios) {
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
