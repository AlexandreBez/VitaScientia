import { Component, ViewChild } from '@angular/core';
import { UsuarioService } from '../global/services/Usuario.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthResponse } from '../global/interface/Objetos/Auth/AuthResponse';
/**
 * Componente possuindo as funções para a pagina login
 * @author Lucas Alexandre
 * @date 26/12/2023 - 19:10:28
 * @version 2.0.0
 * @export
 * @class LoginPageComponent
 * @typedef {LoginPageComponent}
 * ----------------------------------------
 * Ultima atualizacao:
 * @date 26/12/2023 - 19:10:28
 * @author Lucas Alexandre
 */
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  /**
   * Controle do carregamento
   * @date 26/12/2023 - 19:10:28
   * @type {boolean}
   */
  carregando: boolean = false;
  /**
   * Controle de mensagem de erro
   * @date 26/12/2023 - 19:10:28
   * @type {*}
   */
  mensagemDeErro: string = null;
  /**
   * Formulario de login
   * @date 26/12/2023 - 19:10:28
   * @type {NgForm}
   */
  @ViewChild('formularioLogin') dadosFormularioLogin: NgForm;

  /**
   * Cria uma instancia do LoginPageComponent.
   * @date 26/12/2023 - 19:10:28
   * @constructor
   * @param {UsuarioService} usuarioService
   * @param {Router} router
   */
  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  /**
   * Funcao de autenticacao do usuario
   * @function
   * @date 26/12/2023 - 19:10:28
   */
  autenticaUsuario() {
    this.carregando = true;
    this.mensagemDeErro = null;

    this.usuarioService.autenticacaoUsuario({
      email: this.dadosFormularioLogin.value.email,
      senha: this.dadosFormularioLogin.value.senha
    }).subscribe(
      (data) => {
        this.pegaIdDoUsuario(data.email, data.jwt, data.expiracao);
      },
      (error) => {
        this.carregando = false;
        switch (error.status) {
          case 401:
            this.mensagemDeErro = 'Usuario/Senha incorreta...';
            break;
          default:
            this.mensagemDeErro = 'Oops...Algo de errado aconteceu';
            break;
        }
      }
    );
  }

  /**
   * Funcao para pegar o id do usuario
   * @function
   * @date 26/12/2023 - 19:10:28
   */
  pegaIdDoUsuario(email: string,jwt: string, expiracao: string){
    this.carregando = true;
    this.usuarioService.idDoUsuario(jwt, email).subscribe(
      data => {
        sessionStorage.setItem('AUTH', JSON.stringify({
          id_usuario: data,
          email: email,
          jwt: jwt,
          expiracao: expiracao
        }));
        this.router.navigate(['/Home']);
      },
      erro => {
        console.error(erro);
        this.carregando = false;
        this.mensagemDeErro = 'Oops...Algo de errado aconteceu';
      }
    )
  }
}
