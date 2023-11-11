/// <reference types="cypress" />

describe("Login page tests", () => {

  beforeEach(() => {
    cy.visit("http://localhost:4200/Login");
  });

  afterEach(() => {
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.clearAllCookies();
  });

  it("Sistema apresenta mensagem de erro ao tentar logar com email/senha incorreta", () => {
    cy.get("#username").type("notauser@outlook.com");
    cy.get("#password").type("wrongpassword");
    cy.get("#login").click();

    cy.get("#alert").should("contain.text", "Usuario/Senha está incorreta...");
    cy.url().should("not.be.eq", "http://localhost:4200/Home");
  });

  it("Sistema apresenta a pagina HOME ao logar com sucesso", () => {
    cy.get("#username").type("TestVitaScientia@outlook.com");
    cy.get("#password").type("Welcome@123");
    cy.get("#login").click();
    
    cy.url().should("be.eq", "http://localhost:4200/Home");
  });

  
});
