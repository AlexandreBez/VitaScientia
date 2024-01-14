import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChartComponent } from 'ng-apexcharts';
import { Anotacao } from 'src/app/global/interface/Objetos/Anotacao';
import { Pesquisa } from 'src/app/global/interface/Objetos/Pesquisa';
import { Projeto } from 'src/app/global/interface/Objetos/Projeto';
import { PaginaProjeto } from 'src/app/global/interface/Paginas/PaginaProjeto';
import { AnotacaoService } from 'src/app/global/services/Anotacao.service';
import { ProjetoService } from 'src/app/global/services/Projeto.service';
import { ChartOptions } from 'src/app/global/types/Chart.type';
/**
 * Componente possuindo as funções para a pagina pesquisa
 * @author Lucas Alexandre
 * @date 30/12/2023 - 16:45:58
 * @version 2.0.0
 * @export
 * @class ProjetosComponent
 * @typedef {ProjetosComponent}
 * ----------------------------------------
 * Ultima atualizacao:
 * @date 30/12/2023 - 16:45:58
 * @author Lucas Alexandre
 */
@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss'],
})
export class ProjetosComponent {
  //*-----------------------Variaveis globais--------------------------
  /**
   * Controle do carregamento
   * @date 30/12/2023 - 16:45:58
   * @type {boolean}
   */
  carregando = false;
  /**
   * Controle do carregamento da lista de projetos
   * @date 30/12/2023 - 16:45:58
   * @type {boolean}
   */
  carregandoLista = true;
  /**
   * Controle do filtro
   * @date 30/12/2023 - 16:45:58
   * @type {string}
   */
  filtroSelecionado: string = 'titulo';
  /**
   * Controle do filtor atraves do titulo
   * @date 30/12/2023 - 16:45:58
   * @type {boolean}
   */
  pesquisaTitulo: boolean = false;

  //*-----------------------Variaveis Projeto--------------------------
  /**
   * Armazenamento dos dados da lista de projetos
   * @date 30/12/2023 - 16:45:58
   * @type {PaginaProjeto}
   */
  dadosProjeto: PaginaProjeto = null;
  /**
   * Armazenamento dos dados do conteudo do projeto
   * @date 30/12/2023 - 16:45:58
   * @type {Projeto}
   */
  conteudoProjeto: Projeto = null;
  /**
   * Armazenamento do id do projeto
   * @date 30/12/2023 - 16:45:58
   * @type {number}
   */
  id_projeto: number;
  /**
   * Armazenamento do novo titulo do projeto
   * @date 30/12/2023 - 16:45:58
   * @type {string}
   */
  novo_titulo_projeto: string;
  /**
   * Armazenamento da nova descricao do projeto
   * @date 30/12/2023 - 16:45:58
   * @type {string}
   */
  nova_decricao_projeto: string;
  /**
   * Armazenamento do novo status do projeto
   * @date 30/12/2023 - 16:45:58
   * @type {string}
   */
  novo_status_projeto: string;
  /**
   * Armazenamento dos status do projeto
   * @date 30/12/2023 - 16:45:58
   * @type {string[]}
   */
  opcao_status_projeto: string[] = ['Aberto', 'Em andamento', 'Finalizado'];
  /**
   * Controle do index do projeto
   * @date 30/12/2023 - 16:45:58
   * @type {number}
   */
  index_projeto: number;

  //*-----------------------Variaveis Pesquisa--------------------------
  /**
   * Controle da legenda do grafico da pesquisa
   * @date 30/12/2023 - 16:45:58
   * @type {string[]}
   */
  legendas_grafico_pesquisa: string[] = [
    'Aberto',
    'Análisando',
    'Em espera',
    'Finalizado',
    'Outros',
  ];
  /**
   * Controle dos dados do grafico da pesquisa
   * @date 30/12/2023 - 16:45:58
   * @type {any[]}
   */
  dados_grafico_pesquisa: any[] = [0];
  /**
   * Armazenamento dos dados da pesquisa para visualizacao
   * @date 30/12/2023 - 16:45:58
   * @type {Pesquisa}
   */
  detalhes_pesquisa: any = [];
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
  public chartOptionsPesquisas: Partial<ChartOptions>;

