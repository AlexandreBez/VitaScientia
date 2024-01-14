/**
 * Resposta contendo os dados da anotacao
 * @date 26/12/2023 - 17:59:16
 * @author Lucas Alexandre
 * @export
 * @interface Anotacao
 * @typedef {Anotacao}
 */
export interface Anotacao {
    /**
     * id da anotacao
     * @date 26/12/2023 - 17:59:16
     * @type {?number}
     */
    id_anotacao?: number,
    /**
     * titulo da anotacao
     * @date 26/12/2023 - 17:59:16
     * @type {?string}
     */
    anotacao_titulo?: string,
    /**
     * descricao da anotacao
     * @date 26/12/2023 - 17:59:16
     * @type {?string}
     */
    anotacao_descricao?: string,
    /**
     * data de criacao
     * @date 26/12/2023 - 17:59:16
     * @type {?string}
     */
    data_criacao?: string,
    /**
     * id do usuario
     * @date 26/12/2023 - 17:59:16
     * @type {?number}
     */
    fk_usuario?: number
}