import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PesquisaService } from '../../global/services/Pesquisa.service';
import { PaginaPesquisas } from 'src/app/global/interface/Paginas/PaginaPesquisas';

import { ProjetoService } from '../../global/services/Projeto.service';
import { AnotacaoService } from 'src/app/global/services/Anotacao.service';
import { Pesquisa } from 'src/app/global/interface/Objetos/Pesquisa';
import { Projeto } from 'src/app/global/interface/Objetos/Projeto';
import { Anotacao } from 'src/app/global/interface/Objetos/Anotacao';
import { CurrencyPipe } from '@angular/common';

import { ChartOptions } from 'src/app/global/types/Chart.type';
import { ChartComponent } from 'ng-apexcharts';
/**
 * Componente possuindo as funções para a pagina pesquisa
 * @author Lucas Alexandre
 * @date 28/12/2023 - 15:11:46
 * @version 2.0.0
 * @export
 * @class PesquisasComponent
 * @typedef {PesquisasComponent}
 * ----------------------------------------
 * Ultima atualizacao:
 * @date 28/12/2023 - 15:11:46
 * @author Lucas Alexandre
 */
@Component({
  selector: 'app-pesquisas',
  templateUrl: './pesquisas.component.html',
  styleUrls: ['./pesquisas.component.scss'],
})
export class PesquisasComponent{
  //*-----------------------Variaveis globais--------------------------
  /**
   * Controle do carregamento
   * @date 29/12/2023 - 11:54:37
   * @type {boolean}
   */
  carregando = false;
  /**
   * Controle do carregamento da lista de pesquisas
   * @date 29/12/2023 - 11:54:37
   * @type {boolean}
   */
  carregandoLista = true;
  /**
   * Controle do filtro
   * @date 29/12/2023 - 11:54:37
   * @type {string}
   */
  filtroSelecionado: string = 'titulo';
  /**
   * Controle do filtor atraves do titulo
   * @date 29/12/2023 - 11:54:37
   * @type {boolean}
   */
  pesquisaTitulo: boolean = false;
  
  //*-----------------------Variaveis Pesquisa--------------------------
  /**
   * Armazenamento dos dados da lista de pesquisa
   * @date 29/12/2023 - 11:54:37
   * @type {PaginaPesquisas}
   */
  dadosPesquisa: PaginaPesquisas = null;
  /**
   * Armazenamento dos dados do conteudo da pesquisa
   * @date 29/12/2023 - 11:54:37
   * @type {Pesquisa}
   */
  conteudoPesquisa: Pesquisa = null;
  /**
   * Armazenamento do id da pesquisa
   * @date 29/12/2023 - 11:54:37
   * @type {number}
   */
  id_pesquisa: number;
  /**
   * Armazenamento do novo titulo da pesquisa
   * @date 29/12/2023 - 11:54:37
   * @type {string}
   */
  novo_titulo_pesquisa: string;
  /**
   * Armazenamento da nova descricao da pesquisa
   * @date 29/12/2023 - 11:54:37
   * @type {string}
   */
  nova_descricao_pesquisa: string;
  /**
   * Armazenamento do novo status da pesquisa
   * @date 29/12/2023 - 11:54:37
   * @type {string}
   */
  novo_status_pesquisa: string;
  /**
   * Armazenamento dos status da pesquisa
   * @date 29/12/2023 - 11:54:37
   * @type {string[]}
   */
  opcao_status_pesquisa: string[] = [
    'Aberto',
    'Análisando',
    'Em espera',
    'Finalizado'
  ];
  /**
   * Controle do index da pesquisa
   * @date 29/12/2023 - 11:54:37
   * @type {number}
   */
  index_pesquisa: number;

