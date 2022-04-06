"use strict";
let data = new Date();
let dia = data.getDate();
let mes = data.getMonth() + 1;
let ano = data.getFullYear();
let dataNascimento = Number(prompt('Qual o dia do seu nascimento?'));
let mesNascimento = Number(prompt('Qual o mês do seu nascimento?'));
let anoNascimento = Number(prompt('Qual o ano completo do seu nascimento?'));
if (mesNascimento == mes) {
    if (dataNascimento > dia) {
        console.log('O aniversário ainda não aconteceu.');
    }
    else if (dataNascimento < dia) {
        console.log('O aniversário já passou.');
    }
    else {
        console.log('Parabens, Feliz Aniversario!');
    }
}
else if (mesNascimento > mes) {
    console.log('Você ainda não fez aniversario.');
}
else {
    console.log('Seu aniversario já passou.');
}
