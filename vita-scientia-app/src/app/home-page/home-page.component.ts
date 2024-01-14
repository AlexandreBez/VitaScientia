import { Component } from '@angular/core';
import { Router } from '@angular/router';
/**
 * Componente possuindo as funções para a pagina Home
 * @author Lucas Alexandre
 * @date 28/12/2023 - 16:33:27
 * @version 2.0.0
 * @export
 * @class HomePageComponent
 * @typedef {HomePageComponent}
 * ----------------------------------------
 * Ultima atualizacao:
 * @date 28/12/2023 - 16:33:27
 * @author Lucas Alexandre
 */
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  /**
   * Cria uma instancia do HomePageComponent.
   * @date 28/12/2023 - 16:33:27
   * @constructor
   * @param {Router} router
   */
  constructor(private router: Router) {}

  /**
   * Funcao de logout da sessao
   * @function
   * @date 28/12/2023 - 16:33:27
   */
  logout() {
    sessionStorage.clear();
    this.router.navigate(['Login']);
  }
}
