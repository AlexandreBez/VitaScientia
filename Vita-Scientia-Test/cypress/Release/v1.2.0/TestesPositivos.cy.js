/// <reference types="cypress"/>

const email = "TestVitaScientia@outlook.com";
const senha = "Welcome@1234";
const novaSenha = "Welcome@12345"

describe("Release:V1.2.0-Teste Funcional-Válida se usuario consegue logar,deslogar e resetar a propria senha com sucesso", () => {
  
  beforeEach(() => {
    cy.visit("Login");
  });

  it("TC01-Usuario loga e desloga do sistema com sucesso", () => {
    cy.efetuarLogin(email, senha);
    cy.url().should("be.eq", "http://localhost:4200/Home");
    cy.get("#logout").click();
    cy.url().should("be.eq", "http://localhost:4200/Login");
  });

  it("TC02-Usuario reseta sua senha de acesso no sistema com sucesso", () => {
    cy.resetaSenhaDoUsuario(email,novaSenha);
    cy.task('queryDb',`SELECT token,expiracao_token FROM USUARIOS WHERE EMAIL="${email}"`).then(resultado =>{
        expect(resultado[0].token).be.null;
        expect(resultado[0].expiracao_token).be.null;
    });
    cy.efetuarLogin(email, novaSenha);
  });

});
