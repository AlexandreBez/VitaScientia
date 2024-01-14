/**
 * Resposta contendo os dados da autenticacao
 * @date 26/12/2023 - 17:52:54
 * @author Lucas Alexandre
 * @export
 * @interface AuthResponse
 * @typedef {AuthResponse}
 */
export interface AuthResponse {
  /**
   * Id do usuario
   * @date 26/12/2023 - 17:52:54
   * @type {number}
   */
  id_usuario?: number;
  /**
   * email do usuario
   * @date 26/12/2023 - 17:52:54
   * @type {string}
   */
  email?: string;
  /**
   * jwt token para autorizar requests
   * @date 26/12/2023 - 17:52:54
   * @type {string}
   */
  jwt?: string;
  /**
   * Data de expiracao do token
   * @date 26/12/2023 - 17:52:54
   * @type {string}
   */
  expiracao?: string;
}
