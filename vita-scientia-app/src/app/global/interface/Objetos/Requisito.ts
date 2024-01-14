import { Pesquisa } from "./Pesquisa";

/**
 * Resposta contendo os dados do requisito
 * @date 26/12/2023 - 18:15:53
 * @author Lucas Alexandre
 * @export
 * @interface Requisito
 * @typedef {Requisito}
 */
export interface Requisito {
  /**
   * id do requisito
   * @date 26/12/2023 - 18:15:53
   * @type {?number}
   */
  id_requisito?: number;
  /**
   * nome do requisito
   * @date 26/12/2023 - 18:15:53
   * @type {?string}
   */
  item?: string;
  /**
   * valor do requisito
   * @date 26/12/2023 - 18:15:53
   * @type {?number}
   */
  preco?: number;
  /**
   * data de criacao
   * @date 26/12/2023 - 18:15:53
   * @type {?number}
   */
  data_criacao?: string;
  /**
   * pesquisa associada
   * @date 26/12/2023 - 18:15:53
   * @type {?number}
   */
  fk_pesquisa?: number;
}