  //*-----------------------Variaveis Requisito--------------------------
  /**
   * Armazenamento do id do requisito
   * @date 29/12/2023 - 11:54:37
   * @type {number}
   */
  id_requisito: number;
  /**
   * Armazenamento do titulo do item
   * @date 29/12/2023 - 11:54:37
   * @type {string}
   */
  item_requisito: string = null;
  /**
   * Armazenamento do preco do item
   * @date 29/12/2023 - 11:54:37
   * @type {number}
   */
  preco_requisito: number = 0;
  /**
   * Controle do index do requisito
   * @date 29/12/2023 - 11:54:37
   * @type {number}
   */
  index_requisito: number;
  /**
   * Controle da legenda do grafico de requisito
   * @date 29/12/2023 - 11:54:37
   * @type {string[]}
   */
  legendas_grafico_requisito: string[] = [];
  /**
   * Controle dos dados do grafico de requisito
   * @date 29/12/2023 - 11:54:37
   * @type {any[]}
   */
  dados_grafico_requisito: any[] = [];
  /**
   * Controle do valor total de requisitos
   * @date 29/12/2023 - 11:54:37
   * @type {number}
   */
  valor_total_requisito: number = 0;
  /**
   * Dados e visualizacao do grafico
   * @date 31/12/2023 - 19:01:23
   * @type {ChartComponent}
   */
  @ViewChild('graficoMonetario') graficoMonetario: ChartComponent;
  /**
   * Type utilizado nas configs do grafico
   * @date 31/12/2023 - 19:01:23
   * @public
   * @type {Partial<ChartOptions>}
   */
  public chartOptionsRequisitos: Partial<ChartOptions>;
  
  //*-----------------------Variaveis Projetos--------------------------
  /**
   * Armazenamento do id do projeto
   * @date 29/12/2023 - 11:54:37
   * @type {number}
   */
  id_projeto: number;
  /**
   * Controle do carregamento da lista de projetos não associados
   * @date 29/12/2023 - 11:54:37
   * @type {boolean}
   */
  carregando_lista_projeto: boolean = false;
  /**
   * Controle da lista de projetos não associadas
   * @date 29/12/2023 - 11:54:37
   * @type {Projeto[]}
   */
  lista_projetos_nao_associados: Projeto[] = [];
  /**
   * Controle da lista de id de projetos para associar
   * @date 29/12/2023 - 11:54:37
   * @type {number[]}
   */
  lista_projetos_para_associar: number[] = [];
  /**
   * Controle do index do projeto
   * @date 29/12/2023 - 11:54:37
   * @type {number}
   */
  index_projeto: number;
  /**
   * Controle da legenda do grafico de pesquisas
   * @date 29/12/2023 - 11:54:37
   * @type {string[]}
   */
  legendas_grafico_projeto: string[] = [
    'Aberto',
    'Em andamento',
    'Finalizado',
    'Outros'
  ];
  /**
   * Controle dos dados do grafico de requisito
   * @date 29/12/2023 - 11:54:37
   * @type {any[]}
   */
  dados_grafico_projeto: any[] = [0];
  /**
   * Dados e visualizacao do grafico
   * @date 31/12/2023 - 19:01:23
   * @type {ChartComponent}
   */
  @ViewChild('graficoStatus') graficoStatus: ChartComponent;
  /**
   * Type utilizado nas configs do grafico
   * @date 31/12/2023 - 19:01:23
   * @public
   * @type {Partial<ChartOptions>}
   */
  public chartOptionsProjetos: Partial<ChartOptions>;
  /**
   * Armazenamento dos dados do projeto para visualizacao
   * @date 29/12/2023 - 11:54:36
   * @type {*}
   */
  detalhes_projeto: any = [];

