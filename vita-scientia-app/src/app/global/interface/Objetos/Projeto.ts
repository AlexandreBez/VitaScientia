import { Anotacao } from "./Anotacao";
import { Pesquisa } from "./Pesquisa";
/**
 * Resposta contendo os dados do projeto
 * @date 26/12/2023 - 18:10:14
 * @author Lucas Alexandre
 * @export
 * @interface Projeto
 * @typedef {Projeto}
 */
export interface Projeto {
  /**
   * id do projeto
   * @date 26/12/2023 - 18:10:14
   * @type {?number}
   */
  id_projeto?: number;
  /**
   * titulo do projeto
   * @date 26/12/2023 - 18:10:14
   * @type {?string}
   */
  projeto_titulo?: string;
  /**
   * descricao do projeto
   * @date 26/12/2023 - 18:10:14
   * @type {?string}
   */
  projeto_descricao?: string;
  /**
   * status do projeto
   * @date 26/12/2023 - 18:10:14
   * @type {?string}
   */
  status?: string;
  /**
   * data de cricao
   * @date 26/12/2023 - 18:10:14
   * @type {?string}
   */
  data_criacao?: string;
  /**
   * id do usuario
   * @date 26/12/2023 - 18:10:14
   * @type {?number}
   */
  fk_usuario?: number;
  /**
   * lista contendo as pesquisas
   * @date 26/12/2023 - 18:10:14
   * @type {?[Pesquisa]}
   */
  pesquisa?: [Pesquisa];
  /**
   * lista contendo as anotacoes
   * @date 26/12/2023 - 18:10:14
   * @type {?[Anotacao]}
   */
  anotacao?: [Anotacao];
}
