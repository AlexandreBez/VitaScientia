// ***********************************************
//! Reutilizacao de codigos para o Banco de dados
// ***********************************************

Cypress.Commands.add("SelectAnotacaoDB", (id_anotacao) => {
    let query = `SELECT anotacao_titulo,anotacao_descricao FROM anotacao WHERE id_anotacao = ${id_anotacao}`
    return cy.task('queryDb', query);
});

Cypress.Commands.add("SelectAnotacaoPesquisaDB", (id_pesquisa) => {
    let query = `SELECT fk_anotacao,fk_pesquisa FROM anotacao_pesquisa WHERE fk_pesquisa = ${id_pesquisa}`
    return cy.task('queryDb', query);
});