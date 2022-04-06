var numeros = [5,15,20,35,45,55,70,99,71,33]

for (var i = 0; i < numeros.length; i++)
{

    for (var i = 0; i < numeros.length; i++) 
    {
         if (numeros[i] > numeros[i +1])
        {
            var gaveta = numeros[i +1]
            numeros[i +1] = numeros[i]
            numeros[i] = gaveta
        }

    }
}

for (var i = 0; i < numeros.length; i++) 
{
    console.log(numeros[i])
}

// necessito refazer esse exercício pra fixa, tive um pouco de dificuldade nessa 