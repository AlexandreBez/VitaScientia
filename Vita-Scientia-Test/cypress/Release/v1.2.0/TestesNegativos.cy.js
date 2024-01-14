/// <reference types="cypress"/>
import moment from 'moment';

const email = "TestVitaScientia@outlook.com";

describe("Release:V1.2.0-Teste Funcional-Válida se usuario não consegue logar,deslogar e resetar a propria senha com dados inválidos e campos vazios", () => {
  beforeEach(() => {
    cy.visit("Login");
    const deleta_token = `UPDATE USUARIOS SET EXPIRACAO_TOKEN = null, TOKEN = null WHERE EMAIL="${email}"`;
    cy.task("queryDb", deleta_token);
  });

  it("TC01-Sistema não permite a entrada do usuario com dados inválidos", () => {
    cy.efetuarLogin("teste@email.com", "teste_email");
    cy.get("#alert").should("contain.text", "Usuario/Senha incorreta...");
    cy.url().should("not.be.eq", "Home");
  });

  it("TC02-Sistema não envia email para resetar a senha de acesso para um email inválido/inexistente/dados vazios", () => {
    const query = `SELECT token,expiracao_token FROM USUARIOS WHERE EMAIL="${email}"`;

    cy.get("#recuperaSenhaLink").click();
    cy.get("#email").type("email");

    cy.get("#inputErrorMsg").should("contain.text", "Email inválido....");
    cy.get("#recuperaEmailBtn").should("be.disabled");

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

  it("TC03-Sistema apresenta mensagem de erro ao tentar acessar a página com um token inválido", () => {
    cy.visit("ResetaSenha/125456498749848546565653212");
    cy.get("h2").should("have.text", "Token inválido....");
  });

  it("TC04-Sistema apresenta mensagem de erro ao tentar acessar a página com um token expirado", () => {
    const query = `UPDATE USUARIOS SET EXPIRACAO_TOKEN = '1999-01-01 10:10:10.00', TOKEN = '125456498749848546565653212' WHERE EMAIL="${email}"`;
    cy.task("queryDb", query);
    cy.visit("ResetaSenha/125456498749848546565653212");
    cy.get("h2").should("have.text", "Token expirado....");
  });

  it("TC05-Sistema não permite usuario alterar a senha sem que tenha com os requisitos faltantes", () => {
    const nova_expiracao_token = moment().add(1, "hour").format("YYYY-MM-DD HH:mm:ss");
    const query = `UPDATE USUARIOS SET EXPIRACAO_TOKEN = '${nova_expiracao_token}', TOKEN = '125456498749848546565653212' WHERE EMAIL="${email}"`;
    cy.task("queryDb", query);

    cy.visit("ResetaSenha/125456498749848546565653212");

    cy.get("#atualizaSenhaBtn").should("be.disabled");

    cy.get("#novaSenha").type("senha");
    cy.get("#confirmaSenha").type("senhadiff");
    cy.get(".help-block").should("contain.text", "As senhas não coincidem*");

    cy.get(".bi-x-circle").each(($el, index, $list) => {
      cy.wrap($el).should("be.visible");
    });
    cy.get("#atualizaSenhaBtn").should("be.disabled");
    const deleta_token = `UPDATE USUARIOS SET EXPIRACAO_TOKEN = null, TOKEN = null WHERE EMAIL="${email}"`;
    cy.task("queryDb", deleta_token);
  });
});
