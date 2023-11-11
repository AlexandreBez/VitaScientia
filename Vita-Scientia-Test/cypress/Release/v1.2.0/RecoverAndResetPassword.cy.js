/// <reference types="cypress" />
const moment = require("moment/moment");

describe("Recover Password page tests", () => {
  const email = "TestVitaScientia@outlook.com";

  beforeEach(() => {
    cy.visit("http://localhost:4200/Login");
  });

  afterEach(() => {
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.clearAllCookies();
  });

  it("Sistema apresenta mensagem de erro ao tentar enviar email para usuario inexistente", () => {
    cy.get("#recoverPasswordLink").should("have.text", "Resetar minha senha");
    cy.get("#recoverPasswordLink").click();

    cy.url().should("be.eq", "http://localhost:4200/RecoverPassword");

    cy.get("#sendRecoverEmail").should("be.disabled");
    cy.get("#username").type("notauser@outlook.com");
    cy.get("#sendRecoverEmail").should("not.be.disabled");
    cy.get("#sendRecoverEmail").click();

    cy.get("#alert").should("contain.text", "Email não encontrado...");
  });

  it("Sistema apresenta mensagem de erro ao digitar email em formato invalido", () => {
    cy.get("#recoverPasswordLink").click();
    cy.get("#username").type("InvalidEmailTest");

    cy.get("#inputErrorMsg").should("contain.text", "Email inválido....");
    cy.get("#sendRecoverEmail").should("be.disabled");
  });

  it("Sistema apresenta mensagem de sucesso ao tentar enviar email para usuario existente", () => {
    cy.get("#recoverPasswordLink").click();
    cy.get("#username").type(email);
    cy.get("#sendRecoverEmail").click();

    cy.get("#alert").should("contain.text", "Email enviado com sucesso...");

    cy.task(
      "queryDb",
      `SELECT email, token, expiration_date FROM USERS WHERE EMAIL = '` +
        email +
        `';`
    ).then((results) => {
      let emailValue = results[0].email;

      expect(emailValue).to.be.eq(email);
      expect(results).to.not.be.null;
    });
  });

  it("Sistema apresenta pagina de erro ao tentar acessar url com token invalido", () => {
    cy.visit("http://localhost:4200/ResetPassword/125456498749848546565653212");
    cy.get("h2").should("have.text", "O token é inválido....");
  });

  it("Sistema apresenta pagina de erro ao tentar acessar url com token expirado", () => {
    const updateQuery =
      `UPDATE USERS SET EXPIRATION_DATE = '1999-01-01 10:10:10.000000' WHERE EMAIL='` +
      email +
      `';`;
    cy.task("queryDb", updateQuery);

    cy.task(
      "queryDb",
      `SELECT token FROM users WHERE email = '` + email + `';`
    ).then((result) => {
      cy.log("Query result:", result);
      const token = result[0].token;
      cy.visit("http://localhost:4200/ResetPassword/" + token);
      cy.get("h2").should("have.text", "O token está expirado....");
    });
  });

  it("Sistema apresenta pagina de erro ao tentar acessar url com token expirado", () => {
    const updateQuery =
      `UPDATE USERS SET EXPIRATION_DATE = '1999-01-01 10:10:10.000000' WHERE EMAIL='` +
      email +
      `';`;
    cy.task("queryDb", updateQuery).then(() => {
      cy.task(
        "queryDb",
        `SELECT token FROM users WHERE email = '`+email+`';`
      ).then((result) => {
        cy.log("Query result:", result);
        const token = result[0].token;
        cy.visit("http://localhost:4200/ResetPassword/" + token);
        cy.get("h2").should("have.text", "O token está expirado....");
      });
    });
  });

  it("Sistema não habilita o botao Resetar senha ao digitar uma senha que não possui os requisitos", () => {
    let dataAtual = moment();
    let dataNova = dataAtual.add(1, "hour");
    const updateQuery =
      `UPDATE USERS SET EXPIRATION_DATE = '` +
      dataNova.format("YYYY-MM-DD HH:mm:ss") +
      `' WHERE EMAIL='` +
      email +
      `';`;

    cy.task("queryDb", updateQuery).then(() => {
      cy.task(
        "queryDb",
        "SELECT token FROM users WHERE email = '" + email + "';"
      ).then((result) => {
        let token = result[0].token;
        cy.visit("http://localhost:4200/ResetPassword/" + token);
      });
    });

    cy.get("#updatePassword").should("be.disabled");

    cy.get("#password").type("notVali");
    cy.get("#confirm").type("not");
    cy.get(".help-block").should("contain.text", "As senhas não coincidem*");
    cy.get("#updatePassword").should("be.disabled");
  });

  it("Sistema atualiza no banco de dados com nova senha inserida pelo usuario", () => {

    let pwd;

    cy.task(
      "queryDb",
      `SELECT Password,Token FROM users WHERE email = '`+email+`';`
    ).then((results) => {

      pwd = results[0].Password;
      cy.visit("http://localhost:4200/ResetPassword/" + results[0].Token);

      cy.get("#password").type("Welcome@123");
      cy.get("#confirm").type("Welcome@123");
      cy.get("#updatePassword").click();
      cy.get("#alert").should("contain.text", "Senha alterada com sucesso...");

      cy.url().should("be.eq", "http://localhost:4200/Login");
      cy.task(
        "queryDb",
        `SELECT Password,Token,Expiration_date FROM users WHERE email = '` + email + `';`
      ).then((results) => {
  
        const newPassword = results[0].Password;
        const tokenValidate = results[0].Token;
        const expiration_date = results[0].Expiration_date;
  
        expect(newPassword).to.not.be.eq(pwd);
        expect(tokenValidate).to.be.null;
        expect(expiration_date).to.be.null;
      });
    })



  });
});
