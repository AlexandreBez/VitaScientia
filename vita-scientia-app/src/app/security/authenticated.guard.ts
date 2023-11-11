import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import * as moment from 'moment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from '../login-page/interface/auth';

/**
 * Guardiao verifica antes the entrar em uma rota se token está valido, Caso não esteja valido ou não exista ele envia de volta para a pagina de login
 * @author Lucas Alexandre
 */
@Injectable({
  providedIn: 'root',
})
export class AuthenticatedGuard {

  /**
   * Contrutor para injetar outros mocdulos e funçoes
   * @param router 
   */
  constructor(private router: Router) {}

  /**
   * Função nativa do Angular na qual foi modificada para validar se o token esta valido
   * Caso não estiver, o usuário é enviado para a página de login
   * @param route 
   * @param state 
   * @returns o valor true se o token estiver valido e libera a route
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const get_auth_data: Auth = JSON.parse(localStorage.getItem('AUTH_COOKIE'));

    if (
      get_auth_data == null ||
      get_auth_data.token == null ||
      get_auth_data.expiration == null
    ) {
      localStorage.clear();
      this.router.navigate(['/Login']);
      return false;
    }

    if (moment(get_auth_data.expiration,'ddd MMM DD HH:mm:ss zzz YYYY').diff(moment(), 'minutes') <= 5) {
      alert('Your session will expire in 5 minutes');
    }

    if (
      moment().isSameOrAfter(
        moment(get_auth_data.expiration, 'ddd MMM DD HH:mm:ss zzz YYYY'),
        'second'
      )
    ) {
      localStorage.clear();
      this.router.navigate(['/Login']);
      return false;
    }else{
      return true;
    }

  }
}
