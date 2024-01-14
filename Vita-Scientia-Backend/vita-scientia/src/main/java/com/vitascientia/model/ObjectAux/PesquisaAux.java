package com.vitascientia.model.ObjectAux;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.vitascientia.model.Anotacao;
import com.vitascientia.model.Projeto;
import com.vitascientia.model.Requisitos;

public class PesquisaAux {
	
	private Long id_pesquisa;
	private String pesquisa_titulo;
	private String pesquisa_descricao;
	@JsonFormat(pattern = "dd/MM/YYYY HH:mm:ss")
	private String data_criacao;
	private String status;
	private Long fk_usuario;
    private List<Projeto> projeto;
    private List<Anotacao> anotacao;
    private List<Requisitos> requisito;
    
    public PesquisaAux(){}

	public PesquisaAux(Long id_pesquisa, String pesquisa_titulo, String pesquisa_descricao, String data_criacao,
			String status, Long fk_usuario, List<Projeto> projeto, List<Anotacao> anotacao,
			List<Requisitos> requisito) {
		super();
		this.id_pesquisa = id_pesquisa;
		this.pesquisa_titulo = pesquisa_titulo;
		this.pesquisa_descricao = pesquisa_descricao;
		this.data_criacao = data_criacao;
		this.status = status;
		this.fk_usuario = fk_usuario;
		this.projeto = projeto;
		this.anotacao = anotacao;
		this.requisito = requisito;
	}

	public Long getId_pesquisa() {
		return id_pesquisa;
	}

	public void setId_pesquisa(Long id_pesquisa) {
		this.id_pesquisa = id_pesquisa;
	}

	public String getPesquisa_titulo() {
		return pesquisa_titulo;
	}

	public void setPesquisa_titulo(String pesquisa_titulo) {
		this.pesquisa_titulo = pesquisa_titulo;
	}

	public String getPesquisa_descricao() {
		return pesquisa_descricao;
	}

	public void setPesquisa_descricao(String pesquisa_descricao) {
		this.pesquisa_descricao = pesquisa_descricao;
	}

	public String getData_criacao() {
		return data_criacao;
	}

	public void setData_criacao(String data_criacao) {
		this.data_criacao = data_criacao;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Long getFk_usuario() {
		return fk_usuario;
	}

	public void setFk_usuario(Long fk_usuario) {
		this.fk_usuario = fk_usuario;
	}

	public List<Projeto> getProjeto() {
		return projeto;
	}

	public void setProjeto(List<Projeto> projeto) {
		this.projeto = projeto;
	}

	public List<Anotacao> getAnotacao() {
		return anotacao;
	}

	public void setAnotacao(List<Anotacao> anotacao) {
		this.anotacao = anotacao;
	}

	public List<Requisitos> getRequisito() {
		return requisito;
	}

	public void setRequisito(List<Requisitos> requisito) {
		this.requisito = requisito;
	}

}
