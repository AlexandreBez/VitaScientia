import { Component, ViewChild } from '@angular/core';
import { LoginPageService } from './service/login-page.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './interface/user';

/**
 * Componente possuindo as funções para a pagina de login
 * @author Lucas Alexandre
 */
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  /**
   * Variavel de controle do component de loading
   * @type {boolean}
   */
  isLoading: boolean = false;
  /**
   * Variavel para guardar a mensagem de erro
   */
  loginMessageError: any = null;
  /**
   * Variavel para guardar a mensagem de sucesso
   */
  errorMsg: string = null;
  /**
   * Variavel que pega os valores do form no HTML
   * @type {NgForm}
   */
  @ViewChild('loginForm') loginFormData: NgForm;

  /**
   * Contrutor para injetar outros mocdulos e funçoes
   * @param activatedRoute
   * @param router
   */
  constructor(
    private loginPageService: LoginPageService,
    private router: Router
  ) {}

  /**
   * Função para pegar do formulario o username e senha e enviar para o backend
   * Após enviar, caso nenhum erro aconteça o sistema apresenta uma mensagem de successo e envia o
   * usuario para a home page. Caso contrario, uma mensagem de erro aparece
   */
  authenticateUser() {
    this.isLoading = true;
    this.errorMsg = null;
    let login_user: User = {
      email: this.loginFormData.value.username,
      password: this.loginFormData.value.password,
    };
    this.loginPageService.authenticateUser(login_user).subscribe(
      (data) => {
        
        this.loginPageService.saveAuthenticationData(
          data.token,
          data.expiration
        );

        setTimeout(() => {
          this.isLoading = false;
          this.router.navigate(['/Home']);
        }, 2000);
      },
      (error) => {
        this.isLoading = false;
        switch (error.status) {
          case 401:
            this.errorMsg = 'Usuario/Senha está incorreta...';
            break;
          default:
            this.errorMsg = 'Oops...Algo de errado aconteceu';
            break;
        }
      }
    );
  }
}
