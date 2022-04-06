var argumento1 = parseFloat(prompt ('Digite o primeiro argumento'))
console.log('Argumento1:', argumento1)

var argumento2 = parseFloat(prompt ('Digite o segundo argumento'))
console.log('Argumento2:', argumento2)

var argumento3 = parseFloat(prompt ('Digite o terceiro argumento'))
console.log('Argumento3:', argumento3)

// parseFloat server para fazer um prompt com uso de numeros

function calculoSoma (argumento1, argumento2, argumento3) 
{
    var soma = (argumento1 + argumento2 + argumento3)
    return soma
}

var resultadoSoma = calculoSoma(argumento1, argumento2, argumento3)
console.log("Resultado da Soma:", calculoSoma(argumento1, argumento2, argumento3))



function calculoMedia (argumento1, argumento2, argumento3) 
{
    var media = (argumento1 + argumento2 + argumento3)  / 3
    return media
}
var resultadoMedia = calculoMedia(argumento1, argumento2, argumento3)
console.log("Resultado da Media:", calculoMedia(argumento1, argumento2, argumento3).toFixed(2))



