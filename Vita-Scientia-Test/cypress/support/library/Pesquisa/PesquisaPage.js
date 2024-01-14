// ***********************************************
//! Reutilizacao de codigos Anotacao
// ***********************************************

Cypress.Commands.add("criaNovaPesquisa", () => {
  cy.get("#novaPesquisa").click();
  cy.fixture("Pesquisa.json").then((dados) => {
    cy.get("#modalNovaPesquisa").then(($el) => {
      cy.wait(500);
      cy.wrap($el).find("#titulo").type(dados[0].titulo);
      cy.wait(300);
      cy.wrap($el).find("#descricao").type(dados[0].descricao);
      cy.wrap($el).find("#salvarPesquisaBtn").click();
      cy.wrap($el)
        .find(".alert-info")
        .contains("Pesquisa adicionada com sucesso...");
    });
  });
  cy.wait(1500);
});

Cypress.Commands.add("procuraPesquisaPeloTitulo", (titulo) => {
  cy.get("#filtro").click();
  cy.get(".dropdown-menu").then(($el) => {
    cy.wrap($el).find("#titulo").click();
  });
  cy.get("input[type='text'][id='search_input']").type(titulo);
  cy.get("#search_btn").click();
});

Cypress.Commands.add("procuraPesquisaPeloId", (id) => {
  cy.get("#filtro").click();
  cy.get(".dropdown-menu").then(($el) => {
    cy.wrap($el).find("#id").click();
  });
  cy.get("input[type='number'][id='search_input']").type(id);
  cy.get("#search_btn").click();
});

Cypress.Commands.add("editaPesquisa", () => {
  cy.get("#atualiza_pesquisa").click();
  cy.fixture("Pesquisa.json").then((dado) => {
    cy.get('#modalAtualizaPesquisa').then( $el => {
      cy.wrap($el).find("#titulo").clear();
      cy.wrap($el).find("#descricao").clear();
      cy.wait(500);
      cy.wrap($el).find("#status").select("Análisando");
      cy.wait(300);
      cy.wrap($el).find("#titulo").type(dado[1].titulo);
      cy.wait(300);
      cy.wrap($el).find("#descricao").type(dado[1].descricao);
      cy.wrap($el).find("#atualizarPesquisaBtn").click();
      cy.wrap($el).find(".alert-info").contains("Pesquisa atualizada com sucesso...");
    })
  });
  cy.wait(1500);
});

Cypress.Commands.add("deletaPesquisa", (id) => {
  cy.fixture("Pesquisa.json").then((dado) => {
    cy.procuraPesquisaPeloTitulo(dado[1].titulo);
    cy.get("#lista-pesquisa > li").each(($el) => {
      if ($el.text().includes("#PQS" + id + " - " + dado[1].titulo)) {
        cy.get("#deleta_pesquisa_" + id).should("be.disabled");
        cy.wrap($el).click();
        cy.get("#deleta_pesquisa_" + id).click();
      }
    });
    cy.get("#modalDeletaPesquisa").then(($el) => {
      cy.wrap($el).find(".modal-footer > .btn-danger").click();
      cy.wrap($el)
        .find(".alert-info")
        .should("contains.text", "Pesquisa excluída com sucesso...");
    });
  });
});

Cypress.Commands.add("associaProjeto", () => {
  cy.get("#associaProjeto").click();
  cy.fixture("Projeto.json").then((dados) => {
    cy.get("#associaProjetoModal").then(($el) => {
      cy.wrap($el).find("input").click();
      cy.wrap($el).find("input").type(dados[0].titulo);
      cy.contains(".ng-option-label", dados[0].titulo).click();
      cy.wrap($el).find(".btn-success").click();
      cy.wrap($el).find(".alert").should("contain.text", "Projetos associados com sucesso...");
    });
  });
  cy.wait(1500);
});

Cypress.Commands.add("desassociaProjeto", () => {
  cy.get("#desassociaProjetoModal").then(($el) => {
    cy.wrap($el).find(".btn-danger").click();
    cy.wrap($el).find(".alert").contains("Projeto desassociado com sucesso...");
  });
  cy.wait(1500);
});

Cypress.Commands.add("associaAnotacao", () => {
  cy.get("#associaAnotacao").click();
  cy.fixture("Anotacao.json").then((dados) => {
    cy.get('#associaAnotacaoModal').then(($el) => {
      cy.wrap($el).find("input").click();
      cy.wrap($el).find("input").type(dados[0].titulo);
      cy.contains(".ng-option-label", dados[0].titulo).click();
      cy.wrap($el).find(".btn-success").click();
      cy.wrap($el).find(".alert").should("contain.text", "Anotações associadas com sucesso...");
    });
  });
  cy.wait(1500);
});

Cypress.Commands.add("desassociaAnotacao", () => {
  cy.get("#desassociaAnotacaoModal").then(($el) => {
    cy.wrap($el).find(".modal-footer > .btn-danger").click();
    cy.wrap($el).find(".alert").contains("Anotação desassociada com sucesso...");
  });
  cy.wait(1500);
});
