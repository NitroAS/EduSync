let valor1 = parseFloat(prompt('Digite o primeiro valor'))
let valor2
do {
    valor2 = parseFloat(prompt('Digite o segundo valor'))
} while (valor2 == 0);
console.log(` O Resultado deu: ${(valor1 / valor2).toFixed(2)}`);