  //*-----------------------Variaveis Anotacao--------------------------
  /**
   * Armazenamento do id da anotacao
   * @date 29/12/2023 - 11:54:37
   * @type {number}
   */
  id_anotacao: number;
  /**
   * Controle do carregamento da lista de projetos não associados
   * @date 29/12/2023 - 11:54:36
   * @type {boolean}
   */
  carregando_lista_anotacao: boolean = false;
  /**
   * Controle da lista de anotacoes não associadas
   * @date 29/12/2023 - 11:54:36
   * @type {Anotacao[]}
   */
  lista_anotacao_nao_associados: Anotacao[] = [];
  /**
   * Controle da lista de id de anotacoes para associar
   * @date 29/12/2023 - 11:54:36
   * @type {number[]}
   */
  lista_anotacao_para_associar: number[] = [];
  /**
   * Controle do index da anotacao
   * @date 29/12/2023 - 11:54:36
   * @type {number}
   */
  index_anotacao: number;
  /**
   * Armazenamento dos dados da anotacao para visualizacao
   * @date 29/12/2023 - 11:54:36
   * @type {*}
   */
  detalhes_anotacao: any = [];

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
   * Formulario de busca da pesquisa
   * @date 29/12/2023 - 11:54:36
   * @type {NgForm}
   */
  @ViewChild('formularioBuscaPesquisa') formularioBuscaPesquisa: NgForm;
  /**
   * Formulario de dados para nova pesquisa
   * @date 29/12/2023 - 11:54:36
   * @type {NgForm}
   */
  @ViewChild('formularioNovaPesquisa') formularioNovaPesquisa: NgForm;
  /**
   * Formulario de dados para novo requisito
   * @date 29/12/2023 - 11:54:36
   * @type {NgForm}
   */
  @ViewChild('formularioNovoRequisito') formularioNovoRequisito: NgForm;
  /**
   * Controle do Modal(DOM)
   * @date 29/12/2023 - 11:54:36
   * @type {ElementRef}
   */
  @ViewChild('fechaNovaPesquisa') fechaNovaPesquisa: ElementRef;
  /**
   * Controle do Modal(DOM)
   * @date 29/12/2023 - 11:54:36
   * @type {ElementRef}
   */
  @ViewChild('fechaEditaPesquisa') fechaEditaPesquisa: ElementRef;
  /**
   * Controle do Modal(DOM)
   * @date 29/12/2023 - 11:54:36
   * @type {ElementRef}
   */
  @ViewChild('fechaDeletaPesquisa') fechaDeletaPesquisa: ElementRef;
  /**
   * Controle do Modal(DOM)
   * @date 29/12/2023 - 11:54:36
   * @type {ElementRef}
   */
  @ViewChild('fechaNovoRequisito') fechaNovoRequisito: ElementRef;
  /**
   * Controle do Modal(DOM)
   * @date 29/12/2023 - 11:54:36
   * @type {ElementRef}
   */
  @ViewChild('fechaAtualizaRequisito') fechaAtualizaRequisito: ElementRef;
  /**
   * Controle do Modal(DOM)
   * @date 29/12/2023 - 11:54:36
   * @type {ElementRef}
   */
  @ViewChild('fechaDeletaRequisito') fechaDeletaRequisito: ElementRef;
  /**
   * Controle do Modal(DOM)
   * @date 29/12/2023 - 11:54:36
   * @type {ElementRef}
   */
  @ViewChild('fechaAssociaProjeto') fechaAssociaProjeto: ElementRef;
  /**
   * Controle do Modal(DOM)
   * @date 29/12/2023 - 11:54:36
   * @type {ElementRef}
   */
  @ViewChild('fechaDesassociaProjeto') fechaDesassociaProjeto: ElementRef;
  /**
   * Controle do Modal(DOM)
   * @date 29/12/2023 - 11:54:36
   * @type {ElementRef}
   */
  @ViewChild('fechaAssociaAnotacoes') fechaAssociaAnotacoes: ElementRef;
  /**
   * Controle do Modal(DOM)
   * @date 29/12/2023 - 11:54:36
   * @type {ElementRef}
   */
  @ViewChild('fechaDesassociaAnotacoes') fechaDesassociaAnotacoes: ElementRef;

