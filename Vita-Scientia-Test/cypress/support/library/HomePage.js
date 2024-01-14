// ***********************************************
//! Reutilizacao de codigos Anotacao
// ***********************************************

Cypress.Commands.add("acessaMenu", (menu) => {
    cy.get('.container-fluid > #menu-area').each($el => {
        cy.wrap($el).click();
        cy.wrap($el).find("#"+menu).click();
    })
});