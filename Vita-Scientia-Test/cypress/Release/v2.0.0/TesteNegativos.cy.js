/// <reference types="cypress"/>

let id_pesquisa;

describe("Release:V2.0.0 - Testes functionais negativos", () => {
  beforeEach("Efetuar login no sistema", () => {
    cy.viewport(1200, 800);
    cy.visit("Login");
    cy.fixture("Usuarios.json").then((dados) => {
      cy.efetuarLogin(dados[0].email, dados[0].senha);
    });
  });

  after("Limpa dados do sistema", () => {
    cy.task(
      "queryDb",
      `DELETE FROM Pesquisa WHERE id_pesquisa = ${id_pesquisa}`
    );
  });

  it("Usuario não consegue cria uma anotacao dados faltantes", () => {
    cy.acessaMenu("Anotações");
    cy.get("#novaAnotacao").click();
    cy.get("#criaAnotacaoModal").then(($el) => {
      cy.wait(500);
      cy.wrap($el).find("#titulo").type("Titulo anotacao");
      cy.wrap($el).find("#salvarAnotacaoBtn").should("be.disabled");
    });
  });

  it("Usuario não consegue cria um projeto dados faltantes", () => {
    cy.acessaMenu("Projetos");
    cy.get("#novoProjeto").click();
    cy.get("#modalNovoProjeto").then(($el) => {
      cy.wait(500);
      cy.wrap($el).find("#descricao").type("Descricao projeto");
      cy.wrap($el).find("#salvarProjetoBtn").should("be.disabled");
    });
  });

  it("Usuario não consegue cria uma pesquisa dados faltantes", () => {
    cy.acessaMenu("Pesquisas");
    cy.get("#novaPesquisa").click();
    cy.get("#modalNovaPesquisa").then(($el) => {
      cy.wait(500);
      cy.wrap($el).find("#titulo").type("Titulo pesquisa");
      cy.wrap($el).find("#salvarPesquisaBtn").should("be.disabled");
    });
  });

  it("Usuario não consegue cria um requisito com dados faltantes", () => {
    cy.acessaMenu("Pesquisas");
    cy.criaNovaPesquisa();
    cy.get("#conteudo_pesquisa").then(($el) => {
      let tituloBruto = $el.find("#pesquisa_titulo").text();
      let partes = tituloBruto.split(" - ");
      id_pesquisa = parseInt(partes[0].replace("#PQS", "").trim());
      cy.wrap($el).find("#novo_requisito_btn").click();
      cy.fixture("Requisitos.json").then((dados) => {
        cy.get("#novoRequisitoModal").then(($el) => {
          cy.wait(300);
          cy.wrap($el).find("#preco").type(dados[0].preco);
          cy.get("#salvarRequisito").should("be.disabled");
        });
      });
    });
  });

});
