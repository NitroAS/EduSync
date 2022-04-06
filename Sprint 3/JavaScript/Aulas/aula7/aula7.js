// Manipulação do DOM - Funções Nativas do JavaScript

// acessando com funções nativas do JavaScript


// ID - singular = Element
let e1 = document.getElementById("cpf")
console.log(e1.value);
// aqui tem todo o elemento , só uma linha de comando 

// Class - plural   = Elements

let e2 = document.getElementsByClassName('documento');

console.log(e2[0].value);

// aqui tenho um array de todos os elementos 

// Seletor Padrão - querySelector = versão mais recente de seleção

let e3 = document.querySelector ('#rg')
console.log(e3.value);

// Por class / para selecionar tudo  All = tudo 
let e4 =  document.querySelectorAll ('input')
console.log(e4[1].value);