"use strict";
let pokemon = [10, 12, 15, 20, 22];
let numeroSoma = 9;
let numeroResultado = pokemon.map((x) => {
    return x + numeroSoma;
});
console.log(numeroResultado);
