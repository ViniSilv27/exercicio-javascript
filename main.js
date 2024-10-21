const form = document.getElementById('formulario')

function validaNumero(numeroA, numeroB){
    return numeroB > numeroA;
}

form.addEventListener('submit', function(e){
    let validaform = false;
    e.preventDefault();
    const numeroA = document.getElementById('campoA')
    const numeroB = document.getElementById('campoB')
    const msgPositiva = `Enviado com sucesso!!!`
    const msgNegativa = `não foi enviado, o campo B tem que ser maior que o campo A`
    validaform = validaNumero(numeroA.value,numeroB.value)
    if(validaform){
        const conteinerMensagemSucesso =  document.querySelector('.msg-sucesso');
        conteinerMensagemSucesso.innerHTML= msgPositiva;
        conteinerMensagemSucesso.style.display = 'block'; 

        numeroA.value = ''
        numeroB.value = ''


    } else{
        const conteinerMensagemSucesso =  document.querySelector('.msg-sucesso');
        conteinerMensagemSucesso.innerHTML= msgNegativa;
        conteinerMensagemSucesso.style.display = 'block'; 

        numeroA.value = ''
        numeroB.value = ''
    }


})




console.log(form)