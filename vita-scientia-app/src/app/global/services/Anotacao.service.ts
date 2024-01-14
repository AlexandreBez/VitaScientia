import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaginaAnotacao } from '../interface/Paginas/PaginaAnotacao';
import { Anotacao } from '../interface/Objetos/Anotacao';
import * as moment from 'moment';
import { AuthResponse } from '../interface/Objetos/Auth/AuthResponse';
/**
 * Componente possuindo as funções para o requisicoes de acoes da anotacoes no backend
 * @author Lucas Alexandre
 * @date 29/12/2023 - 21:21:12
 * @version 2.0.0
 * @export
 * @class AnotacaoService
 * @typedef {AnotacaoService}
 * ----------------------------------------
 * Ultima atualizacao:
 * @date 29/12/2023 - 21:21:12
 * @author Lucas Alexandre
 */
@Injectable({
  providedIn: 'root',
})
export class AnotacaoService {
  /**
   * Url do backend
   * @date 29/12/2023 - 21:21:12
   * @private
   * @type {string}
   */
  private url = 'http://localhost:8080/Anotacao';
  /**
   * variavel contendo dados da eutenticacao para requisicao
   * @date 29/12/2023 - 21:21:12
   * @type {*}
   */
  dadosAuth: AuthResponse = JSON.parse(sessionStorage.getItem('AUTH'));

  /**
   * funcao para pegar os dados do token para autorizar as requisicoes
   * @date 26/12/2023 - 20:06:07
   * @returns {*}
   */
  globalHeader() {
    return new HttpHeaders({
      Authorization: `Bearer ${this.dadosAuth.jwt}`,
    });
  }

  /**
   * Cria uma instancia do UsuarioService.
   * @date 29/12/2023 - 21:21:12
   * @constructor
   * @param {HttpClient} http
   */
  constructor(private http: HttpClient) {}

  /**
   * Request para pegar a lista de anotacoes
   * @date 26/12/2023 - 20:06:07
   * @param {number} pagina
   * @returns {*}
   */
  listaDeAnotacoes(pagina: number) {
    return this.http.get<PaginaAnotacao>(
      this.url + `/ListaDeAnotacoes/${this.dadosAuth.id_usuario}?page=${pagina}`,
      {
        headers: this.globalHeader(),
      }
    );
  }

  /**
   * Request para pegar a lista de anotacoes pelo titulo
   * @date 26/12/2023 - 20:06:07
   * @param {string} titulo
   * @param {number} pagina
   * @returns {*}
   */
  procuraPeloTitulo(titulo: string, pagina: number) {
    return this.http.get<PaginaAnotacao>(
      this.url +
        `/ProcuraPeloTitulo/${this.dadosAuth.id_usuario}/${titulo}?page=${pagina}`,
      {
        headers: this.globalHeader(),
      }
    );
  }

  /**
   * Request para pegar a lista de anotacoes pelo id
   * @date 26/12/2023 - 20:06:07
   * @param {number} anotacao_id
   * @returns {*}
   */
  procuraPeloId(anotacao_id: number) {
    return this.http.get<PaginaAnotacao>(
      this.url + `/ProcuraPeloId/${this.dadosAuth.id_usuario}/${anotacao_id}`,
      {
        headers: this.globalHeader(),
      }
    );
  }

  /**
   * Request para deletar uma anotacao
   * @date 26/12/2023 - 20:06:07
   * @param {number} id_anotacao
   * @returns {*}
   */
  deletaAnotacao(id_anotacao: number) {
    return this.http.delete(this.url + `/DeletaAnotacao/${id_anotacao}`, {
      headers: this.globalHeader(),
    });
  }

  /**
   * Request para criar uma anotacao
   * @date 26/12/2023 - 20:06:07
   * @param {Anotacao} Anotacao
   * @returns {*}
   */
  novaAnotacao(Anotacao: Anotacao) {
    Anotacao.data_criacao = moment().format('DD/MM/YYYY HH:mm:ss');
    Anotacao.fk_usuario = this.dadosAuth.id_usuario;
    return this.http.post<Anotacao>(this.url + '/NovaAnotacao', Anotacao, {
      headers: this.globalHeader(),
    });
  }

