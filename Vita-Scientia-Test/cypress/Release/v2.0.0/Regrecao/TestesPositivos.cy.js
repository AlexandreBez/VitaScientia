/// <reference types="cypress"/>

describe("Release:V1.2.0-Teste Funcional-Válida se usuario consegue logar,deslogar e resetar a propria senha com sucesso", () => {
  
  beforeEach(() => {
    cy.visit("Login");
  });

  it("TC01-Usuario loga e desloga do sistema com sucesso", () => {
    cy.fixture("Usuarios.json").then((dados) => {
      cy.efetuarLogin(dados[2].email, dados[2].senha);
      cy.url().should("be.eq", "http://localhost:4200/Home");
      cy.get("#logout").click();
      cy.url().should("be.eq", "http://localhost:4200/Login");
    });
  });

});
