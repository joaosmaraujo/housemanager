$(document).ready(function() {
    $('#inicio').show();
    $('#despesas').hide();
    $('#receitas').hide();
    $('#faturas').hide();
    $('#compras').hide();
    $('#tarefas').hide();
    $('#form-despesa').hide();
    $('#form-fatura').hide();
    $('#form-compra').hide();
    $('#form-tarefa').hide();
    $('#form-receita').hide();
    $('table').DataTable({
        paging: false,
        ordering: false,
        searching: false,
        info: false,
        "columnDefs": [
            {
                "targets": [ 0 ],
                "visible": false,
                "searchable": false
            }
        ]
    });
});


function showdespesas() {
    $('#inicio').hide();
    $('#despesas').show();
    $('#receitas').hide();
    $('#faturas').hide();
    $('#compras').hide();
    $('#tarefas').hide();
    $('form').hide();
}

function showreceitas() {
    $('#inicio').hide();
    $('#despesas').hide();
    $('#receitas').show();
    $('#faturas').hide();
    $('#compras').hide();
    $('#tarefas').hide();
    $('form').hide();
}

function showcompras() {
    $('#inicio').hide();
    $('#despesas').hide();
    $('#receitas').hide();
    $('#faturas').hide();
    $('#compras').show();
    $('#tarefas').hide();
    $('form').hide();
}

function showtarefas() {
    $('#inicio').hide();
    $('#despesas').hide();
    $('#receitas').hide();
    $('#faturas').hide();
    $('#compras').hide();
    $('#tarefas').show();
    $('form').hide();
}