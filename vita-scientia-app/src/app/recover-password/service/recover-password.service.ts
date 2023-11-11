import { HttpClient, HttpHeaderResponse, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Service responsavel pelas requisições para o back end
 * @author Lucas Alexandre
 */
@Injectable({
  providedIn: 'root'
})
export class RecoverPasswordService {

  /**
   * variavel contendo a url do backend
   * @type {string}
   */
  private url = 'http://localhost:8080/user/SendRecoverEmail/';

  /**
   * Contrutor para injetar outros mocdulos e funçoes
   * @param httpClient 
   */
  constructor(private http: HttpClient) {}

  /**
   * Função para fazer uma req para o backend
   * @param {string} username 
   * @returns {response} retorna a response com o status
   */
  sendRecoverEmail(username: string) {
    return this.http.get<any>(this.url+username);
  }

}
