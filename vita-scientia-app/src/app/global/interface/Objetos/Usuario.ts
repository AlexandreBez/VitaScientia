/**
 * Resposta contendo os dados do usuario
 * @date 26/12/2023 - 18:21:37
 * @author Lucas Alexandre
 * @export
 * @interface Usuario
 * @typedef {Usuario}
 */
export interface Usuario {
  /**
   * id do usuario
   * @date 26/12/2023 - 18:21:37
   * @type {?number}
   */
  id_usuario?: number;
  /**
   * email do usuario
   * @date 26/12/2023 - 18:21:37
   * @type {?string}
   */
  email?: string;
  /**
   * senha do usuario
   * @date 26/12/2023 - 18:21:37
   * @type {?string}
   */
  senha?: string;
  /**
   * token de para resetar senha
   * @date 26/12/2023 - 18:21:37
   * @type {?string}
   */
  token?: string;
  /**
   * expiracao do token
   * @date 26/12/2023 - 18:21:37
   * @type {?string}
   */
  expiracao_token?: string;
}
