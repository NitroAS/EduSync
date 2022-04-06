"use strict";
var Acoes;
(function (Acoes) {
    Acoes[Acoes["Correr"] = 0] = "Correr";
    Acoes[Acoes["Pular"] = 1] = "Pular";
    Acoes[Acoes["Defender"] = 2] = "Defender";
    Acoes[Acoes["Atacar"] = 3] = "Atacar";
})(Acoes || (Acoes = {}));
var Respostas;
(function (Respostas) {
    Respostas[Respostas["Sim"] = 0] = "Sim";
    Respostas[Respostas["Nao"] = 1] = "Nao";
})(Respostas || (Respostas = {}));
let acaoAtual = Acoes.Atacar;
console.log(acaoAtual);
