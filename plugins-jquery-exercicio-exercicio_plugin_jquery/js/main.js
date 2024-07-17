$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 12345-6789'
    })
    
    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    })
    
    $('#cep').mask('00000-000', {
        placeholder: '012345-678'
    })

    
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            }
        },
        messages:{
            nome: 'Insira seu nome',
            telefone: 'Insira seu telefone',
            cpf: 'Insira seu CPF',
            email: 'Insira seu email',
            cep: 'Insira seu cep'

        },
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function (form, validator) {
            let camposIncorretos = validator.numberOfInvalids()
            console.log(camposIncorretos)
            if(camposIncorretos){
                alert("Por favor, preencha os campos para prosseguir com a compra!");
            }
        }
    })

})
