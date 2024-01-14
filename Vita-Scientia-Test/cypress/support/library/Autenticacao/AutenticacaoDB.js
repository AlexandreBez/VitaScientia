// ***********************************************
//! Reutilizacao de codigos para o Banco de dados
// ***********************************************
Cypress.Commands.add("pegaTokenGerado", (email) => {
    return cy.task("queryDb", `SELECT token FROM Usuarios WHERE email="${email}"`);
});
