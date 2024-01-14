import { Anotacao } from './Anotacao';
import { Projeto } from './Projeto';
import { Requisito } from './Requisito';
/**
 * Resposta contendo os dados da pesquisa
 * @date 26/12/2023 - 18:04:13
 * @author Lucas Alexandre
 * @export
 * @interface Pesquisa
 * @typedef {Pesquisa}
 */
export interface Pesquisa {
  /**
   * id da pesquisa
   * @date 26/12/2023 - 18:04:13
   * @type {?number}
   */
  id_pesquisa?: number;
  /**
   * titulo da pesquisa
   * @date 26/12/2023 - 18:04:13
   * @type {?string}
   */
  pesquisa_titulo?: string;
  /**
   * descricao da pesquisa
   * @date 26/12/2023 - 18:04:13
   *
   * @type {?string}
   */
  pesquisa_descricao?: string;
  /**
   * status da pesquisa
   * @date 26/12/2023 - 18:04:13
   * @type {?string}
   */
  status?: string;
  /**
   * data de criacao
   * @date 26/12/2023 - 18:04:13
   * @type {?string}
   */
  data_criacao?: string;
  /**
   * id do usuario
   * @date 26/12/2023 - 18:04:13
   * @type {?number}
   */
  fk_usuario?: number;
  /**
   * lista contendo os requisitos
   * @date 26/12/2023 - 18:04:13
   * @type {?[Requisito]}
   */
  requisito?: [Requisito];
  /**
   * lista contendo os projetos
   * @date 26/12/2023 - 18:04:13
   * @type {?[Projeto]}
   */
  projeto?: [Projeto];
  /**
   * lista contendo as anotacoes
   * @date 26/12/2023 - 18:04:13
   * @type {?[Anotacao]}
   */
  anotacao?: [Anotacao];
}
