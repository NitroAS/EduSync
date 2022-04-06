// Fetch - API

// Promise -> Um pedido que ainda não foi atendido e pode ser resolvido ou rejeitado
// estrutura do Promise
// then - de aceita
// catch - de recusa
// finally = de finalmente

// Exemplo -> Um motorista de Uber recebendo uma viajem


let inputCEP = document.querySelector('#cep')
let inputLogradouro = document.querySelector('#logradouro')
let inputBairro = document.querySelector('#bairro')
let inputLocalidade = document.querySelector('#localidade')
let inputUF = document.querySelector('#uf')

// via cep = https://viacep.com.br AJUDAR A CRIAR UM ARQUIVO EM JSON e é feita via API
var endpoint = 'https://viacep.com.br/ws/01001000/json/';

// Primeiro comunicação com  API mas n estou fazendo nada com ela

// fetch(endpoint, {
//     method: 'GET',
//     headers: { 'Content-Type': "application/json" }
// })


//     .then(reponse => reponse.json())
//     .then(result => {
//         console.log(result);
//     })
//     .catch(erro => console.log(erro))

const consultarCEP = (cep) => {
    var endpoint = 'https://viacep.com.br/ws/'+cep+'/json/';

    fetch(endpoint, {
        method: 'GET',
        headers: { 'Content-Type': "application/json" }
    })


        .then(reponse => reponse.json())
        .then(result => {
           
            inputLogradouro.value = result.logradouro;
            inputBairro.value = result.bairro;
            inputLocalidade.value = result.localidade;
            inputUF.value = result.uf;
             

        })
        .catch(erro => console.log(erro))

}


inputCEP.addEventListener('input', () => {
    if (inputCEP.value.length > 7) {
        consultarCEP (inputCEP.value)
    }
})