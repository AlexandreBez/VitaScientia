package com.vitascientia.model.ObjectAux;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.vitascientia.model.Anotacao;
import com.vitascientia.model.Pesquisa;

public class ProjetoAux {
	
	private Long id_projeto;
	private String projeto_titulo;
	private String projeto_descricao;
	private String status;
	@JsonFormat(pattern = "dd/MM/YYYY HH:mm:ss")
	private String data_criacao;
	private Long fk_usuario;
    private List<Pesquisa> pesquisa;
    private List<Anotacao> anotacao;
    
    public ProjetoAux() {}
    
	public ProjetoAux(Long id_projeto, String projeto_titulo, String projeto_descricao, String status,
			String data_criacao, Long fk_usuario, List<Pesquisa> pesquisa, List<Anotacao> anotacao) {
		super();
		this.id_projeto = id_projeto;
		this.projeto_titulo = projeto_titulo;
		this.projeto_descricao = projeto_descricao;
		this.status = status;
		this.data_criacao = data_criacao;
		this.fk_usuario = fk_usuario;
		this.pesquisa = pesquisa;
		this.anotacao = anotacao;
	}

	public Long getId_projeto() {
		return id_projeto;
	}

	public void setId_projeto(Long id_projeto) {
		this.id_projeto = id_projeto;
	}

	public String getProjeto_titulo() {
		return projeto_titulo;
	}

	public void setProjeto_titulo(String projeto_titulo) {
		this.projeto_titulo = projeto_titulo;
	}

	public String getProjeto_descricao() {
		return projeto_descricao;
	}

	public void setProjeto_descricao(String projeto_descricao) {
		this.projeto_descricao = projeto_descricao;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getData_criacao() {
		return data_criacao;
	}

	public void setData_criacao(String data_criacao) {
		this.data_criacao = data_criacao;
	}

	public Long getFk_usuario() {
		return fk_usuario;
	}

	public void setFk_usuario(Long fk_usuario) {
		this.fk_usuario = fk_usuario;
	}

	public List<Pesquisa> getPesquisa() {
		return pesquisa;
	}

	public void setPesquisa(List<Pesquisa> pesquisa) {
		this.pesquisa = pesquisa;
	}

	public List<Anotacao> getAnotacao() {
		return anotacao;
	}

	public void setAnotacao(List<Anotacao> anotacao) {
		this.anotacao = anotacao;
	}
    
}
