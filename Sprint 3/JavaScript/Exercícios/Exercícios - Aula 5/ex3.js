let numeros = [1,2,3,4,5,6,7,8,9,10]

for (let index = 0; index < numeros.length; index++) 
{
    let numeros = parseFloat (prompt ("Digite seu  numeros"))
    
}

let dentro = 0
for (let index = 0; index < numeros.length; index++)
 {
    if (numeros[index] >= 10 && numeros[index] <= 20)
    {
        dentro = dentro + 1;
    }
}

console.log(`Números estão entre 10 á 20: ${dentro}`);

let fora = 10 - dentro

console.log(`Números que não estão: ${fora}`);

