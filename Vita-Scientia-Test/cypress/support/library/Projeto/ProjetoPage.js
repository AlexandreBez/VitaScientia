// ***********************************************
//! Reutilizacao de codigos Anotacao
// ***********************************************

Cypress.Commands.add("criaNovoProjeto", () => {
  cy.get("#novoProjeto").click();
  cy.fixture("Projeto.json").then((dados) => {
    cy.get("#modalNovoProjeto").then(($el) => {
      cy.wait(500);
      cy.wrap($el).find("#titulo").type(dados[0].titulo);
      cy.wait(300);
      cy.wrap($el).find("#descricao").type(dados[0].descricao);
      cy.wrap($el).find("#salvarProjetoBtn").click();
      cy.wrap($el)
        .find(".alert-info")
        .contains("Projeto adicionado com sucesso...");
    });
  });
  cy.wait(1500);
});

Cypress.Commands.add("procuraProjetoPeloTitulo", (titulo) => {
  cy.get("#filtro").click();
  cy.get(".dropdown-menu").then(($el) => {
    cy.wrap($el).find("#titulo").click();
  });
  cy.get("input[type='text'][id='search_input']").type(titulo);
  cy.get("#search_btn").click();
});

Cypress.Commands.add("procuraProjetoPeloId", (id) => {
  cy.get("#filtro").click();
  cy.get(".dropdown-menu").then(($el) => {
    cy.wrap($el).find("#id").click();
  });
  cy.get("input[type='number'][id='search_input']").type(id);
  cy.get("#search_btn").click();
});

Cypress.Commands.add("editaProjeto", () => {
  cy.get('#atualiza_projeto').click();
  cy.fixture("Projeto.json").then((dado) => {
    cy.get('#modalAtualizaProjeto').then($el => {
      cy.wait(500);
      cy.wrap($el).find('#descricao').clear();
      cy.wrap($el).find('#titulo').clear();
      cy.wait(500);
      cy.wrap($el).find('#status').select("Finalizado");
      cy.wrap($el).find('#titulo').type(dado[1].titulo);
      cy.wrap($el).find('#descricao').type(dado[1].descricao);
      cy.wrap($el).find("#atualizarProjetoBtn").click();
      cy.wrap($el).find(".alert-info").contains("Projeto atualizado com sucesso...");
    })
  });
  cy.wait(1500);
});

Cypress.Commands.add("deletaProjeto", (id) => {
  cy.fixture("Projeto.json").then((dado) => {
    cy.procuraProjetoPeloTitulo(dado[1].titulo);
    cy.get("#lista-projeto > li").each(($el) => {
      if ($el.text().includes("#PJT"+id+" - "+dado[1].titulo)) {
        cy.get('#deleta_projeto_'+id).should("be.disabled");
        cy.wrap($el).click();
        cy.get('#deleta_projeto_'+id).click();
      }
    });
    cy.get('#modalDeletaProjeto').then($el => {
      cy.wrap($el).find(".modal-footer > .btn-danger").click();
      cy.wrap($el).find(".alert-info").should("contains.text","Projeto excluído com sucesso...");
    });
  })
});
