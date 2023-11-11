import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UpdatePassword } from '../interface/updatePassword';


/**
 * Service responsavel pelas requisições para o back end
 * @author Lucas Alexandre
 */
@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  /**
   * variavel contendo a url do backend
   * @type {string}
   */
  private url = 'http://localhost:8080/user';

  /**
   * Contrutor para injetar outros mocdulos e funçoes
   * @param httpClient 
   */
  constructor(private http: HttpClient) {}

  /**
   * Função para fazer uma req para o backend
   * @param {string} token 
   * @returns {response} retorna a response com o status
   */
  validatedToken(token: string) {
    return this.http.get<any>(this.url+"/validatedToken/"+token);
  }

  /**
   * Função para fazer uma req para o backend
   * @param {string} updatePassword 
   * @returns {response} retorna a response com o status
   */
  newPasswordUpdate(updatePassword: UpdatePassword) {
    return this.http.post<any>(this.url+"/validatedToken/updatePassword", updatePassword);
  }

}
