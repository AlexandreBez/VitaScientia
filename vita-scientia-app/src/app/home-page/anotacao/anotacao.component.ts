import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnotacaoService } from '../../global/services/Anotacao.service';
import { NgForm } from '@angular/forms';
import { Anotacao } from 'src/app/global/interface/Objetos/Anotacao';
import { PaginaAnotacao } from 'src/app/global/interface/Paginas/PaginaAnotacao';
/**
 * Componente possuindo as funções para a pagina anotacoes
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
@Component({
  selector: 'app-anotacao',
  templateUrl: './anotacao.component.html',
  styleUrls: ['./anotacao.component.scss'],
})
export class AnotacaoComponent implements OnInit {
  //*-----------------------Variaveis globais--------------------------
  /**
   * Controle do carregamento
   * @date 26/12/2023 - 15:12:19
   * @type {boolean}
   */
  carregando = false;
  /**
   * Controle do carregamento da lista de anotacoes
   * @date 26/12/2023 - 15:12:19
   * @type {boolean}
   */
  carregandoLista = false;
  /**
   * Controle do filtro
   * @date 26/12/2023 - 15:12:19
   * @type {string}
   */
  filtroSelecionado: string = 'titulo';
  /**
   * Controle do filtor atarves do titulo
   * @date 26/12/2023 - 15:12:19
   * @type {boolean}
   */
  pesquisaTitulo: boolean = false;

  //*-----------------------Variaveis de dados--------------------------
  /**
   * Controle do index da anotacao
   * @date 26/12/2023 - 15:12:19
   * @type {number}
   */
  indexAnotacao: number;
  /**
   * Armazenamento dos dados da lista de anotacoes
   * @date 26/12/2023 - 15:12:19
   * @type {PaginaAnotacao}
   */
  dadoAnotacao: PaginaAnotacao;
  /**
   * Armazenamento dos dados do conteudo da anotacao
   * @date 26/12/2023 - 15:12:19
   * @type {Anotacao}
   */
  conteudoAnotacao: Anotacao = null;
  /**
   * Armazenamento do id da anotacao
   * @date 26/12/2023 - 15:12:19
   * @type {number}
   */
  id_anotacao: number;
  /**
   * Armazenamento do novo titulo da anotacao
   * @date 26/12/2023 - 15:12:19
   * @type {string}
   */
  novo_titulo_anotacao: string;
  /**
   * Armazenamento da nova descricao da anotacao
   * @date 26/12/2023 - 15:12:19
   * @type {string}
   */
  nova_descricao_anotacao: string;

  //*-----------------------Controle de mensagems--------------------------
  /**
   * Controle de mensagem de erro
   * @date 26/12/2023 - 15:12:19
   * @type {string}
   */
  mensagemDeErro: string;
  /**
   * Controle de mensagem de sucesso
   * @date 26/12/2023 - 15:12:19
   * @type {string}
   */
  mensagemDeSucesso: string;
  /**
   * Controle de mensagem de erro do modal
   * @date 26/12/2023 - 15:12:19
   * @type {string}
   */
  mensagemDeErroModal: string;
  /**
   * Controle de mensagem de sucesso do modal
   * @date 26/12/2023 - 15:12:19
   * @type {string}
   */
  mensagemDeSucessoModal: string;

  //*-----------------------manipulacao do DOM--------------------------
  /**
   * Formulario de busca da anotacao
   * @date 26/12/2023 - 15:12:19
   * @type {NgForm}
   */
  @ViewChild('formularioBuscaAnotacao') formularioBuscaAnotacao: NgForm;
  /**
   * Formulario de dados para nova anotacao
   * @date 26/12/2023 - 15:12:19
   * @type {NgForm}
   */
  @ViewChild('formularioNovaNota') formularioNovaNota: NgForm;
  /**
   * Controle do Modal(DOM)
   * @date 26/12/2023 - 15:12:19
   * @type {ElementRef}
   */
  @ViewChild('modalAtualizaAnotacao') modalAtualizaAnotacao: ElementRef;
  /**
   * Controle do Modal(DOM)
   * @date 26/12/2023 - 15:12:19
   * @type {ElementRef}
   */
  @ViewChild('modalNovaAnotacao') modalNovaAnotacao: ElementRef;
  /**
   * Controle do Modal(DOM)
   * @date 26/12/2023 - 15:12:19
   * @type {ElementRef}
   */
  @ViewChild('modalDeletaAnotacao') modalDeletaAnotacao: ElementRef;
  /**
   * Cria uma instância de AnotacaoComponent
   * @date 26/12/2023 - 15:12:19
   * @constructor
   * @param {AnotacoesServices} anotacaoService
   */
  constructor(private anotacaoService: AnotacaoService) {}

  /**
   * Inicializa o componente.
   * Chamado automaticamente após a criação do componente.
   * @function
   * @date 26/12/2023 - 15:12:19
   */
  ngOnInit() {
    this.listaDeAnotacoes(0);
  }

  /**
   * Limpa variaveis de mensagems
   * @function
   * @date 26/12/2023 - 15:12:19
   */
  limpaMensagens() {
    this.mensagemDeErro = null;
    this.mensagemDeSucesso = null;
    this.mensagemDeErroModal = null;
    this.mensagemDeSucessoModal = null;
  }

  /**
   * Conta e retorna a quantidade de paginas de uma lista
   * @date 26/12/2023 - 15:12:19
   * @function
   * @param {number} totalPages
   * @returns {number[]}
   */
  pegaArrayDePaginas(totalPages: number): number[] {
    return Array.from({ length: totalPages }, (_, index) => index);
  }

  /**
   * Controle do metodo da busca de anotacao
   * @function
   * @date 26/12/2023 - 15:12:19
   */
  filtro() {
    if (
      this.formularioBuscaAnotacao.value.search_input == null ||
      this.formularioBuscaAnotacao.value.search_input == undefined ||
      this.formularioBuscaAnotacao.value.search_input == ''
    ) {
      return this.listaDeAnotacoes(0);
    }

    switch (this.filtroSelecionado) {
      case 'titulo':
        this.pesquisaPeloTitulo(0);
        break;
      case 'id':
        this.pesquisaPeloId();
        break;
      default:
        this.listaDeAnotacoes(0);
        break;
    }
  }

  /**
   * Funcao de busca da lista de anotacoes
   * @function
   * @date 26/12/2023 - 15:12:19
   * @param {number} pagina
   */
  listaDeAnotacoes(pagina: number) {
    this.carregandoLista = true;
    this.pesquisaTitulo = false;
    this.limpaMensagens();
    this.anotacaoService.listaDeAnotacoes(pagina).subscribe(
      (data) => {
        this.dadoAnotacao = data;
        if (data.numberOfElements < 1) {
          this.mensagemDeSucesso = 'Nenhuma anotação encontrada...';
        }
        this.carregandoLista = false;
      },
      (error) => {
        this.carregandoLista = false;
        console.error(error.message);
        this.mensagemDeErro = 'Oops... Algo de errado aconteceu';
      }
    );
  }

  /**
   * Funcao de busca da lista de anotacoes pelo titulo
   * @function
   * @date 26/12/2023 - 15:12:19
   * @param {number} pagina
   */
  pesquisaPeloTitulo(pagina: number) {
    this.carregandoLista = true;
    this.pesquisaTitulo = true;
    this.limpaMensagens();
    this.anotacaoService
      .procuraPeloTitulo(
        this.formularioBuscaAnotacao.value.search_input.trim(),
        pagina
      )
      .subscribe(
        (data) => {
          this.dadoAnotacao = data;
          if (data.numberOfElements < 1) {
            this.mensagemDeSucesso = 'Nenhuma anotação encontrada...';
          }
          this.carregandoLista = false;
        },
        (error) => {
          this.carregandoLista = false;
          console.error(error.message);
          this.mensagemDeErro = 'Oops... Algo de errado aconteceu';
        }
      );
  }

  /**
   * Funcao de busca de anotacoes pelo id
   * @function
   * @date 26/12/2023 - 15:12:19
   */
  pesquisaPeloId() {
    this.carregandoLista = true;
    this.limpaMensagens();
    this.anotacaoService
      .procuraPeloId(this.formularioBuscaAnotacao.value.search_input)
      .subscribe(
        (data) => {
          this.dadoAnotacao = data;
          if (data.numberOfElements < 1) {
            this.mensagemDeSucesso = 'Nenhuma anotação encontrada...';
          }
          this.dadoAnotacao = data;
          this.carregandoLista = false;
        },
        (error) => {
          this.carregandoLista = false;
          console.error(error.message);
          this.mensagemDeErro = 'Oops... Algo de errado aconteceu';
        }
      );
  }

  /**
   * Funcao de criar uma nova anotacao
   * @function
   * @date 26/12/2023 - 15:12:19
   */
  criaNovaAnotacao() {
    this.carregando = true;
    this.limpaMensagens();
    this.anotacaoService
      .novaAnotacao({
        anotacao_titulo: this.formularioNovaNota.value.titulo.trim(),
        anotacao_descricao: this.formularioNovaNota.value.descricao,
      })
      .subscribe(
        (data) => {
          this.dadoAnotacao.content.push(data);
          this.conteudoAnotacao = data;
          this.carregando = false;
          this.mensagemDeSucessoModal = 'Anotação adicionada com sucesso...';
          setTimeout(() => {
            this.formularioNovaNota.resetForm();
            this.mensagemDeSucessoModal = null;
            this.modalNovaAnotacao.nativeElement.click();
          }, 1500);
        },
        (error) => {
          this.carregando = false;
          console.error(error.message);
          this.mensagemDeErro = 'Oops... Algo de errado aconteceu';
        }
      );
  }

  /**
   * Funcao de atualizar uma anotacao
   * @function
   * @date 26/12/2023 - 15:12:19
   */
  atualizaAnotacao() {
    this.carregando = true;
    this.limpaMensagens();
    this.anotacaoService
      .atualizaAnotacao({
        id_anotacao: this.id_anotacao,
        anotacao_titulo: this.novo_titulo_anotacao.trim(),
        anotacao_descricao: this.nova_descricao_anotacao,
      })
      .subscribe(
        (data) => {
          this.conteudoAnotacao.anotacao_titulo = this.novo_titulo_anotacao;
          this.conteudoAnotacao.anotacao_descricao =
            this.nova_descricao_anotacao;
          this.novo_titulo_anotacao = null;
          this.nova_descricao_anotacao = null;
          this.carregando = false;
          this.mensagemDeSucessoModal = 'Anotação atualizada com sucesso...';
          setTimeout(() => {
            this.mensagemDeSucessoModal = null;
            this.modalAtualizaAnotacao.nativeElement.click();
          }, 1500);
        },
        (error) => {
          this.carregando = false;
          console.error(error.message);
          this.mensagemDeErro = 'Oops... Algo de errado aconteceu';
        }
      );
  }

  /**
   * Funcao de deletar uma anotacao
   * @function
   * @date 26/12/2023 - 15:12:19
   */
  deletaAnotacao() {
    this.carregando = true;
    this.limpaMensagens();
    this.anotacaoService.deletaAnotacao(this.id_anotacao).subscribe(
      (data) => {
        this.dadoAnotacao.content.splice(this.indexAnotacao, 1);
        if (this.dadoAnotacao.content.length < 1) {
          
        }
        this.conteudoAnotacao = null;
        this.indexAnotacao = null;
        this.carregando = false;
        this.mensagemDeSucessoModal = 'Anotação excluída com sucesso...';
        setTimeout(() => {
          this.mensagemDeSucessoModal = null;
          this.modalDeletaAnotacao.nativeElement.click();
        }, 1500);
      },
      (error) => {
        this.carregando = false;
        console.error(error.message);
        this.mensagemDeErroModal = 'Oops... Algo de errado aconteceu';
      }
    );
  }
}
