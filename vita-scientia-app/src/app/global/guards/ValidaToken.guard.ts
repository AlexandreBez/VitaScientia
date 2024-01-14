import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import * as moment from 'moment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponse } from '../interface/Objetos/Auth/AuthResponse';

/**
 * Componente possuindo as funções para validar se o token esta expirado/valido
 * antes de acessar uma rota
 * @author Lucas Alexandre
 * @date 26/12/2023 - 18:42:20
 * @version 2.0.0
 * @export
 * @class ValidaToken
 * @typedef {ValidaToken}
 * ----------------------------------------
 * Ultima atualizacao:
 * @date 26/12/2023 - 18:42:20
 * @author Lucas Alexandre
 */
@Injectable({
  providedIn: 'root',
})
export class ValidaToken {
  /**
   * Cria uma instancia do ValidaToken.
   * @date 26/12/2023 - 18:42:20
   * @constructor
   * @param {Router} router
   */
  constructor(private router: Router) {}

  /**
   * Funcao chamada antes de acessar as rotas 
   * @date 26/12/2023 - 18:42:20
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

    if (
      sessionStorage.getItem('AUTH') == null || moment().isSameOrAfter(moment(auth.expiracao, 'DD/MM/YYYY HH:mm:ss'),'second')
    ) {
      sessionStorage.clear();
      this.router.navigate(['Login']);
      return false;
    } else {
      return true;
    }
  }
}
