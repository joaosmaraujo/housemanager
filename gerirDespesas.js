function mostrarFormDespesa() {  
    $('#form-despesa').show();
}

function cancelDespesa() {
    $('#form-despesa').hide();
}

function adicionarDespesa() {
    
    $('#tabela-despesas tr:last-child td:last-child').html("");
    $('#tabela-despesas tbody tr:last-child').removeClass('last-row');
    
    var aDescontar = parseFloat($("input[name='a-descontar']:checked").val());
    var novaDataRegisto = new Date();
    var novaDataDespesa = $('#data-despesa').val()
    novaDataDespesa = new Date(novaDataDespesa);
    var novoTipoDespesa = $('#opcoes-tipo-despesa').val();
    var novoQuemPagou = $('#opcoes-quem-pagou').val();
    var novoDescritivoDespesa = $('#descritivo-despesa').val();
    var novoValorDespesa = parseFloat($('#valor-despesa').val());
    var novoQuemDeve = $('#tabela-despesas tr:last-child td:nth-child(7)').text();
    var novoQuantoDeve = 0;
    var valorADescontar = novoValorDespesa * aDescontar;
    var dividaAcumulada = parseFloat($('#tabela-despesas tr:last-child td:nth-child(8)').text());
    if (isNaN(dividaAcumulada)) {
        novoQuantoDeve = valorADescontar;
        if (novoQuemPagou == "Micas") {
            novoQuemDeve = "Jonas";
        }
        else if (novoQuemPagou == "Jonas") {
            novoQuemDeve = "Micas";
        }
    }
    else if (novoQuemPagou == novoQuemDeve) {
        
        dividaAcumulada = parseFloat(dividaAcumulada);
        novoQuantoDeve = dividaAcumulada - valorADescontar;
        
        if (novoQuantoDeve < 0) {
            novoQuantoDeve = novoQuantoDeve * (-1);
            if (novoQuemPagou == "Micas") {
                novoQuemDeve = "Jonas";
            }
            else if (novoQuemPagou == "Jonas") {
                novoQuemDeve = "Micas";
            }
        }
        else if (novoQuantoDeve >= 0) {
            novoQuemDeve = novoQuemPagou;
        }
    }
    else if (novoQuemPagou != novoQuemDeve) {
        novoQuantoDeve = (dividaAcumulada + valorADescontar);
    }
    
    var RegistoDespesa = Parse.Object.extend("Despesa");
    var registoDespesa = new RegistoDespesa();
    
    registoDespesa.save({
        tipoDespesa: novoTipoDespesa,
        valorDespesa: novoValorDespesa,
        quemPagou: novoQuemPagou,
        quantoDeve: novoQuantoDeve,
        quemDeve: novoQuemDeve,
        dataDespesa: novaDataDespesa,
        descritivoDespesa: novoDescritivoDespesa
    }, {
        success: function(registoDespesa) {
            console.log(registoDespesa.id);        
        },
    error: function(gameScore, error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        console.log('Failed to create new object, with error code: ' + error.message);
    }
    });
    
    var idRegisto = registoDespesa.id;
    novaDataRegisto = novaDataRegisto.toISOString().split('T')[0];
    novaDataDespesa = novaDataDespesa.toISOString().split('T')[0];  
    
    var table = $('#tabela-despesas').DataTable();
    table.row.add( [
            idRegisto,
            novaDataRegisto,
            novaDataDespesa,
            novoTipoDespesa,
            novoDescritivoDespesa,
            novoQuemPagou,
            novoValorDespesa.toFixed(2),
            novoQuemDeve,
            novoQuantoDeve.toFixed(2),
            '<button type="button" class="btn btn-default btn-xs" onclick="removerDespesa()"><span class="glyphicon glyphicon-remove"></span> </button>'
        ] ).draw();
        
    $('#tabela-despesas tbody tr:last-child').addClass('last-row');

}


function removerDespesa() {
    console.log("remover");
    var table = $('#tabela-despesas').DataTable();
    table.row('.last-row').remove().draw(false);
    $('#tabela-despesas tr:last-child td:last-child').html(
        '<button type="button" class="btn btn-default btn-xs" onclick="removerDespesa()"><span class="glyphicon glyphicon-remove"></span> </button>'
    );
    
    $('#tabela-despesas tbody tr:last-child').addClass('last-row');
    
}
