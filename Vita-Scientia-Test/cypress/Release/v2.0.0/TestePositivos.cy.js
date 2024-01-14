/// <reference types="cypress"/>

let id_anotacao;
let id_pesquisa;
let id_projeto;

describe("Release:V2.0.0 - Testes functionais positivos", () => {

  beforeEach("Efetuar login no sistema", () => {
    cy.viewport(1200, 800);
    cy.visit("Login");
    cy.fixture("Usuarios.json").then((dados) => {
      cy.efetuarLogin(dados[0].email, dados[0].senha);
    });
  });

  it("Usuario cria uma nova anotacao com sucesso", () => {
    cy.acessaMenu("Anotações");
    cy.fixture("Anotacao.json").then((dado) => {
      cy.criaNovaAnotacao();
      cy.get("#conteudo_anotacao").then(($el) => {
        let tituloBruto = $el.find("#anotacao_titulo").text();
        let partes = tituloBruto.split(" - ");
        id_anotacao = parseInt(partes[0].replace("#ANT", "").trim());
        cy.wrap($el).find("#anotacao_titulo").should("contain.text", dado[0].titulo);
        cy.wrap($el).find("#anotacao_descricao").should("contain.text", dado[0].descricao);
        cy.SelectAnotacaoDB(id_anotacao).then((resultado) => {
          expect(resultado[0]).to.not.be.empty;
          expect(resultado[0].anotacao_titulo).to.be.eq(dado[0].titulo);
          expect(resultado[0].anotacao_descricao).to.be.eq(dado[0].descricao);
        });
      });
    });
  });

  it("Procura uma anotacao pelo titulo com sucesso", () => {
    cy.acessaMenu("Anotações");
    cy.fixture("Anotacao.json").then((dado) => {
      cy.procuraAnotacaoPeloTitulo(dado[0].titulo);
      cy.get("#lista-anotacao > li").each(($el) => {
        if (
          $el.text().includes("#ANT" + id_anotacao + " - " + dado[0].titulo)
        ) {
          cy.wrap($el).click();
        }
      });
      cy.get("#conteudo_anotacao").then(($ele) => {
        cy.wrap($ele)
          .find("#anotacao_titulo")
          .contains("#ANT" + id_anotacao + " - " + dado[0].titulo);
        cy.wrap($ele).find("#anotacao_descricao").contains(dado[0].descricao);
      });
    });
  });

  it("Procura uma anotacao pelo id com sucesso", () => {
    cy.acessaMenu("Anotações");
    cy.procuraAnotacaoPeloId(id_anotacao);
    cy.fixture("Anotacao.json").then((dado) => {
      cy.get("#lista-anotacao > li").each(($el) => {
        if (
          $el.text().includes("#ANT" + id_anotacao + " - " + dado[0].titulo)
        ) {
          cy.wrap($el).click();
        }
      });
      cy.get("#conteudo_anotacao").then(($ele) => {
        cy.wrap($ele)
          .find("#anotacao_titulo")
          .contains("#ANT" + id_anotacao + " - " + dado[0].titulo);
      });
    });
  });

  it("Usuario atualiza uma anotacao com sucesso", () => {
    cy.acessaMenu("Anotações");
    cy.fixture("Anotacao.json").then((dado) => {
      cy.procuraAnotacaoPeloTitulo(dado[0].titulo);
      cy.get("#lista-anotacao > li").each(($el) => {
        if (
          $el.text().includes("#ANT" + id_anotacao + " - " + dado[0].titulo)
        ) {
          cy.wrap($el).click();
        }
      });
      cy.editaAnotacao();
      cy.procuraAnotacaoPeloTitulo(dado[1].titulo);
      cy.get("#lista-anotacao > li").each(($el) => {
        if (
          $el.text().includes("#ANT" + id_anotacao + " - " + dado[1].titulo)
        ) {
          cy.wrap($el).click();
        }
      });
      cy.get("#conteudo_anotacao").then(($el) => {
        cy.wrap($el).find("#anotacao_titulo").contains("#ANT" + id_anotacao + " - " + dado[1].titulo);
        cy.wrap($el).find("#anotacao_descricao").contains(dado[1].descricao);
        cy.SelectAnotacaoDB(id_anotacao).then((resultado) => {
          expect(resultado[0]).to.not.be.empty;
          expect(resultado[0].anotacao_titulo).to.be.eq(dado[1].titulo);
          expect(resultado[0].anotacao_descricao).to.be.eq(dado[1].descricao);
        });
      });
    });
  });

  // ----------------------------------------------------------------

  it("Usuario cria um novo projeto com sucesso", () => {
    cy.acessaMenu("Projetos");
    cy.fixture("Projeto.json").then((dado) => {
      cy.criaNovoProjeto();
      cy.get("#conteudo_projeto").then(($el) => {
        let tituloBruto = $el.find("#projeto_titulo").text();
        let partes = tituloBruto.split(" - ");
        id_projeto = parseInt(partes[0].replace("#PJT", "").trim());

        cy.wrap($el).find("#projeto_titulo").should("contain.text", dado[0].titulo);
        cy.wrap($el).find("#projeto_descricao").should("contain.text", dado[0].descricao);
        cy.SelectProjetoDB(id_projeto).then(resultado => {
          expect(resultado[0]).to.not.be.empty;
          expect(resultado[0].projeto_titulo).to.be.eq(dado[0].titulo);
          expect(resultado[0].projeto_descricao).to.be.eq(dado[0].descricao);
        });
      });
    });
  });

  it("Procura um projeto pelo titulo com sucesso", () => {
    cy.acessaMenu("Projetos");
    cy.fixture("Projeto.json").then((dado) => {
      cy.procuraProjetoPeloTitulo(dado[0].titulo);
      cy.get("#lista-projeto > li").each(($el) => {
        if ($el.text().includes("#PJT" + id_projeto + " - " + dado[0].titulo)) {
          cy.wrap($el).click();
        }
      });
      cy.get("#conteudo_projeto").then(($ele) => {
        cy.wrap($ele)
          .find("#projeto_titulo")
          .contains("#PJT" + id_projeto + " - " + dado[0].titulo);
        cy.wrap($ele).find("#projeto_descricao").contains(dado[0].descricao);
      });
    });
  });

  it("Procura um projeto pelo id com sucesso", () => {
    cy.acessaMenu("Projetos");
    cy.procuraProjetoPeloId(id_projeto);
    cy.fixture("Projeto.json").then((dado) => {
      cy.get("#lista-projeto > li").each(($el) => {
        if ($el.text().includes("#PJT" + id_projeto + " - " + dado[0].titulo)) {
          cy.wrap($el).click();
        }
      });
      cy.get("#conteudo_projeto").then(($ele) => {
        cy.wrap($ele)
          .find("#projeto_titulo")
          .contains("#PJT" + id_projeto + " - " + dado[0].titulo);
        cy.wrap($ele).find("#projeto_descricao").contains(dado[0].descricao);
      });
    });
  });

  it("Usuario atualiza um projeto com sucesso", () => {
    cy.acessaMenu("Projetos");
    cy.fixture("Projeto.json").then((dado) => {
      cy.procuraProjetoPeloTitulo(dado[0].titulo);
      cy.get("#lista-projeto > li").each(($el) => {
        if ($el.text().includes("#PJT" + id_projeto + " - " + dado[0].titulo)) {
          cy.wrap($el).click();
        }
      });
      cy.editaProjeto();
      cy.procuraProjetoPeloTitulo(dado[1].titulo);
      cy.get("#lista-projeto > li").each(($el) => {
        if ($el.text().includes("#PJT" + id_projeto + " - " + dado[1].titulo)) {
          cy.wrap($el).click();
        }
      });
      cy.get("#conteudo_projeto").then(($el) => {
        cy.wrap($el)
          .find("#projeto_titulo")
          .contains("#PJT" + id_projeto + " - " + dado[1].titulo);
        cy.wrap($el).find("#projeto_descricao").contains(dado[1].descricao);
        cy.SelectProjetoDB(id_projeto).then(resultado => {
          expect(resultado[0]).to.not.be.empty;
          expect(resultado[0].projeto_titulo).to.be.eq(dado[1].titulo);
          expect(resultado[0].projeto_descricao).to.be.eq(dado[1].descricao);
        });
      });
    });
  });

  // ----------------------------------------------------------------

  it("Usuario cria uma nova pesquisa com sucesso", () => {
    cy.acessaMenu("Pesquisas");
    cy.fixture("Pesquisa.json").then((dado) => {
      cy.criaNovaPesquisa();
      cy.get("#conteudo_pesquisa").then(($el) => {
        let tituloBruto = $el.find("#pesquisa_titulo").text();
        let partes = tituloBruto.split(" - ");
        id_pesquisa =  parseInt(partes[0].replace("#PQS", "").trim());
        cy.wrap($el).find("#pesquisa_titulo").should("contain.text", dado[0].titulo);
        cy.wrap($el).find("#pesquisa_descricao").should("contain.text", dado[0].descricao);

        cy.SelectPesquisaDB(id_pesquisa).then((resultado) => {
          expect(resultado[0]).to.not.be.empty;
          expect(resultado[0].pesquisa_titulo).to.be.eq(dado[0].titulo);
          expect(resultado[0].pesquisa_descricao).to.be.eq(dado[0].descricao);
        });
      });
    });
  });

  it("Procura uma pesquisa pelo titulo com sucesso", () => {
    cy.acessaMenu("Pesquisas");
    cy.fixture("Pesquisa.json").then((dado) => {
      cy.procuraPesquisaPeloTitulo(dado[0].titulo);
      cy.get("#lista-pesquisa > li").each(($el) => {
        if (
          $el.text().includes("#PQS" + id_pesquisa + " - " + dado[0].titulo)
        ) {
          cy.wrap($el).click();
        }
      });
      cy.get("#conteudo_pesquisa").then(($ele) => {
        cy.wrap($ele)
          .find("#pesquisa_titulo")
          .contains("#PQS" + id_pesquisa + " - " + dado[0].titulo);
        cy.wrap($ele).find("#pesquisa_descricao").contains(dado[0].descricao);
      });
    });
  });

  it("Procura uma pesquisa pelo id com sucesso", () => {
    cy.acessaMenu("Pesquisas");
    cy.procuraPesquisaPeloId(id_pesquisa);
    cy.fixture("Pesquisa.json").then((dado) => {
      cy.get("#lista-pesquisa > li").each(($el) => {
        if (
          $el.text().includes("#PQS" + id_pesquisa + " - " + dado[0].titulo)
        ) {
          cy.wrap($el).click();
        }
      });
      cy.get("#conteudo_pesquisa").then(($ele) => {
        cy.wrap($ele)
          .find("#pesquisa_titulo")
          .contains("#PQS" + id_pesquisa + " - " + dado[0].titulo);
        cy.wrap($ele).find("#pesquisa_descricao").contains(dado[0].descricao);
      });
    });
  });

  // ----------------------------------------------------------------

  it("Usuario cria um requisito em uma pesquisa com sucesso", () => {
    cy.acessaMenu("Pesquisas");
    cy.procuraPesquisaPeloId(id_pesquisa);
    cy.fixture("Pesquisa.json").then((dado) => {
      cy.get("#lista-pesquisa > li").each(($el) => {
        if (
          $el.text().includes("#PQS" + id_pesquisa + " - " + dado[0].titulo)
        ) {
          cy.wrap($el).click();
        }
      });
      cy.criaNovoRequisito();
      cy.fixture("Requisitos.json").then((dados) => {
        cy.get("#tabela_requisito > tr").each(($el) => {
          if ($el.text().includes(dados[0].item)) {
            cy.wrap($el).contains(dados[0].item);
            cy.wrap($el).contains(dados[0].preco);
          }
        });
        cy.SelectRequsitoDB(id_pesquisa).then((resultado) => {
          expect(resultado[0]).to.not.be.empty;
          expect(resultado[0].item).to.be.equal(dados[0].item);
          expect(parseFloat(resultado[0].preco)).to.be.equal(dados[0].preco);
        });
      });
    });
  });

  it("Usuario atualiza um requisito de uma pesquisa com sucesso", () => {
    cy.acessaMenu("Pesquisas");
    cy.procuraPesquisaPeloId(id_pesquisa);
    cy.fixture("Pesquisa.json").then((dado) => {
      cy.get("#lista-pesquisa > li").each(($el) => {
        if (
          $el.text().includes("#PQS" + id_pesquisa + " - " + dado[0].titulo)
        ) {
          cy.wrap($el).click();
        }
      });
      cy.fixture("Requisitos.json").then((dados) => {
        cy.get("#tabela_requisito > tr").each(($el) => {
          if ($el.text().includes(dados[0].item)) {
            cy.wrap($el).find("td:nth-child(4) > .btn").click();
            cy.atualizaRequisito();
          }
        });
        cy.get("#tabela_requisito > tr").each(($el) => {
          if ($el.text().includes(dados[0].item)) {
            cy.wrap($el).find("td:nth-child(1)").should("not.contain.text", dados[0].item).and("contain.text", dados[1].item);
            cy.wrap($el).find("td:nth-child(2)").should("not.contain.text", dados[0].preco).and("contain.text", dados[1].preco);
          }
        });
        cy.SelectRequsitoDB(id_pesquisa).then((resultado) => {
          expect(resultado[0]).to.not.be.empty;
          expect(resultado[0].item).to.be.equal(dados[1].item);
          expect(parseFloat(resultado[0].preco)).to.be.equal(dados[1].preco);
        });
      });
    });
  });

  it("Usuario deleta um requisito de uma pesquisa com sucesso", () => {
    cy.acessaMenu("Pesquisas");
    cy.procuraPesquisaPeloId(id_pesquisa);
    cy.fixture("Pesquisa.json").then((dado) => {
      cy.get("#lista-pesquisa > li").each(($el) => {
        if (
          $el.text().includes("#PQS" + id_pesquisa + " - " + dado[0].titulo)
        ) {
          cy.wrap($el).click();
        }
      });
      cy.fixture("Requisitos.json").then((dados) => {
        cy.get("#tabela_requisito > tr").each(($el) => {
          if ($el.text().includes(dados[1].item)) {
            cy.wrap($el).find("td:nth-child(5) > .btn").click();
            cy.deletaRequisito();
          }
        });
        cy.get("#tabela_requisito").should("not.exist");
        cy.SelectRequsitoDB(id_pesquisa).then((resultado) => {
          expect(resultado).to.be.an('array').that.is.empty;
        });
      });
    });
  });

  // ----------------------------------------------------------------

  it("Usuario associa um projeto a uma pesquisa com sucesso", () => {
    cy.acessaMenu("Pesquisas");
    cy.procuraPesquisaPeloId(id_pesquisa);
    cy.fixture("Pesquisa.json").then((dado) => {
      cy.get("#lista-pesquisa > li").each(($el) => {
        if (
          $el.text().includes("#PQS" + id_pesquisa + " - " + dado[0].titulo)
        ) {
          cy.wrap($el).click();
        }
      });
      cy.associaProjeto();
    });
    cy.fixture("Projeto.json").then((dado) => {
      cy.get("#tabela_projetos > tr").each(($el) => {
        cy.wrap($el).contains(dado[0].titulo);
      });
    });
    cy.SelectProjetoPesquisaDB(id_projeto).then((resultado) => {
      expect(resultado[0]).to.not.be.empty;
      expect(resultado[0].fk_pesquisa).to.be.eq(id_pesquisa);
      expect(resultado[0].fk_projeto).to.be.eq(id_projeto);
    });
  });

  it("Usuario desassocia um projeto em uma pesquisa com sucesso", () => {
    cy.acessaMenu("Pesquisas");
    cy.procuraPesquisaPeloId(id_pesquisa);
    cy.fixture("Pesquisa.json").then((dado) => {
      cy.get("#lista-pesquisa > li").each(($el) => {
        if (
          $el.text().includes("#PQS" + id_pesquisa + " - " + dado[0].titulo)
        ) {
          cy.wrap($el).click();
        }
      });
    });
    cy.fixture("Projeto.json").then((dado) => {
      cy.get("#tabela_projetos > tr").each(($el) => {
        if ($el.text().includes(dado[0].titulo)) {
          cy.wrap($el).find("td:nth-child(5) > .btn").click();
          cy.desassociaProjeto();
        }
      });
    });
    cy.get("#tabela_projetos").should("not.exist");
    cy.SelectProjetoPesquisaDB(id_projeto).then((resultado) => {
      expect(resultado).to.be.an('array').that.is.empty;
    });
  });

  // ----------------------------------------------------------------

  it("Usuario associa uma anotação de uma pesquisa com sucesso", () => {
    cy.acessaMenu("Pesquisas");
    cy.procuraPesquisaPeloId(id_pesquisa);
    cy.fixture("Pesquisa.json").then((dado) => {
      cy.get("#lista-pesquisa > li").each(($el) => {
        if (
          $el.text().includes("#PQS" + id_pesquisa + " - " + dado[0].titulo)
        ) {
          cy.wrap($el).click();
        }
      });
      cy.associaAnotacao();
    });
    cy.fixture("Anotacao.json").then((dado) => {
      cy.get("#tabela_anotacao > tr").each(($el) => {
        cy.wrap($el).contains(dado[0].titulo);
      });
    });
    cy.SelectAnotacaoPesquisaDB(id_pesquisa).then((resultado) => {
      expect(resultado[0]).to.not.be.empty;
      expect(parseInt(resultado[0].fk_pesquisa)).to.be.eq(id_pesquisa);
      expect(parseInt(resultado[0].fk_anotacao)).to.be.eq(id_anotacao);
    });
  });

  it("Usuario desassocia uma anotacao de uma pesquisa com sucesso", () => {
    cy.acessaMenu("Pesquisas");
    cy.procuraPesquisaPeloId(id_pesquisa);
    cy.fixture("Pesquisa.json").then((dado) => {
      cy.get("#lista-pesquisa > li").each(($el) => {
        if (
          $el.text().includes("#PQS" + id_pesquisa + " - " + dado[0].titulo)
        ) {
          cy.wrap($el).click();
        }
      });
    });
    cy.fixture("Anotacao.json").then((dado) => {
      cy.get("#tabela_anotacao > tr").each(($el) => {
        if ($el.text().includes(dado[0].titulo)) {
          cy.wrap($el).find("td:nth-child(4) > .btn").click();
          cy.desassociaAnotacao();
        }
      });
    });
    cy.get("#tabela_anotacao").should("not.exist");
    cy.SelectAnotacaoPesquisaDB(id_pesquisa).then((resultado) => {
      expect(resultado).to.be.an('array').that.is.empty;
    });
  });

  // ----------------------------------------------------------------

  it("Usuario atualiza uma pesquisa com sucesso", () => {
    cy.acessaMenu("Pesquisas");
    cy.fixture("Pesquisa.json").then((dado) => {
      cy.procuraPesquisaPeloTitulo(dado[0].titulo);
      cy.get("#lista-pesquisa > li").each(($el) => {
        if (
          $el.text().includes("#PQS" + id_pesquisa + " - " + dado[0].titulo)
        ) {
          cy.wrap($el).click();
        }
      });
      cy.editaPesquisa();
      cy.procuraPesquisaPeloTitulo(dado[1].titulo);
      cy.get("#lista-pesquisa > li").each(($el) => {
        if (
          $el.text().includes("#PQS" + id_pesquisa + " - " + dado[1].titulo)
        ) {
          cy.wrap($el).click();
        }
      });
      cy.get("#conteudo_pesquisa").then(($el) => {
        cy.wrap($el).find("#pesquisa_titulo").contains("#PQS" + id_pesquisa + " - " + dado[1].titulo);
        cy.wrap($el).find("#pesquisa_descricao").contains(dado[1].descricao);
        cy.SelectPesquisaDB(id_pesquisa).then((resultado) => {
          expect(resultado).to.have.length.greaterThan(0);
          expect(resultado[0].pesquisa_titulo).to.be.eq(dado[1].titulo);
          expect(resultado[0].pesquisa_descricao).to.be.eq(dado[1].descricao);
        });
      });
    });
  });

  // ----------------------------------------------------------------

  it("Usuario deleta uma anotacao com sucesso", () => {
    cy.acessaMenu("Anotações");
    cy.deletaAnotacao(id_anotacao);
    cy.procuraAnotacaoPeloId(id_anotacao);
    cy.get(".alert").contains("Nenhuma anotação encontrada...");
    cy.SelectAnotacaoDB(id_anotacao).then((resultado) => {
      expect(resultado).to.be.an('array').that.is.empty;
    });
  });

  it("Usuario deleta uma pesquisa com sucesso", () => {
    cy.acessaMenu("Pesquisas");
    cy.deletaPesquisa(id_pesquisa);
    cy.procuraPesquisaPeloId(id_pesquisa);
    cy.get(".alert").contains("Nenhuma pesquisa encontrada...");
    cy.SelectPesquisaDB(id_pesquisa).then((resultado) => {
      expect(resultado).to.be.an('array').that.is.empty;
    });
  });

  it("Usuario deleta um projeto com sucesso", () => {
    cy.acessaMenu("Projetos");
    cy.deletaProjeto(id_projeto);
    cy.procuraProjetoPeloId(id_projeto);
    cy.get(".alert").contains("Nenhum projeto encontrado...");
    cy.SelectProjetoDB(id_projeto).then(resultado => {
      expect(resultado).to.be.an('array').that.is.empty;
    });
  });
  
});
