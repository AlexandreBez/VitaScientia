import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interface/user';
import { Auth } from '../interface/auth';

/**
 * Service responsavel pelas requisições para o back end
 * @author Lucas Alexandre
 */
@Injectable({
  providedIn: 'root',
})
export class LoginPageService {

  /**
   * variavel contendo a url do backend
   * @type {string}
   */
  private url = 'http://localhost:8080/authenticate';

  /**
   * Contrutor para injetar outros mocdulos e funçoes
   * @param httpClient 
   */
  constructor(private http: HttpClient) {}

  /**
   * Função para fazer uma req para o backend
   * @param {User} user 
   * @returns {response} retorna a response com o status
   */
  authenticateUser(user: User) {
    return this.http.post<Auth>(this.url, user);
  }

  /**
   * Recebe o token e a data de expiração da authenticação feito pelo usuario
   * e transforma num JSON, depois e criando uma string atraves do JSON com os dados
   * possibilitando ser salvo no localstorage para ser validado futuramente
   * @param {string} token 
   * @param {string} expiration 
   */
  saveAuthenticationData(token: string, expiration: string) {
    const authData = {
      token: token,
      expiration: expiration,
    };
    const authDataJson = JSON.stringify(authData);
    localStorage.setItem('AUTH_COOKIE', authDataJson);
  }
}
