// Simples
    var idade = 19;

    if(idade >= 18)
    {
        console.log('Pode tirar carteira de motorista')
    }




// Composta if/else

    var nota = 4;
    
    if (nota >= 5)
    {
        console.log('Aprovado!');
    }
    else if (nota == 4){
        console.log ('Aluno foi para o Conselho');
    }
    else
    {
        console.log('Reprovado');
    }



// Encadeada

var nota = 8.5;
    
if (nota >= 5)
{
    console.log('Aprovado!');
    if(nota >= 8.5){
        console.log("Parabéns você conseguiu uma bolsa de estudos de 50%")
    }
}

else
{
    console.log('Reprovado');
}


// Subtituir Caso... < Switch Case

var num1 = 5;
var num2 = 3;
var operacao = prompt ('Digite uma operação');
console.log(operacao);

switch(operacao)
{
    case 'Soma':
    console.log(num1 + num2);
    break;


    case 'Subtracao':
    console.log(num1 - num2);
    break;

    case ' Multiplicacao':
    console.log(num1 * num2);
    break;

    case 'Divisao':
    console.log(num1 / num2);
    break;

    default:
        console.log('Operação inválida')
    break;
}