import { Anotacao } from '../Objetos/Anotacao';
/**
 * Resposta contendo os dados da paginacao contendo uma lista de Anotacoes
 * @date 26/12/2023 - 18:24:28
 * @author Lucas Alexandre
 * @export
 * @interface PaginaAnotacao
 * @typedef {PaginaAnotacao}
 */
export interface PaginaAnotacao {
  /**
   * lista de anotacoes
   * @date 26/12/2023 - 18:24:27
   * @type {[Anotacao]}
   */
  content: [Anotacao];
  /**
   * @date 26/12/2023 - 18:24:27
   * @type {{
   *     sort: {
   *       empty: boolean;
   *       sorted: boolean;
   *       unsorted: boolean;
   *     };
   *     offset: number;
   *     pageNumber: number;
   *     pageSize: number;
   *     paged: boolean;
   *     unpaged: boolean;
   *   }}
   */
  pageable: {
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
  };
  /**
   * @date 26/12/2023 - 18:24:27
   * @type {boolean}
   */
  last: boolean;
  /**
   * @date 26/12/2023 - 18:24:27
   * @type {number}
   */
  totalElements: number;
  /**
   * @date 26/12/2023 - 18:24:27
   * @type {number}
   */
  totalPages: number;
  /**
   * @date 26/12/2023 - 18:24:27
   * @type {number}
   */
  size: number;
  /**
   * @date 26/12/2023 - 18:24:27
   * @type {number}
   */
  number: number;
  /**
   * @date 26/12/2023 - 18:24:27
   * @type {{
   *     empty: boolean;
   *     sorted: boolean;
   *     unsorted: boolean;
   *   }}
   */
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  /**
   * @date 26/12/2023 - 18:24:27
   * @type {boolean}
   */
  first: boolean;
  /**
   * @date 26/12/2023 - 18:24:27
   * @type {number}
   */
  numberOfElements: number;
  /**
   * @date 26/12/2023 - 18:24:27
   * @type {boolean}
   */
  empty: boolean;
}