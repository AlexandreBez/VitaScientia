// ***********************************************
//! Reutilizacao de codigos Requisitos
// ***********************************************

Cypress.Commands.add("criaNovoRequisito", () => {
  cy.get("#novo_requisito_btn").click();
  cy.fixture("Requisitos.json").then((dados) => {
    cy.get("#novoRequisitoModal").then(($el) => {
      cy.wait(500);
      cy.wrap($el).find("#item").type(dados[0].item);
      cy.wait(300);
      cy.wrap($el).find("#preco").type(dados[0].preco);
      cy.get("#salvarRequisito").click();
      cy.wrap($el)
        .find("#alerta-sucesso")
        .contains("Requisito adicionado com sucesso...");
    });
  });
  cy.wait(1500);
});

Cypress.Commands.add("atualizaRequisito", () => {
  cy.get("#atualizaRequisitoModal").then(($el) => {
    cy.fixture("Requisitos.json").then((dado) => {
      cy.wait(500);
      cy.wrap($el).find("#item").clear().type(dado[1].item);
      cy.wait(300);
      cy.wrap($el).find("#preco").clear().type(dado[1].preco);
      cy.wrap($el).find(".btn-primary").click();
      cy.wrap($el)
        .find(".alert-info")
        .contains("Requisito atualizado com sucesso...");
    });
  });
  cy.wait(1500);
});

Cypress.Commands.add("deletaRequisito", () => {
  cy.get("#deletaRequisitoModal").then(($el) => {
    cy.wrap($el).find(".btn-danger").click();
    cy.wrap($el);
    cy.get(".alert").contains("Requisito deletado com sucesso...");
  });
  cy.wait(1500);
});
