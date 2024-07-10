$(document).ready(function(){

    var lista = $("#lista")


    $('form').on('submit', function(e){
        e.preventDefault()
        
        //recupera o valor do input
        var tarefaNome = $("#nova-tarefa").val()

        //adição das tarefas
        lista.append("<li>" + tarefaNome + "</li>") 

        //reseta o valor do input
        
        $("#nova-tarefa").val("")
    })
        //ativa a classe completed na "li" clicada
    lista.on("click", "li", function(){
        $(this).toggleClass("completed")
    })

})