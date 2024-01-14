import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaginaPesquisas } from 'src/app/global/interface/Paginas/PaginaPesquisas';
import { Pesquisa } from '../interface/Objetos/Pesquisa';
import { Requisito } from '../interface/Objetos/Requisito';
import { AuthResponse } from '../interface/Objetos/Auth/AuthResponse';
/**
 * Componente possuindo as funções para o requisicoes de acoes das pesquisas no backend
 * @author Lucas Alexandre
 * @date 29/12/2023 - 22:44:27
 * @version 2.0.0
 * @export
 * @class PesquisaService
 * @typedef {PesquisaService}
 * ----------------------------------------
 * Ultima atualizacao:
 * @date 29/12/2023 - 22:44:27
 * @author Lucas Alexandre
 */
@Injectable({
  providedIn: 'root'
})
export class PesquisaService {

  /**
   * Url do backend
   * @date 29/12/2023 - 22:44:27
   * @private
   * @type {string}
   */
  private url = 'http://localhost:8080/Pesquisa';

  /**
   * variavel contendo dados da eutenticacao para requisicao
   * @date 29/12/2023 - 22:44:27
   * @type {*}
   */
  dadosAuth: AuthResponse = JSON.parse(sessionStorage.getItem('AUTH'));

  /**
   * funcao para pegar os dados do token para autorizar as requisicoes
   * @date 29/12/2023 - 22:44:27
   * @param {string} token
   * @param {string} email
   * @returns {*}
   */
  globalHeaders(){
    return new HttpHeaders({
      Authorization: 'Bearer ' + this.dadosAuth.jwt,
    });
  }

  /**
   * Cria uma instancia do PesquisaService.
   * @date 29/12/2023 - 22:44:27
   * @constructor
   * @param {HttpClient} http
   */
  constructor(private http: HttpClient) {}

  /**
   * Request para pegar a lista de pesquisas
   * @date 29/12/2023 - 22:44:27
   * @param {number} pagina
   * @returns {*}
   */
  listaDePesquisas(pagina: number) {
    return this.http.get<PaginaPesquisas>(
      this.url +`/ListaDePesquisas/${this.dadosAuth.id_usuario}?page=${pagina}`,
      {
        headers: this.globalHeaders(),
      }
    );
  }

  /**
   * Request para pegar a lista de pesquisas pelo titulo
   * @date 29/12/2023 - 22:44:27
   * @param {string} titulo
   * @param {number} pagina
   * @returns {*}
   */
  procuraPeloTitulo(titulo: string, pagina:number) {
    return this.http.get<PaginaPesquisas>(
      this.url+`/ProcuraPeloTitulo/${this.dadosAuth.id_usuario}/${titulo}?page=${pagina}`,
      {
        headers: this.globalHeaders(),
      }
    );
  }

  /**
   * Request para pegar a lista de pesquisas pelo id_usuario
   * @date 29/12/2023 - 22:44:27
   * @param {number} id_anotacao
   * @param {number} pagina
   * @returns {*}
   */
  procuraPeloId(id_pesquisa: number, pagina:number) {
    return this.http.get<PaginaPesquisas>(
      this.url+`/ProcuraPeloId/${this.dadosAuth.id_usuario}/${id_pesquisa}?page=${pagina}`,
      {
        headers: this.globalHeaders(),
      }
    );
  }

  /**
   * Request para atualizar uma pesquisa
   * @date 29/12/2023 - 22:44:27
   * @param {number} id_anotacao
   * @param {number} pagina
   * @returns {*}
   */
  editaPesquisa(pesquisa: Pesquisa){
    return this.http.put(this.url+`/EditaPesquisa`,
    pesquisa,
    {
      headers: this.globalHeaders(),
    });
  }

  /**
   * Request para criar uma pesquisa
   * @date 29/12/2023 - 22:44:27
   * @param {Pesquisa} pesquisa
   * @returns {*}
   */
  novaPesquisa(pesquisa: Pesquisa){
    pesquisa.fk_usuario = this.dadosAuth.id_usuario;
    return this.http.post<Pesquisa>(this.url + `/NovaPesquisa`,
    pesquisa,
    {
      headers: this.globalHeaders(),
    });
  }

  /**
   * Request para deletar uma pesquisa
   * @date 29/12/2023 - 22:44:27
   * @param {number} id_pesquisa
   * @returns {*}
   */
  deletaPesquisa(id_pesquisa: number){
    return this.http.delete(this.url+`/DeletaPesquisa/${id_pesquisa}`,
    {
      headers: this.globalHeaders(),
    });
  }

  //*-------------------------------Requisito-------------------------------------------

  /**
   * Request para criar um requisito
   * @date 29/12/2023 - 22:44:27
   * @param {Requisito} requisito
   * @returns {*}
   */
  novoRequisito(requisito: Requisito) {
    return this.http.post<Requisito>(this.url + `/Requisito/NovoRequisito`, requisito, {
      headers: this.globalHeaders(),
    });
  }

  /**
   * Request para deletar um requisito
   * @date 29/12/2023 - 22:44:27
   * @param {number} id_requisito
   * @returns {*}
   */
  deletaRequisito(id_requisito: number) {
    return this.http.delete(this.url + `/Requisito/DeletaRequisito/${id_requisito}`, 
    {
      headers: this.globalHeaders(),
    });
  }

  /**
   * Request para atualizar um requisito
   * @date 29/12/2023 - 22:44:27
   * @param {Requisito} requisito
   * @returns {*}
   */
  atualizaRequisito(requisito: Requisito) {
    return this.http.put(this.url + '/Requisito/AtualizaRequisito', requisito, {
      headers: this.globalHeaders(),
    });
  }

}