  /**
   * CCria uma instancia de PesquisasComponent.
   * @date 29/12/2023 - 11:54:36
   * @constructor
   * @param {PesquisaService} pesquisaService
   * @param {RequisitoService} requisitoService
   * @param {ProjetoService} projetoService
   * @param {AnotacaoService} anotacaoServices
   */
  constructor(
    private pesquisaService: PesquisaService,
    private projetoService: ProjetoService,
    private anotacaoServices: AnotacaoService,
    private currencyPipe: CurrencyPipe
  ) {}

  /**
   * Inicializa o componente.
   * Chamado automaticamente após a criação do componente.
   * @function
   * @date 29/12/2023 - 11:54:36
   */
  ngOnInit() {
    this.listaDePesquisas(0);
  }

  /**
   * Limpa variaveis de mensagems
   * @function
   * @date 29/12/2023 - 11:54:36
   */
  limpaMensagens() {
    this.mensagemDeErro = null;
    this.mensagemDeSucesso = null;
    this.mensagemDeErroModal = null;
    this.mensagemDeSucessoModal = null;
  }

  /**
   * Conta e retorna a quantidade de paginas de uma lista
   * @function
   * @date 29/12/2023 - 11:54:36
   * @param {number} totalPages
   * @returns {number[]}
   */
  pegaArrayDePaginas(totalPages: number): number[] {
    return Array.from({ length: totalPages }, (_, index) => index);
  }

  /**
   * Controle do metodo da busca de pesquisas
   * @function
   * @date 29/12/2023 - 11:54:36
   */
  filtro() {
    if (
      this.formularioBuscaPesquisa.value.search_input == null ||
      this.formularioBuscaPesquisa.value.search_input == undefined ||
      this.formularioBuscaPesquisa.value.search_input == ''
    ) {
      return this.listaDePesquisas(0);
    }

    switch (this.filtroSelecionado) {
      case 'titulo':
        this.pesquisaPeloTitulo(0);
        break;
      case 'id':
        this.pesquisaPeloId();
        break;
      default:
        this.listaDePesquisas(0);
        break;
    }
  }

  /**
   * Funcao de busca da lista de pesquisas
   * @date 29/12/2023 - 11:54:36
   * @param {number} pagina
   */
  listaDePesquisas(pagina: number) {
    this.carregandoLista = true;
    this.pesquisaTitulo = false;
    this.limpaMensagens();
    this.pesquisaService.listaDePesquisas(pagina).subscribe(
      (data) => {
        if (data.content.length < 1) {
          this.mensagemDeSucesso = 'Nenhuma pesquisa encontrada...';
        }
        this.dadosPesquisa = data;
        this.carregandoLista = false;
      },
      (error) => {
        this.carregandoLista = false;
        console.error(error);
        this.mensagemDeErro = 'Oops... Algo de errado aconteceu';
      }
    );
  }

  /**
   * Funcao de busca da lista de pesquisas pelo titulo
   * @date 29/12/2023 - 11:54:36
   * @param {number} pagina
   */
  pesquisaPeloTitulo(pagina: number) {
    this.carregandoLista = true;
    this.pesquisaTitulo = true;
    this.limpaMensagens();
    this.pesquisaService
      .procuraPeloTitulo(
        this.formularioBuscaPesquisa.value.search_input,
        pagina
      )
      .subscribe(
        (data) => {
          if (data.content.length < 1) {
            this.mensagemDeSucesso = 'Nenhuma pesquisa encontrada...';
          }
          this.dadosPesquisa = data;
          this.carregandoLista = false;
        },
        (error) => {
          console.error(error);
          this.mensagemDeErro = 'Oops... Algo de errado aconteceu';
          this.carregandoLista = false;
        }
      );
  }