  //*-----------------------Variaveis Anotacoes--------------------------
  /**
   * Armazenamento do id da anotacao
   * @date 30/12/2023 - 16:45:58
   * @type {number}
   */
  id_anotacao: number;
  /**
   * Controle do carregamento da lista de projetos não associados
   * @date 30/12/2023 - 16:45:58
   * @type {boolean}
   */
  carregando_lista_anotacoes: boolean = false;
  /**
   * Controle da lista de anotacoes não associadas
   * @date 30/12/2023 - 16:45:58
   * @type {Anotacao[]}
   */
  lista_anotacoes_nao_associadas: Anotacao[] = [];
  /**
   * Controle da lista de id de anotacoes para associar
   * @date 30/12/2023 - 16:45:58
   * @type {number[]}
   */
  lista_anotacoes_para_associar: number[] = [];
  /**
   * Controle do index da anotacao
   * @date 30/12/2023 - 16:45:58
   * @type {number}
   */
  index_anotacao: number;
  /**
   * Description placeholder
   * @date 30/12/2023 - 16:45:58
   * @type {*}
   */
  detalhes_anotacao: any = [];

  //*-----------------------Controle de mensagems--------------------------
  /**
   * Controle de mensagem de erro
   * @date 30/12/2023 - 16:45:58
   * @type {*}
   */
  mensagemDeErro: any;
  /**
   * Controle de mensagem de sucesso
   * @date 30/12/2023 - 16:45:58
   * @type {*}
   */
  mensagemDeSucesso: any;
  /**
   * Controle de mensagem de erro do modal
   * @date 30/12/2023 - 16:45:58
   * @type {*}
   */
  mensagemDeErroModal: any;
  /**
   * Controle de mensagem de sucesso do modal
   * @date 30/12/2023 - 16:45:58
   * @type {*}
   */
  mensagemDeSucessoModal: any;

  //*-----------------------manipulacao do DOM--------------------------
  /**
   * Formulario de busca do projeto
   * @date 30/12/2023 - 16:45:58
   * @type {NgForm}
   */
  @ViewChild('formularioBuscaProjeto') formularioBuscaProjeto: NgForm;
  /**
   * Formulario de dados para novo projeto
   * @date 30/12/2023 - 16:45:58
   * @type {NgForm}
   */
  @ViewChild('formularioNovoProjeto') formularioNovoProjeto: NgForm;
  /**
   * Controle do Modal(DOM)
   * @date 30/12/2023 - 16:45:58
   * @type {ElementRef}
   */
  @ViewChild('fechaNovoProjeto') fechaNovoProjeto: ElementRef;
  /**
   * Controle do Modal(DOM)
   * @date 30/12/2023 - 16:45:58
   * @type {ElementRef}
   */
  @ViewChild('fechaEditaProjeto') fechaEditaProjeto: ElementRef;
  /**
   * Controle do Modal(DOM)
   * @date 30/12/2023 - 16:45:58
   * @type {ElementRef}
   */
  @ViewChild('fechaDeletaProjeto') fechaDeletaProjeto: ElementRef;
  /**
   * Controle do Modal(DOM)
   * @date 30/12/2023 - 16:45:58
   * @type {ElementRef}
   */
  @ViewChild('fechaAssociaAnotacoes') fechaAssociaAnotacoes: ElementRef;
  /**
   * Controle do Modal(DOM)
   * @date 30/12/2023 - 16:45:58
   * @type {ElementRef}
   */
  @ViewChild('fechaDesassociaAnotacoes') fechaDesassociaAnotacoes: ElementRef;

  /**
   * Cria uma instancia do ProjetosComponent.
   * @date 30/12/2023 - 16:45:58
   * @constructor
   * @param {ProjetoService} projetoService
   * @param {AnotacaoService} anotacoesServices
   */
  constructor(
    private projetoService: ProjetoService,
    private anotacoesServices: AnotacaoService
  ) {}

  /**
   * Inicializa o componente.
   * Chamado automaticamente após a criação do componente.
   * @function
   * @date 30/12/2023 - 16:45:58
   */
  ngOnInit() {
    this.listaDeProjeto(0);
  }