  /**
   * Request para atualizar uma anotacao
   * @date 26/12/2023 - 20:06:07
   * @param {Anotacao} anotacao
   * @returns {*}
   */
  atualizaAnotacao(anotacao: Anotacao) {
    return this.http.put(this.url + '/AtualizaAnotacao', anotacao, {
      headers: this.globalHeader(),
    });
  }

  //*-------------------------------Pesquisa-------------------------------------------

  /**
   * Request para pegar uma lista com as anotacoes não associadas a uma pesquisa
   * @date 26/12/2023 - 20:06:07
   * @param {number} id_pesquisa
   * @returns {*}
   */
  anotacoesNaoAssociadasPesquisa(id_pesquisa: number) {
    return this.http.get<[Anotacao]>(
      this.url +
        `/Pesquisa/AnotacoesNaoAssociadas/${id_pesquisa}/${this.dadosAuth.id_usuario}`,
      {
        headers: this.globalHeader(),
      }
    );
  }

  /**
   * Request para associar uma lista de anotacoes a uma pesquisa
   * @date 26/12/2023 - 20:06:07
   * @param {number} id_pesquisa
   * @param {number[]} listaDeNotas
   * @returns {*}
   */
  associarAnotacoesPesquisa(id_pesquisa: number, listaDeNotas: number[]) {
    return this.http.post<[Anotacao]>(
      this.url + `/Pesquisa/AssociarAnotacoes/${id_pesquisa}`,
      listaDeNotas,
      {
        headers: this.globalHeader(),
      }
    );
  }

  /**
   * Request para desassociar uma anotacao de uma pesquisa
   * @date 26/12/2023 - 20:06:07
   * @param {number} id_pesquisa
   * @param {number[]} listaDeNotas
   * @returns {*}
   */
  desassociarAnotacoesPesquisa(id_pesquisa: number, id_nota: number) {
    return this.http.delete(
      this.url + `/Pesquisa/DesassociarAnotacoes/${id_pesquisa}/${id_nota}`,
      {
        headers: this.globalHeader(),
      }
    );
  }

  //*-------------------------------Projeto-------------------------------------------

  /**
   * Request para pegar uma lista com as anotacoes não associadas a um projeto
   * @date 26/12/2023 - 20:06:07
   * @param {number} id_pesquisa
   * @returns {*}
   */
  anotacaoNaoAssociadosProjeto(id_pesquisa: number) {
    return this.http.get<Anotacao[]>(
      this.url +
        `/Projeto/AnotacoesNaoAssociadas/${id_pesquisa}/${this.dadosAuth.id_usuario}`,
      {
        headers: this.globalHeader(),
      }
    );
  }

  /**
   * Request para associar uma lista de anotacoes a um projeto
   * @date 26/12/2023 - 20:06:07
   * @param {number} id_pesquisa
   * @param {number[]} listaDeAnotacoes
   * @returns {*}
   */
  associarAnotacoesProjeto(id_pesquisa: number, listaDeAnotacoes: number[]) {
    return this.http.post<[Anotacao]>(
      this.url + `/Projeto/AssociarAnotacoes/${id_pesquisa}`,
      listaDeAnotacoes,
      {
        headers: this.globalHeader(),
      }
    );
  }

  /**
   * Request para desassociar uma anotacao de um projeto
   * @date 26/12/2023 - 20:06:07
   * @param {number} id_pesquisa
   * @param {number[]} listaDeNotas
   * @returns {*}
   */
  desassociarAnotacoesProjeto(id_pesquisa: number, id_anotacao: number) {
    return this.http.delete(
      this.url + `/Projeto/DesassociarAnotacoes/${id_pesquisa}/${id_anotacao}`,
      {
        headers: this.globalHeader(),
      }
    );
  }

}
