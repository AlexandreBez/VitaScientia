const { defineConfig } = require("cypress");
const mysql = require('mysql2')

function queryTestDb(query, config) {
  // cria uma nova conexão MySQL usando credenciais do env em cypress.json
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'vita_scientia_test'
  });

  // retorna uma Promise
  return new Promise((resolve, reject) => {
    // inicia a conexão com o banco de dados
    connection.connect();

    // executa a consulta
    connection.query(query, (error, results) => {
      // encerra a conexão, independente do resultado da consulta
      connection.end();

      // verifica se houve algum erro na consulta
      if (error) {
        reject(error);
      } else {
        // resolve a Promise com os resultados
        resolve(results);
      }
    });
  });
}

module.exports = defineConfig({
  projectId: "2ddkf7",
  e2e: {
    setupNodeEvents(on, config) {
      on('task', { queryDb: query => { return queryTestDb(query, config) }, }); 
    },
  },
  video: true
});

