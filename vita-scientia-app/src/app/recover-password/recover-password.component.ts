import { Component, ViewChild } from '@angular/core';
import { RecoverPasswordService } from './service/recover-password.service';
import { NgForm } from '@angular/forms';

/**
 * Componente possuindo as funções para a pagina de recover password
 * @author Lucas Alexandre
 */
@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss'],
})
export class RecoverPasswordComponent {
  /**
   * Variavel de controle do component de loading
   * @type {boolean}
   */
  isLoading: boolean = false;
  /**
   * Variavel para guardar a mensagem de erro
   */
  errorMsg: any;
  /**
   * Variavel para guardar a mensagem de sucesso
   */
  successMsg: any;
  /**
   * Variavel que pega os valores do form no HTML
   * @type {NgForm}
   */
  @ViewChild('recoverForm') resetEmailForm: NgForm;

  /**
   * Contrutor para injetar outros mocdulos e funçoes
   * @param recoverPasswordService
   */
  constructor(private recoverPasswordService: RecoverPasswordService) {}

  /**
   * Função para pegar do formulario email e enviar para o backend
   * fazendo assim o backend enviar um email com o link para fazer o reset da senha
   */
  sendRecoverEmail() {
    this.isLoading = true;
    this.errorMsg = null;
    this.successMsg = null;

    console.log(this.resetEmailForm.value.username);

    if (
      this.resetEmailForm.value.username == null ||
      this.resetEmailForm.value.username == undefined
    ) {
      this.isLoading = false;
      this.errorMsg = 'O nome de usuário não pode ser vazio...';
    } else {
      this.recoverPasswordService
        .sendRecoverEmail(this.resetEmailForm.value.username.trim())
        .subscribe(
          (data) => {
            this.successMsg = 'Email enviado com sucesso...';
            this.isLoading = false;
            this.resetEmailForm.reset;
          },
          (error) => {
            this.isLoading = false;
            switch (error.status) {
              case 404:
                this.errorMsg = 'Email não encontrado...';
                break;
              default:
                this.errorMsg = 'Oops...Algo de errado aconteceu';
                break;
            }
            console.log(error)
          }
        );
    }
  }
}
