package com.vitascientia.exeptions;

/**
 * Classe EntityNotFoundException para auxiliar na repostas de erro de requests utilizando 
 * da extensao RuntimeException
 * @author Lucas Alexandre
 * @since 1.0.0
 */
@SuppressWarnings("serial")
public class EntityNotFoundException extends RuntimeException {

	/**
	 * Caso no meio de uma busca do usuario aconteca o erro Usuario inexistente
	 * essa funcao e responsavel por retornar o status e a mensagem de erro
	 * @param entity
	 */
	public EntityNotFoundException(Class<?> entity) {
		super("The "+entity.getSimpleName().toLowerCase()+" doesn't exist...");
	}
}
