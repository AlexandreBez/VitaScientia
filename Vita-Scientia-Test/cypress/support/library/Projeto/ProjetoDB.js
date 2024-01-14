// ***********************************************
//! Reutilizacao de codigos para o Banco de dados
// ***********************************************

Cypress.Commands.add("SelectProjetoDB", (id_projeto) => {
    let query = `SELECT projeto_titulo,projeto_descricao FROM projeto WHERE id_projeto = ${id_projeto}`;
    return cy.task('queryDb', query);
});

Cypress.Commands.add("SelectProjetoPesquisaDB", (id_projeto) => {
    let query = `SELECT fk_pesquisa,fk_projeto FROM projeto_pesquisa WHERE fk_projeto = ${id_projeto}`;
    return cy.task('queryDb', query);
});