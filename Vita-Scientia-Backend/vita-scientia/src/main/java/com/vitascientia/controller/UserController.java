package com.vitascientia.controller;

import java.util.Optional;

import jakarta.validation.Valid;

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

import com.vitascientia.model.Users;
import com.vitascientia.service.UserService;
import com.vitascientia.service.objects.UpdatePasswordObj;

/**
 * Classe UserController para criar e controlar as rotas e os tipos de req/res
 * @author Lucas Alexandre
 * @since 1.0.0
 */
@RestController
@RequestMapping("/user")
public class UserController {
	
	/** Injeta a class userService*/
	@Autowired
	UserService userService;
	
    @Autowired
    private Environment environment;

	
	/** 
	 * Verifica se o profile de test esta ativo
	 * @return true se test profile estiver ativo
	 */
    private boolean isTestProfileActive() {
        String[] activeProfiles = environment.getActiveProfiles();
        for (String profile : activeProfiles) {
            if ("test".equals(profile)) {
                return true;
            }
        }
        return false;
    }
	
	/**
	 * Controle da rota findById
	 * @param id
	 * @return Response do status da operacao
	 */
	@GetMapping("/{id}")
	public ResponseEntity<Optional<Users>> findById(@PathVariable int id){
		return userService.getUser(id);
	}
	
	/**
	 * Controle da rota saveUser
	 * @param user
	 * @return Response do status da operacao
	 */
	@PostMapping("/register")
	public ResponseEntity<HttpStatus> saveUser(@Valid @RequestBody Users user){
		return userService.saveUser(user);
	}
	
	/**
	 * Controle da rota sendRecoverEmail
	 * @param username
	 * @return Response do status da operacao
	 */
	@GetMapping("/SendRecoverEmail/{email}")
	public ResponseEntity<HttpStatus> sendRecoverEmail(@Valid @PathVariable String email) {
		if (isTestProfileActive()) {
			return userService.sendRecoverEmailTest(email);
		}else {			
			return userService.sendRecoverEmail(email);
		}
	}
	
	/**
	 * Controle da rota validateToken
	 * @param token
	 * @return Response do status da operacao
	 */
	@GetMapping("/validatedToken/{token}")
    public ResponseEntity<HttpStatus> validateToken(@PathVariable String token) {
		return userService.validateToken(token);
    }
	
	/**
	 * Controle da rota updatePassword
	 * @param updatePasswordObj
	 * @return Response do status da operacao
	 */
	@PostMapping("/validatedToken/updatePassword")
    public ResponseEntity<HttpStatus> updatePassword(@RequestBody UpdatePasswordObj updatePasswordObj) {
		return userService.updatePassword(updatePasswordObj);
    }
}