  /**
   * Funcao de busca de pesquisas pelo id
   * @date 29/12/2023 - 11:54:36
   */
  pesquisaPeloId() {
    this.carregandoLista = true;
    this.limpaMensagens();
    this.pesquisaService
      .procuraPeloId(this.formularioBuscaPesquisa.value.search_input, 0)
      .subscribe(
        (data) => {
          if (data.content.length < 1) {
            this.mensagemDeSucesso = 'Nenhuma pesquisa encontrada...';
          }
          this.dadosPesquisa = data;
          this.carregandoLista = false;
        },
        (error) => {
          this.carregandoLista = false;
          console.error(error);
          this.mensagemDeErro = 'Oops... Algo de errado aconteceu';
        }
      );
  }

  /**
   * Funcao de contar os dados do requisito para o grafico
   * @date 29/12/2023 - 11:54:36
   * @param {*} dados
   */
  conta_os_dados_grafico_requisito_e_apresenta(requisitos: any) {
    this.legendas_grafico_requisito = [];
    this.dados_grafico_requisito = [];
    this.valor_total_requisito = 0;

    for (let requisito of requisitos) {
      this.legendas_grafico_requisito.push(requisito.item);
      this.dados_grafico_requisito.push(requisito.preco);
      this.valor_total_requisito += requisito.preco;
    }

    this.chartOptionsRequisitos = {
      series: this.dados_grafico_requisito,
      chart: {
        width: '100%',
        height: 380,
        type: 'donut',
      },
      labels: this.legendas_grafico_requisito,
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
      dataLabels: {
        enabled: true,
        style: {
          colors: ['#FFF'], // Cor da legenda
        },
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: (value: number) =>
            this.currencyPipe.transform(value, 'BRL', 'symbol', '1.2-2'),
        },
      },
      legend: {
        labels: {
          colors: '#FF6100', // Cor do texto da legenda
        },
      },
    };
  }

  /**
   * Funcao de contar os dados de projetos para o grafico
   * @date 29/12/2023 - 11:54:36
   * @param {*} dados
   */
  conta_os_dados_grafico_projeto_e_apresenta(dados: any[]) {
    this.dados_grafico_projeto = [];
    let aberto = 0;
    let em_andamento = 0;
    let finalizado = 0;
    let outros = 0;
    for (let dado of dados) {
      switch (dado.status) {
        case 'Aberto':
          aberto++;
          break;
        case 'Em andamento':
          em_andamento++;
          break;
        case 'Finalizado':
          finalizado++;
          break;
        default:
          outros++;
          break;
      }
    }
    this.dados_grafico_projeto = [aberto,em_andamento,finalizado,outros];

    this.chartOptionsProjetos = {
      series: this.dados_grafico_projeto,
      chart: {
        width: '100%',
        height: 380,
        type: 'donut',
      },
      labels: this.legendas_grafico_projeto,
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
      dataLabels: {
        enabled: true,
        style: {
          colors: ['#FFF'], // Cor da legenda
        },
      },
      tooltip: {
        enabled: true,
      },
      legend: {
        labels: {
          colors: '#FF6100', // Cor do texto da legenda
        },
      },
    };
  }

  /**
   * Funcao de criar uma nova pesquisa
   * @function
   * @date 29/12/2023 - 11:54:36
   */
  novaPesquisa() {
    this.carregando = true;
    this.limpaMensagens();
    this.pesquisaService
      .novaPesquisa({
        id_pesquisa: null,
        pesquisa_titulo: this.formularioNovaPesquisa.value.titulo.trim(),
        pesquisa_descricao: this.formularioNovaPesquisa.value.descricao.trim(),
        status: 'Aberto'
      }).subscribe(
        (data) => {
          this.dadosPesquisa.content.push(data);
          console.log(data);
          this.conteudoPesquisa = data;
          this.index_pesquisa = null;
          this.carregando = false;
          this.mensagemDeSucessoModal = 'Pesquisa adicionada com sucesso...';
          setTimeout(() => {
            this.formularioNovaPesquisa.resetForm();
            this.mensagemDeSucessoModal = null;
            this.fechaNovaPesquisa.nativeElement.click();
          }, 1500);
        },
        (error) => {
          this.carregando = false;
          console.error(error);
          this.mensagemDeErro = 'Oops... Algo de errado aconteceu';
        }
      );
  }

  /**
   * Funcao de atualizar uma pesquisa
   * @function
   * @date 29/12/2023 - 11:54:36
   */
  atualizaPesquisa() {
    this.carregando = true;
    this.limpaMensagens();
    this.pesquisaService
      .editaPesquisa({
        id_pesquisa: this.id_pesquisa,
        status: this.novo_status_pesquisa,
        pesquisa_titulo: this.novo_titulo_pesquisa.trim(),
        pesquisa_descricao: this.nova_descricao_pesquisa.trim(),
      })
      .subscribe(
        (data) => {
          this.conteudoPesquisa.status = this.novo_status_pesquisa;
          this.conteudoPesquisa.pesquisa_titulo = this.novo_titulo_pesquisa;
          this.conteudoPesquisa.pesquisa_descricao = this.nova_descricao_pesquisa;
          this.novo_status_pesquisa = null;
          this.novo_titulo_pesquisa = null;
          this.nova_descricao_pesquisa = null;
          this.carregando = false;
          this.mensagemDeSucessoModal = 'Pesquisa atualizada com sucesso...';
          setTimeout(() => {
            this.mensagemDeSucessoModal = null;
            this.fechaEditaPesquisa.nativeElement.click();
          }, 1500);
        },
        (error) => {
          this.carregando = false;
          console.error(error);
          this.mensagemDeErro = 'Oops... Algo de errado aconteceu';
        }
      );
  }

  /**
   * Funcao de deletar uma pesquisa
   * @function
   * @date 29/12/2023 - 11:54:36
   */
  deletaPesquisa() {
    this.carregando = true;
    this.limpaMensagens();
    this.pesquisaService.deletaPesquisa(this.id_pesquisa).subscribe(
      (data) => {
        this.dadosPesquisa.content.splice(this.index_pesquisa, 1);
        this.conteudoPesquisa = null;
        this.index_pesquisa = null;
        this.carregando = false;
        this.mensagemDeSucessoModal = 'Pesquisa excluída com sucesso...';
        setTimeout(() => {
          this.mensagemDeSucessoModal = null;
          this.fechaDeletaPesquisa.nativeElement.click();
        }, 1000);
      },
      (error) => {
        this.carregando = false;
        console.error(error);
        this.mensagemDeErro = 'Oops... Algo de errado aconteceu';
      }
    );
  }

  /**
   * Funcao de criar um novo requisito
   * @function
   * @date 29/12/2023 - 11:54:36
   */
  novoRequisito() {
    this.limpaMensagens();
    this.carregando = true;
    this.pesquisaService
      .novoRequisito({
        id_requisito: null,
        item: this.formularioNovoRequisito.value.item.trim(),
        data_criacao: null,
        preco: this.formularioNovoRequisito.value.preco,
        fk_pesquisa: this.id_pesquisa
      }).subscribe(
        (data) => {
          this.conteudoPesquisa.requisito.push(data);
          this.carregando = false;
          this.conta_os_dados_grafico_requisito_e_apresenta(this.conteudoPesquisa.requisito);
          this.mensagemDeSucessoModal = 'Requisito adicionado com sucesso...';
          setTimeout(() => {
            this.formularioNovoRequisito.resetForm();
            this.mensagemDeSucessoModal = null;
            this.fechaNovoRequisito.nativeElement.click();
          }, 1500);
        },
        (error) => {
          this.carregando = false;
          console.error(error);
          this.mensagemDeErroModal = 'Oops... Algo de errado aconteceu';
        }
      );
  }

  /**
   * Funcao de atualizar um requisito
   * @function
   * @date 29/12/2023 - 11:54:36
   */
  atualizaRequisito() {
    this.limpaMensagens();
    this.carregando = true;
    this.pesquisaService
      .atualizaRequisito({
        id_requisito: this.id_requisito,
        item: this.item_requisito,
        preco: this.preco_requisito
      })
      .subscribe(
        (data) => {
          this.conteudoPesquisa.requisito[this.index_requisito].item =
            this.item_requisito;
          this.conteudoPesquisa.requisito[this.index_requisito].preco =
            this.preco_requisito;
            this.carregando = false;
            this.conta_os_dados_grafico_requisito_e_apresenta(this.conteudoPesquisa.requisito);
          this.mensagemDeSucessoModal = 'Requisito atualizado com sucesso...';
          setTimeout(() => {
            this.fechaAtualizaRequisito.nativeElement.click();
            this.mensagemDeSucessoModal = null;
          }, 1500);
        },
        (error) => {
          this.carregando = false;
          console.error(error);
          this.mensagemDeErroModal = 'Oops... Algo de errado aconteceu';
        }
      );
  }

  /**
   * Funcao de deletar um requisito
   * @date 29/12/2023 - 11:54:36
   */
  deletaRequisito() {
    this.carregando = true;
    this.limpaMensagens();
    this.pesquisaService
      .deletaRequisito(this.id_requisito)
      .subscribe(
        (data) => {
          this.conteudoPesquisa.requisito.splice(this.index_requisito, 1);
          this.conta_os_dados_grafico_requisito_e_apresenta(this.conteudoPesquisa.requisito);
          this.index_requisito = null;
          this.carregando = false;
          this.mensagemDeSucessoModal = 'Requisito deletado com sucesso...';
          setTimeout(() => {
            this.fechaDeletaRequisito.nativeElement.click();
            this.mensagemDeSucessoModal = null;
          }, 1500);
        },
        (error) => {
          this.carregando = false;
          console.error(error);
          this.mensagemDeErroModal = 'Oops... Algo de errado aconteceu';
        }
      );
  }

  /**
   * Funcao de pegar os projetos não associados
   * @function
   * @date 29/12/2023 - 11:54:36
   */
  projetosNaoAssociados() {
    this.carregando_lista_projeto = true;
    this.limpaMensagens();
    this.projetoService.projetosNaoAssociados(this.id_pesquisa).subscribe(
      (data) => {
        this.carregando_lista_projeto = false;
        if (data.length <= 0) {
          this.mensagemDeSucessoModal = 'Nenhuma pesquisa encontrada...';
          this.lista_projetos_nao_associados = data;
        } else {
          this.lista_projetos_nao_associados = data;
        }
      },
      (error) => {
        this.carregando_lista_projeto = false;
        console.error(error);
        this.mensagemDeErroModal = 'Oops... Algo de errado aconteceu';
      }
    );
  }

  /**
   * Funcao de associar os projetos a pesquisa
   * @function
   * @date 29/12/2023 - 11:54:36
   */
  associaProjetoAPesquisa() {
    this.carregando = true;
    this.limpaMensagens();
    this.projetoService
      .associarProjeto(this.id_pesquisa, this.lista_projetos_para_associar)
      .subscribe(
        (data) => {
          for (let projeto of data) {
            this.conteudoPesquisa.projeto.push(projeto);
          }
          this.conta_os_dados_grafico_projeto_e_apresenta(this.conteudoPesquisa.projeto);
          this.carregando = false;
          this.mensagemDeSucessoModal = 'Projetos associados com sucesso...';
          setTimeout(() => {
            this.mensagemDeSucessoModal = null;
            this.fechaAssociaProjeto.nativeElement.click();
          }, 1500);
        },
        (error) => {
          this.carregando = false;
          console.error(error);
          this.mensagemDeErroModal = 'Oops... Algo de errado aconteceu';
        }
      );
  }

  /**
   * Funcao de desassociar os projetos a pesquisa
   * @function
   * @date 29/12/2023 - 11:54:36
   */
  desassociaProjetoAPesquisa() {
    this.carregando = true;
    this.limpaMensagens();
    this.projetoService
      .desassociarProjeto(this.id_pesquisa, this.id_projeto)
      .subscribe(
        (data) => {
          this.conteudoPesquisa.projeto.splice(this.index_projeto, 1);
          this.conta_os_dados_grafico_projeto_e_apresenta(this.conteudoPesquisa.projeto);
          this.index_projeto = null;
          this.carregando = false;
          this.mensagemDeSucessoModal = 'Projeto desassociado com sucesso...';
          setTimeout(() => {
            this.mensagemDeSucessoModal = null;
            this.fechaDesassociaProjeto.nativeElement.click();
          }, 1500);
        },
        (error) => {
          this.carregando = false;
          console.error(error);
          this.mensagemDeErroModal = 'Oops... Algo de errado aconteceu';
        }
      );
  }

  /**
   * Funcao de pegar as anotacoes não associados
   * @function
   * @date 29/12/2023 - 11:54:36
   */
  anotacoesNaoAssociadas() {
    this.carregando_lista_anotacao = true;
    this.limpaMensagens();
    this.anotacaoServices
      .anotacoesNaoAssociadasPesquisa(this.id_pesquisa)
      .subscribe(
        (data) => {
          this.carregando_lista_anotacao = false;
          if (data.length <= 0) {
            this.mensagemDeSucessoModal = 'Nenhuma anotação encontrada...';
            this.lista_anotacao_nao_associados = data;
          } else {
            this.lista_anotacao_nao_associados = data;
          }
        },
        (error) => {
          this.carregando_lista_anotacao = false;
          console.error(error);
          this.mensagemDeErroModal = 'Oops... Algo de errado aconteceu';
        }
      );
  }

  /**
   * Funcao de associar as anotacoes da pesquisa
   * @function
   * @date 29/12/2023 - 11:54:36
   */
  associarAnotacoes() {
    this.carregando = true;
    this.limpaMensagens();
    this.anotacaoServices
      .associarAnotacoesPesquisa(this.id_pesquisa, this.lista_anotacao_para_associar)
      .subscribe(
        (data) => {
          for (let Anotacao of data) {
            this.conteudoPesquisa.anotacao.push(Anotacao);
          }
          this.carregando = false;
          this.mensagemDeSucessoModal = 'Anotações associadas com sucesso...';
          setTimeout(() => {
            this.mensagemDeSucessoModal = null;
            this.fechaAssociaAnotacoes.nativeElement.click();
          }, 1500);
        },
        (error) => {
          this.carregando = false;
          console.error(error);
          this.mensagemDeErroModal = 'Oops... Algo de errado aconteceu';
        }
      );
  }

  /**
   * Funcao de desassociar as anotacoes da pesquisa
   * @function
   * @date 29/12/2023 - 11:54:36
   */
  desassociarAnotacoes() {
    this.carregando = true;
    this.limpaMensagens();
    this.anotacaoServices
      .desassociarAnotacoesPesquisa(
        this.id_pesquisa,
        this.id_anotacao
      )
      .subscribe(
        (data) => {
          this.conteudoPesquisa.anotacao.splice(this.index_anotacao, 1);
          this.index_anotacao = null;
          this.carregando = false;
          this.mensagemDeSucessoModal = 'Anotação desassociada com sucesso...';
          setTimeout(() => {
            this.mensagemDeSucessoModal = null;
            this.fechaDesassociaAnotacoes.nativeElement.click();
          }, 1500);
        },
        (error) => {
          this.carregando = false;
          console.error(error);
          this.mensagemDeErroModal = 'Oops... Algo de errado aconteceu';
        }
      );
  }
}
