$(document).ready(function() {
    
    var queryDespesa = new Parse.Query("Despesa");
    queryDespesa.find({               
       success: function (results) {
            for(x in results) {
                var idRegisto = results[x].id;
                var dataRegisto = results[x].createdAt.toISOString().split('T')[0];
                var dataDespesa = results[x].get("dataDespesa").toISOString().split('T')[0];
                var tipoDespesa = results[x].get("tipoDespesa");
                var descritivoDespesa = results[x].get("descritivoDespesa");
                var quemPagou = results[x].get("quemPagou");
                var valorDespesa = results[x].get("valorDespesa");
                var quemDeve = results[x].get("quemDeve");
                var quantoDeve = results[x].get("quantoDeve");
                var despesa = new Despesa(idRegisto, dataRegisto, dataDespesa, tipoDespesa, descritivoDespesa, quemPagou, valorDespesa.toFixed(2), quemDeve, quantoDeve.toFixed(2));
                despesas.push(despesa);
            }
        }, error: function (error) {
        alert("impossivel carregar anuncios");
      }                                                                                   
    }).then(function() {
        for (var i = 0; i < despesas.length; i++) {
            var table = $('#tabela-despesas').DataTable();
            table.row.add( [
                despesas[i].idRegisto,
                despesas[i].dataRegisto,
                despesas[i].dataDespesa,
                despesas[i].tipoDespesa,
                despesas[i].descritivoDespesa,
                despesas[i].quemPagou,
                despesas[i].valorDespesa,
                despesas[i].quemDeve,
                despesas[i].quantoDeve,
                ""
            ] ).draw();
        }
        $('#tabela-despesas tbody tr:last-child td:last-child').html(
            '<button type="button" class="btn btn-default btn-xs" onclick="removerDespesa()"><span class="glyphicon glyphicon-remove"></span> </button>'    
        );
        $('#tabela-despesas tbody tr:last-child').addClass('last-row');    
    });
    
    
});