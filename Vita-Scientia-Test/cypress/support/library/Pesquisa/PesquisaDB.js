// ***********************************************
//! Reutilizacao de codigos para o Banco de dados
// ***********************************************

Cypress.Commands.add("SelectPesquisaDB", (id_pesquisa) => {
    let query = `SELECT pesquisa_titulo,pesquisa_descricao FROM pesquisa WHERE id_pesquisa = ${id_pesquisa}`;
    return cy.task('queryDb', query);
});