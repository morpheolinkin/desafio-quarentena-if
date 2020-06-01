package com.jefferson.validador.dto;

import com.jefferson.validador.model.Student;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.br.CPF;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import java.io.Serializable;

public class StudentDTO implements Serializable {
    private Integer id;

    @NotEmpty(message = "Preenchimento obrigatório")
    private String nome;
    private Integer idade;

    @NotEmpty(message = "O preenchimento de CPF é obrigatorio!")
    @CPF
    private String cpf;

    private String rg;
    private String data_nasc;
    private String signo;
    private String mae;
    private String pai;

    //@NotEmpty(message = "Preenchimento obrigatório")
    @Email(message = "Email inválido")
    private String email;

    //@Length(max = 8, message = "Sua senha não pode passar de 8 caractéres!")
    private String senha;

    private String cep;
    private String endereco;
    private Integer numero;
    private String bairro;
    private String cidade;
    private String estado;
    private String telefone_fixo;
    private String celular;
    private String altura;
    private Integer peso;
    private String tipo_sanguineo;
    private String cor;

    public StudentDTO() {
    }

    public StudentDTO(Student obj) {
        this.id = obj.getId();
        this.nome = obj.getNome();
        this.idade = obj.getIdade();
        this.cpf = obj.getCpf();
        this.rg = obj.getRg();
        this.data_nasc = obj.getData_nasc();
        this.signo = obj.getSigno();
        this.mae = obj.getMae();
        this.pai = obj.getPai();
        this.email = obj.getEmail();
        this.senha = obj.getSenha();
        this.cep = obj.getCep();
        this.endereco = obj.getEndereco();
        this.numero = obj.getNumero();
        this.bairro = obj.getBairro();
        this.cidade = obj.getCidade();
        this.estado = obj.getEstado();
        this.telefone_fixo = obj.getTelefone_fixo();
        this.celular = obj.getCelular();
        this.altura = obj.getAltura();
        this.peso = obj.getPeso();
        this.tipo_sanguineo = obj.getTipo_sanguineo();
        this.cor = obj.getCor();

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Integer getIdade() {
        return idade;
    }

    public void setIdade(Integer idade) {
        this.idade = idade;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getRg() {
        return rg;
    }

    public void setRg(String rg) {
        this.rg = rg;
    }

    public String getData_nasc() {
        return data_nasc;
    }

    public void setData_nasc(String data_nasc) {
        this.data_nasc = data_nasc;
    }

    public String getSigno() {
        return signo;
    }

    public void setSigno(String signo) {
        this.signo = signo;
    }

    public String getMae() {
        return mae;
    }

    public void setMae(String mae) {
        this.mae = mae;
    }

    public String getPai() {
        return pai;
    }

    public void setPai(String pai) {
        this.pai = pai;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public Integer getNumero() {
        return numero;
    }

    public void setNumero(Integer numero) {
        this.numero = numero;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getTelefone_fixo() {
        return telefone_fixo;
    }

    public void setTelefone_fixo(String telefone_fixo) {
        this.telefone_fixo = telefone_fixo;
    }

    public String getCelular() {
        return celular;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }

    public String getAltura() {
        return altura;
    }

    public void setAltura(String altura) {
        this.altura = altura;
    }

    public Integer getPeso() {
        return peso;
    }

    public void setPeso(Integer peso) {
        this.peso = peso;
    }

    public String getTipo_sanguineo() {
        return tipo_sanguineo;
    }

    public void setTipo_sanguineo(String tipo_sanguineo) {
        this.tipo_sanguineo = tipo_sanguineo;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }
}
