/**
 * Request contendo os dados da autenticacao
 * @date 26/12/2023 - 17:52:54
 * @author Lucas Alexandre
 * @export
 * @interface AuthRequest
 * @typedef {AuthRequest}
 */
export interface AuthRequest {
  /**
   * email do usuario
   * @date 26/12/2023 - 17:52:54
   * @type {string}
   */
  email?: string;
  /**
   * senha do usuario
   * @date 26/12/2023 - 17:52:54
   * @type {string}
   */
  senha?: string;
}
