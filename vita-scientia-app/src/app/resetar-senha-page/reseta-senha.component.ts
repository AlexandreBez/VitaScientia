import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Usuario } from '../global/interface/Objetos/Usuario';
import { UsuarioService } from '../global/services/Usuario.service';

/**
 * Description placeholder
 * @date 28/12/2023 - 15:45:46
 *
 * @export
 * @class ResetaSenhaComponent
 * @typedef {ResetaSenhaComponent}
 * @implements {OnInit}
 */
@Component({
  selector: 'app-reseta-senha',
  templateUrl: './reseta-senha.component.html',
  styleUrls: ['./reseta-senha.component.scss'],
})
export class ResetaSenhaComponent implements OnInit {
  /**
   * Controle do carregamento
   * @date 28/12/2023 - 15:45:46
   * @type {boolean}
   */
  carregando: boolean = false;
  /**
   * Controle do token de resetar a senha
   * @date 28/12/2023 - 15:45:46
   * @type {boolean}
   */
  tokenValido: boolean;
  /**
   * token de resetar a senha
   * @date 28/12/2023 - 15:45:46
   * @type {string}
   */
  token: string;
  /**
   * Formulario de recuperar a senha
   * @date 28/12/2023 - 15:45:46
   * @type {NgForm}
   */
  @ViewChild('formularioResetaSenha') dadosFormularioResetaSenha: NgForm;
  /**
   * Regex de controle para validacao de letras maiusculas
   * @date 28/12/2023 - 15:45:46
   * @type {*}
   */
  letrasMaiusculasRegex: any = /(?=.*[A-Z])/;
  /**
   * Regex de controle para validacao de letras maiusculas
   * @date 28/12/2023 - 15:45:46
   * @type {*}
   */
  caracteresEspeciaisRegex: any = /(?=.*[!@#$%^&*()_+|[\]{};:'",.<>?])/;
  /**
   * Regex de controle para validacao de caracteres especiais
   * @date 28/12/2023 - 15:45:46
   * @type {*}
   */
  numerosRegex: any = /(?=.*[0-9])/;
  /**
   * Controle de mensagem de erro
   * @date 28/12/2023 - 15:45:46
   * @type {*}
   */
  mensagemDeErro: any;
  /**
   * Controle de mensagem de sucesso
   * @date 28/12/2023 - 15:45:46
   * @type {*}
   */
  mensagemDeSucesso: any;

  /**
   * cria uma instancia do ResetaSenhaComponent.
   * @date 28/12/2023 - 15:45:46
   * @constructor
   * @param {ActivatedRoute} activatedRoute
   * @param {Router} router
   * @param {UsuarioService} usuarioService
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private usuarioService: UsuarioService
  ) {}

  /**
   * Inicializa o componente.
   * Chamado automaticamente após a criação do componente.
   * @function
   * @date 28/12/2023 - 15:11:46
   */
  ngOnInit() {
    this.pegaDadosDaRota();
  }

  /**
   * Funcao para pegar dados da rota
   * @function
   * @date 28/12/2023 - 15:11:46
   */
  pegaDadosDaRota() {
    this.carregando = true;
    this.activatedRoute.paramMap.subscribe((params) => {
      this.token = params.get('token');
      this.usuarioService.validaToken(this.token).subscribe(
        (data) => {
          this.carregando = false;
          this.tokenValido = true;
        },
        (error) => {
          this.carregando = false;
          switch (error.status) {
            case 400:
              this.mensagemDeErro = 'Token inválido....';
              break;
            case 410:
              this.mensagemDeErro = 'Token expirado....';
              break;
            default:
              this.mensagemDeErro = 'Oops...Algo de errado aconteceu';
              break;
          }
        }
      );
    });
  }

  /**
   * Funcao de resetar da senha
   * @function
   * @date 28/12/2023 - 15:11:46
   */
  resetaSenha() {
    this.mensagemDeErro = null;
    this.carregando = true;

    const usuario: Usuario = {
      email: null,
      token: this.token,
      senha: this.dadosFormularioResetaSenha.value.password.trim(),
      expiracao_token: null,
    };

    if (
      this.dadosFormularioResetaSenha.value.password.length < 12 ||
      !this.letrasMaiusculasRegex.test(
        this.dadosFormularioResetaSenha.value.password
      ) ||
      !this.caracteresEspeciaisRegex.test(
        this.dadosFormularioResetaSenha.value.password
      ) ||
      !this.numerosRegex.test(this.dadosFormularioResetaSenha.value.password)
    ) {
      this.carregando = false;
      this.mensagemDeErro = 'A senha não corresponde aos requisitos';
    } else {
      this.usuarioService.resetaSenha(usuario).subscribe(
        (data) => {
          this.carregando = false;
          this.mensagemDeSucesso = 'Senha alterada com sucesso...';
          setTimeout(() => {
            this.router.navigate(['/Login']);
          }, 2000);
        },
        (error) => {
          this.carregando = false;
          this.mensagemDeErro = 'Oops...Algo de errado aconteceu';
        }
      );
    }
  }
}
