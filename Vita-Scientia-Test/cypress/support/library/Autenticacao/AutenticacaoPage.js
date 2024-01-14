// ***********************************************
//! Reutilizacao de codigos Autenticacao
// ***********************************************
import './AutenticacaoDB'

Cypress.Commands.add("efetuarLogin", (email, senha) => {
  cy.get("#email").type(email);
  cy.get("#senha").type(senha);
  cy.get("#entrar").click();
});

Cypress.Commands.add("resetaSenhaDoUsuario", (email, novaSenha) => {
  let token = '';
  cy.get("#recuperaSenhaLink").click();
  cy.get("#email").type(email);
  cy.get("#recuperaEmailBtn").click();
  cy.get("#alert-sucesso").should("contain.text", "Email enviado com sucesso...");
  cy.pegaTokenGerado(email).then(resultado => {
    cy.visit(`ResetaSenha/${resultado[0].token}`);
  });
  cy.get("#novaSenha").type(novaSenha);
  cy.get("#confirmaSenha").type(novaSenha);
  cy.get("#atualizaSenhaBtn").click();
  cy.get("#alert").should("contain.text", "Senha alterada com sucesso...");
});
