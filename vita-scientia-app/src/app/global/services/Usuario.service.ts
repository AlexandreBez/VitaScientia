import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../interface/Objetos/Usuario';
import { AuthRequest } from '../interface/Objetos/Auth/AuthRequest';
import { AuthResponse } from '../interface/Objetos/Auth/AuthResponse';
/**
 * Componente possuindo as funções para o requisicoes de acoes do usuarios no backend
 * @author Lucas Alexandre
 * @date 26/12/2023 - 20:06:07
 * @version 2.0.0
 * @export
 * @class UsuarioService
 * @typedef {UsuarioService}
 * ----------------------------------------
 * Ultima atualizacao:
 * @date 26/12/2023 - 19:10:28
 * @author Lucas Alexandre
 */
@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  /**
   * Url do backend
   * @date 26/12/2023 - 20:06:07
   * @private
   * @type {string}
   */
  private url = 'http://localhost:8080/Usuario';
  /**
   * variavel contendo dados da eutenticacao para requisicao
   * @date 26/12/2023 - 20:06:07
   * @type {*}
   */
  dadosAuth = JSON.parse(localStorage.getItem('AUTH'));

  /**
   * Cria uma instancia do UsuarioService.
   * @date 26/12/2023 - 20:06:07
   * @constructor
   * @param {HttpClient} http
   */
  constructor(private http: HttpClient) {}

  /**
   * Request de autenticacao
   * @date 26/12/2023 - 20:06:07
   * @param {AuthRequest} authRequest
   * @returns {*}
   */
  autenticacaoUsuario(authRequest: AuthRequest) {
    return this.http.post<AuthResponse>(
      'http://localhost:8080/login',
      authRequest
    );
  }

  /**
   * Request de recuperacao da senha
   * @date 26/12/2023 - 20:06:07
   * @param {string} email
   * @returns {*}
   */
  recuperaSenha(email: string) {
    return this.http.get<any>(this.url + `/EmailRecuperacao/${email}`);
  }

  /**
   * Request de validacao do token de recuperacao da senha
   * @date 26/12/2023 - 20:06:07
   * @param {string} token
   * @returns {*}
   */
  validaToken(token: string) {
    return this.http.get<any>(this.url + `/ValidaToken/${token}`);
  }

  /**
   * Request de resetar a senha
   * @date 26/12/2023 - 20:06:07
   * @param {Usuario} usuario
   * @returns {*}
   */
  resetaSenha(usuario: Usuario) {
    return this.http.post<any>(this.url + `/ResetaSenha`, usuario);
  }

  /**
   * Request para pegar o id do usuario
   * @date 26/12/2023 - 20:06:07
   * @param {string} token
   * @param {string} email
   * @returns {*}
   */
  idDoUsuario(token: string, email: string) {
    return this.http.get<number>(this.url + `/${email}`, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    });
  }
}
