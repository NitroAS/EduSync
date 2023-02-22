
var numeros = [5, 1, 4, 2, 7, 8, 6,];


console.log(numeros.lenntgh);

for (let indice = 0; indice< numeros.length; indice++)
{
// Entendendo o método sort()
// Por padrão, o método sort() classifica os elementos do array em ordem crescente, com o menor valor primeiro e o maior por último.
// O método sort() molda os elementos em strings e compara as strings para determinar as suas ordens.
numeros.sort(); 

 console.log(numeros[indice]);
    
}