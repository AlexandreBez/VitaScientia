package com.vitascientia;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

/**
 * Classe main para inicialização do servidor
 * @author Lucas Alexandre
 * @since 1.0.0
 */
@SpringBootApplication
public class VitaScientiaApplication {

	/**
	 * Metodo principal main de inicializacao
	 * @param args the arguments
	 */
	public static void main(String[] args) {
		SpringApplication.run(VitaScientiaApplication.class, args);
	}
	
	/**
	 * Bcrypt password encoder injetado para encriptar senhas
	 * @return b crypt password encoder
	 */
	@Bean
	public BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}

}
