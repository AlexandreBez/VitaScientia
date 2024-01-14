import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../global/services/Usuario.service';
/**
 * Componente possuindo as funções para a pagina recuperar senha
 * @author Lucas Alexandre
 * @date 28/12/2023 - 15:11:46
 * @version 2.0.0
 * @export
 * @class RecuperarSenhaComponent
 * @typedef {RecuperarSenhaComponent}
 * ----------------------------------------
 * Ultima atualizacao:
 * @date 28/12/2023 - 15:11:46
 * @author Lucas Alexandre
 */
@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html',
  styleUrls: ['./recuperar-senha.component.scss'],
})
export class RecuperarSenhaComponent {

  /**
   * Controle do carregamento
   * @date 28/12/2023 - 15:11:46
   * @type {boolean}
   */
  carregando: boolean = false;
  /**
   * Controle de mensagem de erro
   * @date 28/12/2023 - 15:11:46
   * @type {*}
   */
  mensagemDeErro: any;
  /**
   * Controle de mensagem de sucesso
   * @date 28/12/2023 - 15:11:46
   * @type {*}
   */
  mensagemDeSucesso: any;
  /**
   * Formulario de recuperar a senha
   * @date 28/12/2023 - 15:11:46
   * @type {NgForm}
   */
  @ViewChild('formularioRecuperarSenha') formularioRecuperarSenha: NgForm;

  /**
   * Cria uma instancia do RecuperarSenhaComponent.
   * @date 28/12/2023 - 15:11:46
   * @constructor
   * @param {UsuarioService} usuarioService
   */
  constructor(private usuarioService: UsuarioService) {}

  /**
   * Funcao de recuperacao da senha
   * @function
   * @date 28/12/2023 - 15:11:46
   */
  recuperaSenha() {
    
    this.carregando = true;
    this.mensagemDeErro = null;
    this.mensagemDeSucesso = null;

    if (
      this.formularioRecuperarSenha.value.email == null ||
      this.formularioRecuperarSenha.value.email == undefined
    ) {
      this.carregando = false;
      this.mensagemDeErro = 'O nome de usuário não pode ser vazio...';
    } else {
      this.usuarioService.recuperaSenha(this.formularioRecuperarSenha.value.email.trim())
        .subscribe(
          (data) => {
            this.mensagemDeSucesso = 'Email enviado com sucesso...';
            this.carregando = false;
            this.formularioRecuperarSenha.reset;
          },
          (error) => {
            this.carregando = false;
            switch (error.status) {
              case 404:
                this.mensagemDeErro = 'Email não encontrado...';
                break;
              default:
                this.mensagemDeErro = 'Oops...Algo de errado aconteceu';
                break;
            }
          }
        );
    }
  }
}
