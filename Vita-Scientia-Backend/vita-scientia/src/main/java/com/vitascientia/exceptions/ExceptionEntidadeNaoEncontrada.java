package com.vitascientia.exceptions;

// TODO: Auto-generated Javadoc
/**
 * The Class ExceptionEntidadeNaoEncontrada.
 */
@SuppressWarnings("serial")
public class ExceptionEntidadeNaoEncontrada extends RuntimeException {

	/**
	 * Instantiates a new exception entidade nao encontrada.
	 *
	 * @param entity the entity
	 */
	public ExceptionEntidadeNaoEncontrada(Class<?> entity) {
		super("A "+entity.getSimpleName().toLowerCase()+" não existe...");
	}
}
