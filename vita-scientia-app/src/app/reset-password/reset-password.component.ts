import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResetPasswordService } from './service/reset-password.service';
import { NgForm } from '@angular/forms';
import { UpdatePassword } from './interface/updatePassword';

/**
 * Componente possuindo as funções para a pagina de reset password
 * @author Lucas Alexandre
 */
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {

  
  /**
   * Variavel de controle do component de loading 
   * @type {boolean}
   */
  isLoading: boolean = false;
  /**
   * Variavel de controle de token
   * @type {boolean}
   */
  validToken: boolean;
  /**
   * Variavel que mantem o valor do token
   * @type {string}
   */
  token: string;
  
  
  /**
   * Variavel que pega os valores do form no HTML 
   * @type {NgForm}
   */
  @ViewChild('updatePasswordForm') updatePassword: NgForm;

  
  /**
   * Variavel para validar atraves do Regex se o dado possue Uppercase 
   */
  uppercaseRegex: any = /(?=.*[A-Z])/;
  /**
   * Variavel para validar atraves do Regex se o dado possue Caracteres Special 
   */
  specialCharRegex: any = /(?=.*[!@#$%^&*()_+|[\]{};:'",.<>?])/;
  /**
   * Variavel para validar atraves do Regex se o dado possue numeros 
   */
  numberscaseRegex: any = /(?=.*[0-9])/;

  /**
   * Variavel para guardar a mensagem de erro
   */
  errorMsg: any;
  /**
   * Variavel para guardar a mensagem de sucesso
   */
  successMsg: any;

  /**
   * Contrutor para injetar outros mocdulos e funçoes
   * @param activatedRoute 
   * @param router 
   * @param resetPasswordService 
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private resetPasswordService: ResetPasswordService
  ) {}

  /**
   * contrutor que e ativado quando a pagina e renderizada
   */
  ngOnInit() {
    /**
     * No momento em que a pagina e renderizada com a url que possue o token
     * o token e pego da url e é enviado uma requisição para o backend validando se o token
     * e valido ou não expirado.
     * Caso a resposta for 200 então o formulario para resetar a senha ira aparecer
     * caso o retorno for diferente então a mensagem de erro ira aparecer na tela seguindo o status
     */
    this.isLoading = true;
    this.activatedRoute.paramMap.subscribe((params) => {
      this.token = params.get('token');
      this.resetPasswordService.validatedToken(this.token).subscribe(
        (data) => {
          this.isLoading = false;
          this.validToken = true;
        },
        (error) => {
          this.isLoading = false;
          switch (error.status) {
            case 400:
              this.errorMsg = 'O token é inválido....';
              break;
            case 410:
              this.errorMsg = 'O token está expirado....';
              break;
            default:
              this.errorMsg = 'Oops...Algo de errado aconteceu';
              break;
          }
        }
      );
    });
  }

  /**
   * Função para pegar do formulario a nova senha e enviar para o backend
   * Antes de enviar o valor, ele é testado no formulario(DOM) e atraves do regex antes de enviar
   * Após enviar, caso nenhum erro aconteça o sistema apresenta uma mensagem de successo e envia o
   * usuario de volta para a pagina de login. Caso contrario, uma mensagem de erro aparece
   */
  newPasswordUpdate() {
    this.errorMsg = null;
    this.isLoading = true;

    const updatePasswordData: UpdatePassword = {
      token: this.token,
      password: this.updatePassword.value.password.trim(),
    };

    if (
      updatePasswordData.password.length < 8 ||
      !this.uppercaseRegex.test(updatePasswordData.password) ||
      !this.specialCharRegex.test(updatePasswordData.password) ||
      !this.numberscaseRegex.test(updatePasswordData.password)
    ) {
      this.isLoading = false;
      this.errorMsg = "A senha não corresponde aos requisitos";
    }else{
      this.resetPasswordService.newPasswordUpdate(updatePasswordData).subscribe(
        (data) => {
          this.isLoading = false;
          this.successMsg = 'Senha alterada com sucesso...';
          setTimeout(() => {
            this.router.navigate(['/Login']);
          }, 2000);
        },
        (error) => {
          this.isLoading = false;
          this.errorMsg = 'Oops...Algo de errado aconteceu';
        }
      );
    }

  }
}
