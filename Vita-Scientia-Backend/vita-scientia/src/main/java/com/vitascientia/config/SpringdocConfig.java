package com.vitascientia.config;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.tags.Tag;

// TODO: Auto-generated Javadoc
/**
 * The Class SpringdocConfig.
 */
@OpenAPIDefinition
@Configuration
public class SpringdocConfig {

	/**
	 * Open API.
	 *
	 * @return the open API
	 */
	@Bean
	public OpenAPI openAPI() {
		return new OpenAPI()
				.info(
					new Info()
						.title("Vita Scientia")
						.license(new License().name("MIT").url("https://opensource.org/license/mit/"))
						.termsOfService("https://opensource.org/license/mit/")
						.description("Este projeto é para fins de laboratório e pesquisa, usando Arduino/RaspiberryPI para obter reações e resultados químicos/físicos atravez dos sensores. Ajudando também a organizar as ideias/projetos/pesquisas atraves de simulaçoes, calculos, e valores a serem gastos.")
						.version("2.0.0")
						.contact(new Contact()
								.url("https://www.linkedin.com/in/lucasalexandrebezpiancoski/")
								.email("lucasbez14@outlook.com")
								.name("Lucas Alexandre Bez Piancoski")
						)
				)
				.tags(
						Arrays.asList(
								new Tag().name("Usuario").description("APIs de chamada referente a açoes destinadas ao usuario"),
								new Tag().name("Anotação").description("APIs de chamada referente a açoes destinadas as anotações"),
								new Tag().name("Pesquisa").description("APIs de chamada referente a açoes destinadas as pesquisas"),
								new Tag().name("Projeto").description("APIs de chamada referente a açoes destinadas aos projetos")
						)
				);
	}
}