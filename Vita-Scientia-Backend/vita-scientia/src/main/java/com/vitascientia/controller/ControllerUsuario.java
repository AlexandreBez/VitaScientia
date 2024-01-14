package com.vitascientia.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vitascientia.model.Usuarios;
import com.vitascientia.services.ServiceUsuarios;

import io.swagger.v3.oas.annotations.Hidden;

/**
 * The Class ControllerUsuario.
 */
@RestController
@Hidden
@RequestMapping("/Usuario")
public class ControllerUsuario {

	/** The service usuarios. */
	@Autowired
	private ServiceUsuarios serviceUsuarios;

	/** The environment. */
	@Autowired
	private Environment environment;

	/**
	 * Perfil de test ativo.
	 *
	 * @return true, if successful
	 */
	private boolean perfilDeTestAtivo() {
		String[] perfilsAtivos = environment.getActiveProfiles();
		for (String perfil : perfilsAtivos) {
			if ("teste".equals(perfil)) {
				return true;
			}
		}
		return false;
	}

	/**
	 * Cria novo usuario.
	 *
	 * @param usuarios the usuarios
	 * @return the response entity
	 */
	@PostMapping("/Registrar")
	public ResponseEntity<HttpStatus> criaNovoUsuario(@RequestBody Usuarios usuarios) {
		return serviceUsuarios.criaNovoUsuario(usuarios);
	}

	/**
	 * Envia email de recuperacao de senha.
	 *
	 * @param email the email
	 * @return the response entity
	 */
	@GetMapping("/EmailRecuperacao/{email}")
	public ResponseEntity<HttpStatus> enviaEmailDeRecuperacaoDeSenha(@PathVariable String email) {
		if (perfilDeTestAtivo()) {
			return serviceUsuarios.enviaEmailDeRecuperacaoDeSenhaFuncaoTeste(email);
		} else {
			return serviceUsuarios.enviaEmailDeRecuperacaoDeSenha(email);
		}
	}

	/**
	 * Valida token de recuperacao de senha.
	 *
	 * @param token the token
	 * @return the response entity
	 */
	@GetMapping("/ValidaToken/{token}")
	public ResponseEntity<HttpStatus> validaTokenDeRecuperacaoDeSenha(@PathVariable String token) {
		return serviceUsuarios.validaTokenDeRecuperacaoDeSenha(token);
	}

	/**
	 * Atualiza senha do usuario.
	 *
	 * @param usuarios the usuarios
	 * @return the response entity
	 */
	@PostMapping("/ResetaSenha")
	public ResponseEntity<HttpStatus> atualizaSenhaDoUsuario(@RequestBody Usuarios usuarios) {
		return serviceUsuarios.atualizaSenhaDoUsuario(usuarios);
	}
	
	/**
	 * Pega id do usuario
	 *
	 * @param usuarios the usuarios
	 * @return the response entity
	 */
	@GetMapping("/{email}")
	public ResponseEntity<Long> idUsuario(@PathVariable("email") String email) {
		return serviceUsuarios.idUsuario(email);
	}

}
