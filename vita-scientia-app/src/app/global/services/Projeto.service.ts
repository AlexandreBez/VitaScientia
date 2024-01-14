import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaginaProjeto } from '../interface/Paginas/PaginaProjeto';
import { Projeto } from '../interface/Objetos/Projeto';
import { AuthResponse } from '../interface/Objetos/Auth/AuthResponse';
/**
 * Componente possuindo as funções para o requisicoes de acoes dos projetos no backend
 * @author Lucas Alexandre
 * @date 29/12/2023 - 23:31:15
 * @version 2.0.0
 * @export
 * @class AnotacaoService
 * @typedef {AnotacaoService}
 * ----------------------------------------
 * Ultima atualizacao:
 * @date 29/12/2023 - 23:31:15
 * @author Lucas Alexandre
 */
@Injectable({
  providedIn: 'root',
})
export class ProjetoService {
  /**
   * Url do backend
   * @date 29/12/2023 - 23:31:15
   * @private
   * @type {string}
   */
  private url = 'http://localhost:8080/Projeto';

  /**
   * variavel contendo dados da eutenticacao para requisicao
   * @date 29/12/2023 - 23:31:15
   * @type {*}
   */
  dadosAuth: AuthResponse = JSON.parse(sessionStorage.getItem('AUTH'));

  /**
   * funcao para pegar os dados do token para autorizar as requisicoes
   * @date 29/12/2023 - 23:31:15
   * @returns {*}
   */
  globalHeader(){
    return new HttpHeaders({
      Authorization: `Bearer ${this.dadosAuth.jwt}`
    });
  }

  /**
   * Cria uma instancia do UsuarioService.
   * @date 29/12/2023 - 23:31:15
   * @constructor
   * @param {HttpClient} http
   */
  constructor(private http: HttpClient) {}

  /**
   * Request para pegar a lista de projetos
   * @date 29/12/2023 - 23:31:15
   * @param {number} pagina
   * @returns {*}
   */
  listaDeProjetos(pagina: number) {
    return this.http.get<PaginaProjeto>(
      this.url + `/ListaDeProjeto/${this.dadosAuth.id_usuario}?page=${pagina}`,
      {
        headers: this.globalHeader()
      }
    );
  }

  /**
   * Request para pegar a lista de projetos pelo titulo
   * @date 29/12/2023 - 23:31:15
   * @param {string} titulo
   * @param {number} pagina
   * @returns {*}
   */
  procuraPeloTitulo(titulo: string, pagina:number) {
    return this.http.get<PaginaProjeto>(
      this.url+`/ProcuraPeloTitulo/${this.dadosAuth.id_usuario}/${titulo}?page=${pagina}`,
      {
        headers: this.globalHeader(),
      }
    );
  }

  /**
   * Request para pegar a lista de projetos pelo id_usuario
   * @date 29/12/2023 - 23:31:15
   * @param {number} id_nota
   * @param {number} pagina
   * @returns {*}
   */
  procuraPeloId(id_nota: number, pagina:number) {
    return this.http.get<PaginaProjeto>(
      this.url+`/ProcuraPeloId/${this.dadosAuth.id_usuario}/${id_nota}?page=${pagina}`,
      {
        headers: this.globalHeader(),
      }
    );
  }

  /**
   * Request para criar um projeto
   * @date 29/12/2023 - 23:31:15
   * @param {Projeto} projeto
   * @returns {*}
   */
  novoProjeto(projeto: Projeto) {
    projeto.fk_usuario = this.dadosAuth.id_usuario;
    return this.http.post<Projeto>(this.url + `/NovoProjeto`,
    projeto,
    {
      headers: this.globalHeader(),
    });
  }

  /**
   * Request para atualizar um projeto
   * @date 29/12/2023 - 23:31:15
   * @param {Projeto} projeto
   * @returns {*}
   */
  editaProjeto(projeto: Projeto) {
    return this.http.put(this.url + `/EditaProjeto`,
    projeto,
    {
      headers: this.globalHeader(),
    });
  }

  /**
   * Request para deletar um projeto
   * @date 29/12/2023 - 23:31:15
   * @param {number} id_usuario
   * @returns {*}
   */
  deletaProjeto(id_projeto: number) {
    return this.http.delete(this.url+`/DeletaProjeto/${id_projeto}`,
    {
      headers: this.globalHeader(),
    });
  }

  /**
   * Request para pegar a lista de projetos não associados a uma pesquisa
   * @date 29/12/2023 - 23:31:15
   * @param {number} pagina
   * @returns {*}
   */
    projetosNaoAssociados(id_pesquisa: number) {
      return this.http.get<Projeto[]>(
        this.url+`/ProjetosNaoAssociados/${id_pesquisa}/${this.dadosAuth.id_usuario}`,
        {
          headers: this.globalHeader()
        }
      );
    }
  
    /**
     * Request para associar projetos a uma pesquisa
     * @date 29/12/2023 - 23:31:15
     * @param {number} id_pesquisa
     * @param {number[]} listaDeProjetos
     * @returns {*}
     */
    associarProjeto(id_pesquisa: number, listaDeProjetos: number[]) {
      return this.http.post<[Projeto]>(
        this.url + `/AssociarProjeto/${id_pesquisa}`,
        listaDeProjetos,
        {
          headers: this.globalHeader()
        }
      );
    }
  
    /**
     * Request para desassociar projetos a uma pesquisa
     * @date 29/12/2023 - 23:31:15
     * @param {number} id_pesquisa
     * @param {number} id_projeto
     * @returns {*}
     */
    desassociarProjeto(id_pesquisa: number, id_projeto: number) {
      return this.http.delete(
        this.url + `/DesassociarProjeto/${id_pesquisa}/${id_projeto}`,
        {
          headers: this.globalHeader()
        }
      );
    }
  
}