  /**
   * Limpa variaveis de mensagems
   * @function
   * @date 30/12/2023 - 16:45:58
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
   * @date 30/12/2023 - 16:45:58
   * @param {number} totalPages
   * @returns {number[]}
   */
  pegaArrayDePaginas(totalPages: number): number[] {
    return Array.from({ length: totalPages }, (_, index) => index);
  }

  /**
   * Controle do metodo da busca de pesquisas
   * @function
   * @date 30/12/2023 - 16:45:58
   */
  filtro() {
    if (
      this.formularioBuscaProjeto.value.search_input == null ||
      this.formularioBuscaProjeto.value.search_input == undefined ||
      this.formularioBuscaProjeto.value.search_input == ''
    ) {
      return this.listaDeProjeto(0);
    }

    switch (this.filtroSelecionado) {
      case 'titulo':
        this.pesquisaPeloTitulo(0);
        break;
      case 'id':
        this.pesquisaPeloId();
        break;
      default:
        this.listaDeProjeto(0);
        break;
    }
  }

  /**
   * Funcao de busca da lista de projetos
   * @function
   * @date 30/12/2023 - 16:45:58
   * @param {number} pagina
   */
  listaDeProjeto(pagina: number) {
    this.carregandoLista = true;
    this.pesquisaTitulo = false;
    this.limpaMensagens();
    this.projetoService.listaDeProjetos(pagina).subscribe(
      (data) => {
        if (data.content.length < 1) {
          this.mensagemDeSucesso = 'Nenhum projeto encontrado...';
        }
        this.dadosProjeto = data;
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
   * Funcao de busca da lista de projeto pelo titulo
   * @function
   * @date 30/12/2023 - 16:45:58
   * @param {number} pagina
   */
  pesquisaPeloTitulo(pagina: number) {
    this.carregandoLista = true;
    this.pesquisaTitulo = true;
    this.limpaMensagens();
    this.projetoService
      .procuraPeloTitulo(this.formularioBuscaProjeto.value.search_input, pagina)
      .subscribe(
        (data) => {
          if (data.content.length < 1) {
            this.mensagemDeSucesso = 'Nenhum projeto encontrado...';
          }
          this.dadosProjeto = data;
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
   * Funcao de busca da lista de projeto pelo id
   * @function
   * @date 30/12/2023 - 16:45:58
   */
  pesquisaPeloId() {
    this.carregandoLista = true;
    this.limpaMensagens();
    this.projetoService
      .procuraPeloId(this.formularioBuscaProjeto.value.search_input, 0)
      .subscribe(
        (data) => {
          if (data.content.length < 1) {
            this.mensagemDeSucesso = 'Nenhum projeto encontrado...';
          }
          this.dadosProjeto = data;
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
   * Funcao de contar os dados das pesquisas para o grafico
   * @function
   * @date 30/12/2023 - 16:45:58
   * @param {*} dados
   */
  conta_os_dados_grafico_pesquisa_e_apresenta(dados: any) {
    this.dados_grafico_pesquisa = [];
    let aberto = 0;
    let analisando = 0;
    let em_espera = 0;
    let finalizado = 0;
    let outros = 0;
    for (let dado of dados) {
      switch (dado.status) {
        case 'Aberto':
          aberto++;
          break;
        case 'Análisando':
          analisando++;
          break;
        case 'Em espera':
          em_espera++;
          break;
        case 'Finalizado':
          finalizado++;
          break;
        default:
          outros++;
          break;
      }
    }
    this.dados_grafico_pesquisa = [aberto, analisando, em_espera, finalizado];

    this.chartOptionsPesquisas = {
      series: this.dados_grafico_pesquisa,
      chart: {
        width: '100%',
        height: 380,
        type: 'donut',
      },
      labels: this.legendas_grafico_pesquisa,
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
   * Funcao de criar um novo projeto
   * @function
   * @date 30/12/2023 - 16:45:58
   */
  novoProjeto() {
    this.carregando = true;
    this.limpaMensagens();
    this.projetoService
      .novoProjeto({
        id_projeto: null,
        projeto_titulo: this.formularioNovoProjeto.value.titulo.trim(),
        projeto_descricao: this.formularioNovoProjeto.value.descricao.trim(),
        status: 'Aberto',
      })
      .subscribe(
        (data) => {
          this.index_projeto = null;
          this.dadosProjeto.content.push(data);
          this.conteudoProjeto = data;
          this.carregando = false;
          this.mensagemDeSucessoModal = 'Projeto adicionado com sucesso...';
          setTimeout(() => {
            this.formularioNovoProjeto.resetForm();
            this.mensagemDeSucessoModal = null;
            this.fechaNovoProjeto.nativeElement.click();
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
   * Funcao de atualizar um novo projeto
   * @function
   * @date 30/12/2023 - 16:45:58
   */
  atualizaProjeto() {
    this.carregando = true;
    this.limpaMensagens();
    this.projetoService
      .editaProjeto({
        id_projeto: this.id_projeto,
        status: this.novo_status_projeto,
        projeto_titulo: this.novo_titulo_projeto.trim(),
        projeto_descricao: this.nova_decricao_projeto.trim(),
      })
      .subscribe(
        (data) => {
          this.conteudoProjeto.status = this.novo_status_projeto;
          this.conteudoProjeto.projeto_titulo = this.novo_titulo_projeto;
          this.conteudoProjeto.projeto_descricao = this.nova_decricao_projeto;
          this.novo_status_projeto = null;
          this.novo_titulo_projeto = null;
          this.nova_decricao_projeto = null;
          this.carregando = false;
          this.mensagemDeSucessoModal = 'Projeto atualizado com sucesso...';
          setTimeout(() => {
            this.mensagemDeSucessoModal = null;
            this.fechaEditaProjeto.nativeElement.click();
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
   * Funcao de deletar um novo projeto
   * @function
   * @date 30/12/2023 - 16:45:58
   */
  deletaProjeto() {
    this.carregando = true;
    this.limpaMensagens();
    this.projetoService.deletaProjeto(this.id_projeto).subscribe(
      (data) => {
        this.dadosProjeto.content.splice(this.index_projeto, 1);
        this.conteudoProjeto = null;
        this.index_projeto = null;
        this.carregando = false;
        this.mensagemDeSucessoModal = 'Projeto excluído com sucesso...';
        setTimeout(() => {
          this.mensagemDeSucessoModal = null;
          this.fechaDeletaProjeto.nativeElement.click();
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
   * Funcao de pegar as anotacoes não associados
   * @function
   * @date 30/12/2023 - 16:45:58
   */
  anotacoesNaoAssociadas() {
    this.carregando_lista_anotacoes = true;
    this.limpaMensagens();
    this.anotacoesServices
      .anotacaoNaoAssociadosProjeto(this.id_projeto)
      .subscribe(
        (data) => {
          this.carregando_lista_anotacoes = false;
          if (data.length <= 0) {
            this.mensagemDeSucessoModal = 'Nenhuma anotação encontrada...';
            this.lista_anotacoes_nao_associadas = data;
          } else {
            this.lista_anotacoes_nao_associadas = data;
          }
        },
        (error) => {
          this.carregando_lista_anotacoes = false;
          console.error(error);
          this.mensagemDeErroModal = 'Oops... Algo de errado aconteceu';
        }
      );
  }

  /**
   * Funcao de associar as anotacoes do projeto
   * @function
   * @date 30/12/2023 - 16:45:58
   */
  associarAnotacoes() {
    this.carregando = true;
    this.limpaMensagens();
    this.anotacoesServices
      .associarAnotacoesProjeto(
        this.id_projeto,
        this.lista_anotacoes_para_associar
      )
      .subscribe(
        (data) => {
          for (let Anotacao of data) {
            this.conteudoProjeto.anotacao.push(Anotacao);
          }
          this.carregando = false;
          this.mensagemDeSucessoModal = 'Anotações associadas com sucesso';
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
   * Funcao de desassociar as anotacoes do projeto
   * @function
   * @date 30/12/2023 - 16:45:58
   */
  desassociarAnotacoes() {
    this.carregando = true;
    this.limpaMensagens();
    this.anotacoesServices
      .desassociarAnotacoesProjeto(this.id_projeto, this.id_anotacao)
      .subscribe(
        (data) => {
          this.conteudoProjeto.anotacao.splice(this.index_anotacao, 1);
          this.index_anotacao = null;
          this.carregando = false;
          this.mensagemDeSucessoModal = 'Anotação desassociada com sucesso';
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
