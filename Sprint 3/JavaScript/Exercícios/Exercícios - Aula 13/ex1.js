let inputCEP = document.querySelector('#cep')
let inputLogradouro = document.querySelector('#logradouro')
let inputLocalidade = document.querySelector('#localidade')
let inputEnviar = document.querySelector('#enviar')



const consultarCEP = (cep) => {
    var endpoint = 'https://viacep.com.br/ws/01001000/json/';

    fetch(endpoint, {
        method: 'GET',
        headers: { 'Content-Type': "application/json" }
    })


        .then(reponse => reponse.json())
        .then(result => {
            console.log(result);
        })
        .catch(erro => console.log(erro))


}
inputEnviar.addEventListener('click',function (){consultarCEP(inputCEP.value)})



