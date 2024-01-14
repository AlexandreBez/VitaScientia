import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import * as moment from 'moment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponse } from '../interface/Objetos/Auth/AuthResponse';
/**
 * Componente possuindo as funções para validar se o token esta expirado
 * para demonstrar para o usuario um aviso para relogar novamente
 * @author Lucas Alexandre
 * @date 26/12/2023 - 18:33:01
 * @version 2.0.0
 * @export
 * @class ValidaTempoRestanteToken
 * @typedef {ValidaTempoRestanteToken}
 * ----------------------------------------
 * Ultima atualizacao:
 * @date 26/12/2023 - 15:12:19
 * @author Lucas Alexandre
 */
@Injectable({
  providedIn: 'root',
})
export class ValidaTempoRestanteToken {

  /**
   * Funcao chamada antes de acessar as rotas 
   * @date 26/12/2023 - 18:33:01
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {(| Observable<boolean | UrlTree>
   *     | Promise<boolean | UrlTree>
   *     | boolean
   *     | UrlTree)}
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

      
    const auth: AuthResponse = JSON.parse(sessionStorage.getItem('AUTH'));
    const diferencaDataEmMinutos = moment().diff(moment(auth.expiracao,'DD/MM/YYYY HH:mm:ss'), 'minutes');

    if (Math.abs(diferencaDataEmMinutos) <= 10) {
      alert(`Sua sessão expira em ${Math.abs(diferencaDataEmMinutos)} minutos.`);
    }
    return true;
  }
}
