let salario = []
let filho = []
let indice = 0

do {
    filho[indice] = parseFloat(prompt('Quantos filhos'))
    salario[indice] =  parseFloat(prompt("Qual seu salario?"))
    indice++
} while (salario [indice - 1 ] > 0 );

let somaFilhos =  0
let somaSalarios =  0


for (let index = 0; index < salario.length - 1; index++) {

    somaSalarios = salario[index] + somaSalarios
   
}

let mediaSalario = somaSalarios / (salario.length - 1)

console.log(`A faixa salarial: ${(mediaSalario).toFixed(2)}`);
 

for (let index = 0; index < filho.length - 1; index++) {

    somaFilhos = filho[index] + somaFilhos
   
}
let mediaFilhos = somaFilhos / (filho.length - 1)

console.log(`A faixa de filhos: ${(mediaFilhos).toFixed(2)}`);
 

let maiorSalario = salario[0]
for (let index = 0; index < salario.length - 1; index++) {
  if (maiorSalario < salario[index])
      maiorSalario = salario[index]
}

console.log(`O Maior Salario: ${maiorSalario}` );


let quantidadeDePessoas
for (let index = 0; index < salario.length - 1; index++) {
    if (salario[index] < 1000)
    quantidadeDePessoas ++
}

console.log(`Porcentagem de pessoas com salario minimo ${(quantidadeDePessoas / (salario.length - salario.length - 1) * 100).toFixed(2) }`);