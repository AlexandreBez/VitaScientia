import { Pesquisa } from '../Objetos/Pesquisa';
/**
 * Resposta contendo os dados da paginacao contendo uma lista de pesquisa
 * @date 26/12/2023 - 18:27:41
 * @author Lucas Alexandre
 * @export
 * @interface PaginaPesquisas
 * @typedef {PaginaPesquisas}
 */
export interface PaginaPesquisas {
  /**
   * Lista de pesquisas
   * @date 26/12/2023 - 18:27:41
   * @type {[Pesquisa]}
   */
  content: [Pesquisa];
  /**
   * @date 26/12/2023 - 18:27:41
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
   * @date 26/12/2023 - 18:27:41
   * @type {boolean}
   */
  last: boolean;
  /**
   * @date 26/12/2023 - 18:27:41
   * @type {number}
   */
  totalElements: number;
  /**
   * @date 26/12/2023 - 18:27:41
   * @type {number}
   */
  totalPages: number;
  /**
   * @date 26/12/2023 - 18:27:41
   * @type {number}
   */
  size: number;
  /**
   * @date 26/12/2023 - 18:27:41
   * @type {number}
   */
  number: number;
  /**
   * @date 26/12/2023 - 18:27:41
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
   * @date 26/12/2023 - 18:27:41
   * @type {boolean}
   */
  first: boolean;
  /**
   * @date 26/12/2023 - 18:27:41
   * @type {number}
   */
  numberOfElements: number;
  /**
   * @date 26/12/2023 - 18:27:41
   * @type {boolean}
   */
  empty: boolean;
}
