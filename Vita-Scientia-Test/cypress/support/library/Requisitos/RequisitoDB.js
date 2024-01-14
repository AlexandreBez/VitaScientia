// ***********************************************
//! Reutilizacao de codigos para o Banco de dados
// ***********************************************

Cypress.Commands.add("SelectRequsitoDB", (id_pesquisa) => {
    let query = `SELECT item,preco FROM requisitos WHERE fk_pesquisa = ${id_pesquisa}`;
    return cy.task('queryDb', query);
});