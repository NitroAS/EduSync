// Funções / métodos - ações dentro da minha aplicação  - verbos

// Somar = sempre colocar em verbos

// Função = nome da função =  parámetros

function Somar( num1 , num2, num3) 
// com função  somente funcionar dentro do parametro
{
    var resultado = num1 + num2 + num3;
    // retorno
    return resultado;
}

console.log( Somar (1,7,12) )

// metodo mais simples

// com essa função facilitar para fazer contas


// fazendo função para verificar médias 

// verificar médias - vetor/array de notas

function VerificarMedias(notas)
{
    var media = 0

    // Soma dos valores/ notas
    for (var i = 0; i < notas.length; i++)
    {
        media = media + notas[i];
        
    }
    // laço fora é só para somar independete de quantidade 

    // divisao pelo total de registros

    media = media / notas.length

    return media;
}

var provas = [9,8,5,8.4];

console.log(VerificarMedias (provas) )

// metodo de forma dinamico
