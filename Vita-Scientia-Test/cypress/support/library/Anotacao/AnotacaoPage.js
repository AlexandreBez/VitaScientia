// ***********************************************
//! Reutilizacao de codigos Anotacao
// ***********************************************

Cypress.Commands.add("criaNovaAnotacao", () => {
  cy.get("#novaAnotacao").click();
  cy.fixture("Anotacao.json").then((dados) => {
    cy.get("#criaAnotacaoModal").then( $el => {
      cy.wait(500);
      cy.wrap($el).find("#titulo").type(dados[0].titulo);
      cy.wait(300);
      cy.wrap($el).find("#descricao").type(dados[0].descricao);
      cy.wrap($el).find("#salvarAnotacaoBtn").click();
      cy.wrap($el).find(".alert-info").contains("Anotação adicionada com sucesso...");
    });
  });
  cy.wait(1500);
});

Cypress.Commands.add("procuraAnotacaoPeloTitulo", (titulo) => {
  cy.get("#filtro").click();
  cy.get(".dropdown-menu").then( $el => {
    cy.wrap($el).find("#titulo").click();
  });
  cy.get("input[type='text'][id='search_input']").type(titulo);
  cy.get("#search_btn").click();
});

Cypress.Commands.add("procuraAnotacaoPeloId", (id) => {
  cy.get("#filtro").click();
  cy.get(".dropdown-menu").then( $el => {
    cy.wrap($el).find("#id").click();
  });
  cy.get("input[type='number'][id='search_input']").type(id);
  cy.get("#search_btn").click();
});

Cypress.Commands.add("editaAnotacao", () => {
  cy.get('#atualiza_anotacao').click();
  cy.fixture("Anotacao.json").then((dado) => {
    cy.get('#atualizaAnotacaoModal').then( $el => {
      cy.wrap($el).find("#titulo").clear();
      cy.wrap($el).find("#descricao").clear();
      cy.wait(500);
      cy.wrap($el).find("#titulo").type(dado[1].titulo);
      cy.wait(300);
      cy.wrap($el).find("#descricao").type(dado[1].descricao);
      cy.wrap($el).find("#atualizarAnotacaoBtn").click();
      cy.wrap($el).find(".alert-info").contains("Anotação atualizada com sucesso...");
    });
  })
  cy.wait(1500);
});

Cypress.Commands.add("deletaAnotacao", (id) => {
  cy.fixture("Anotacao.json").then((dado) => {
    cy.procuraAnotacaoPeloTitulo(dado[1].titulo);
    cy.get("#lista-anotacao > li").each(($el) => {
      if ($el.text().includes("#ANT"+id+" - "+dado[1].titulo)) {
        cy.get('#deleta_anotacao_'+id).should("be.disabled");
        cy.wrap($el).click();
        cy.get('#deleta_anotacao_'+id).click();
      }
    });
    cy.get('#deletaAnotacao').then($el => {
      cy.wrap($el).find(".modal-footer > .btn-danger").click();
      cy.wrap($el).find("#alert-sucesso-modal").should("contains.text","Anotação excluída com sucesso...");
    });
  })
});