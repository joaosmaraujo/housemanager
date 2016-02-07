Parse.initialize("pDqRstxRVgT9bAsr8gfTWF9CA1nQTcGZ6bKKiZ9I", "swfaVewjKayx2E01eQYaAtNdjsYHfxwmONMfckCo");

var despesas = [];
var faturas = [];
var compras = [];
var tarefas = [];
var receitas = [];

function Despesa (idRegisto, dataRegisto, dataDespesa, tipoDespesa, descritivoDespesa, quemPagou, valorDespesa, quemDeve, quantoDeve) {

    this.idRegisto = idRegisto;
    this.dataRegisto = dataRegisto;
    this.dataDespesa = dataDespesa;
    this.tipoDespesa = tipoDespesa;
    this.descritivoDespesa = descritivoDespesa;
    this.quemPagou = quemPagou;
    this.valorDespesa = valorDespesa;
    this.quemDeve = quemDeve;
    this.quantoDeve = quantoDeve;
    
}

function Fatura (numero, data, tipoFatura, valorFatura) {

    this.numero = numero;
    this.data = data;
    this.tipoFatura = tipoFatura;
    this.valorFatura = valorFatura;
    
}

function Compra (tipoProduto, produto, quantidade) {

    this.tipoProduto = tipoProduto;
    this.produto = produto;
    this.quantidade = quantidade;
    
}

function Tarefa (descricao) {

    this.descricao = descricao;
    
}

function Receita (tipoReceita, descricao, tempoTotal, tempoBimby, livro, pagina, classificacao) {

    this.tipoReceita = tipoReceita;
    this.descricao = descricao;
    this.tempoTotal = tempoTotal;
    this.tempoBimby = tempoBimby;
    this.livro = livro;
    this.pagina = pagina;
    this.classificacao = classificacao;
    
}