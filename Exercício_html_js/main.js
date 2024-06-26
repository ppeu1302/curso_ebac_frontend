const form = document.getElementById('formAB');



form.addEventListener('submit', function(e){
    e.preventDefault();


    const campoA = document.getElementById('campo-a');
    const campoB = document.getElementById('campo-b');
    const mensagemSucesso = 'Formulário Válido';

    if (campoA.value < campoB.value){
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';

    } else {
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.success-message').style.display = 'none';
    }
})