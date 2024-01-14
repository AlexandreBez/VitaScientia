/// <reference types="cypress"/>
import moment from 'moment';

describe("Release:V2.0.0 - Testes regressivos negativos", () => {

  beforeEach("Efetuar login no sistema", () => {
    cy.viewport(1200, 800);
    cy.visit("Login");
  });

  after("Limpa dados", () => {
    cy.fixture("Usuarios.json").then((dados) => {
      const query = `UPDATE USUARIOS SET EXPIRACAO_TOKEN = NULL, TOKEN = NULL WHERE EMAIL="${dados[2].email}"`;
      cy.task("queryDb", query);
    });
  });

  it("Sistema não permite a entrada do usuario com dados inválidos", () => {
    cy.efetuarLogin("teste@email.com", "teste_email");
    cy.get("#alert").should("contain.text", "Usuario/Senha incorreta...");
    cy.url().should("not.be.eq", "Home");
  });

  it("Sistema não envia email para resetar a senha de acesso para um email inválido/inexistente ou com dados vazios", () => {
    cy.get("#recuperaSenhaLink").click();
    cy.fixture("Usuarios.json").then((dados) => {

      const query = `SELECT token,expiracao_token FROM USUARIOS WHERE EMAIL="${dados[2].email}"`;
      cy.get("#email").type("emailQualquer");
      cy.get("#inputErrorMsg").should("contain.text", "Email inválido....");
      cy.get("#recuperaEmailBtn").should("be.disabled");

      // ------------------------------------------------------------------------

      cy.get("#email").clear();
      cy.get("#email").type("email@teste.com");
      cy.get("#recuperaEmailBtn").click();
      cy.get("#alert-erro").should("contain.text", "Email não encontrado...");
      cy.get("#inputErrorMsg").should("not.exist", "Email inválido....");
      cy.get("#recuperaEmailBtn").should("not.be.disabled");
      
      cy.task("queryDb", query).then((resultado) => {
        expect(resultado[0].token).be.null;
        expect(resultado[0].expiracao_token).be.null;
      });
    });
  });

  it("Sistema apresenta mensagem de erro ao tentar acessar a página com um token inválido", () => {
    cy.visit("ResetaSenha/125456498749848546565653212");
    cy.get("h2").should("have.text", "Token inválido....");
  });

  it("Sistema apresenta mensagem de erro ao tentar acessar a página com um token expirado", () => {
    cy.fixture("Usuarios.json").then((dados) => {
      const query = `UPDATE USUARIOS SET EXPIRACAO_TOKEN = '1999-01-01 10:10:10.00', TOKEN = '125456498749848546565653212' WHERE EMAIL="${dados[2].email}"`;
      cy.task("queryDb", query);
      cy.visit("ResetaSenha/125456498749848546565653212");
      cy.get("h2").should("have.text", "Token expirado....");
    });
  });

});
