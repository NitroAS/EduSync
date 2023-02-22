/*
    Código excelente, seguiu todas as dicas e entregou um excelente trabalho! Parabéns!
*/

// texto fixo

console.log('DIAGNÓSTICO PRÉVIO')

//Prompts para os usuarios digita suas informações:

var nome = prompt('Digite seu nome');
var sexo = prompt('Digite seu sexo');
/*
    Pra idade o parseInt pode ser um pouco mais apropriado já que idade não tem decimal
*/
var idade = parseFloat (prompt('Digite sua Idade'));
var h = parseFloat (prompt('Digite sua Altura'));
var peso = parseFloat (prompt('Digite seu Peso'));

// exibição no console dos prompts

console.log('Nome:', nome)
console.log('Sexo:', sexo)
console.log('Idade:', idade, 'anos')
console.log('Altura:', h)
console.log('Peso:', peso)

// Sistema de validação de Idade para  as Categorias:
if (idade >= 0 && idade <= 12) 
{
    console.log('Categoria:', 'Infantil')
}

/*
    12 anos estaria incluido na categoria abaixo (idade >= 12)
*/
else if (idade > 12 && idade <= 20) 
{
    console.log('Categoria:', 'Juvenil')
}

else if (idade > 20 && idade <= 65) 
{
    console.log('Categoria:', 'Adulto')
}
else 
{
    console.log('Categoria:', 'Idoso')
}

// Formula/Calculo do IMC 
function calculoIMC(h, peso) 
{
    var imc = peso / (h ** 2)
    return imc
}

var valorImc = calculoIMC(h, peso)
console.log("Resultado do IMC:", calculoIMC(h, peso).toFixed(2))

// Riscos / Recomendações - sistema de validação:
if (valorImc >= 0 && valorImc <= 20) 
{
    console.log("Riscos: Muitas complicações de saúde como doenças pulmonares e cardiovasculares podem estar associadas ao baixo peso.")

    console.log("Recomendações: Inclua   carboidratos   simples   em   sua   dieta,   além   de   proteínas - indispensáveis para ganho de massa magra. Procure um profissional.")
}


else if (valorImc > 20 && valorImc <= 24) 
{
    console.log("Riscos: Seu peso está ideal para suas referências.")

    console.log("Recomendações: Mantenha uma dieta saudável e faça seus exames periódicos.")
}

else if (valorImc > 24 && valorImc <= 29) 
{
    console.log("Riscos: Aumento de peso apresenta risco moderado para outras doenças crônicas e cardiovasculares.")

    console.log("Recomendações: Adote um tratamento baseado em dieta balanceada, exercício físico e medicação. A ajuda de um profissional pode ser interessante.")
}

else if (valorImc > 29 && valorImc <= 35) 
{
    console.log("Riscos: Quem tem obesidade vai estar mais exposto a doenças graves e ao risco de mortalidade.")

    console.log("Recomendações: Adote uma dieta alimentar rigorosa, com o acompanhamento de um nutricionista e um médico especialista (endócrino).")
}

else 
{
    console.log("Riscos: O obeso mórbido vive menos, tem alto risco de mortalidade geral por diversas causas")

    console.log("Recomendações: Procure com urgência o acompanhamento de um nutricionista para realizar reeducação alimentar, um psicólogo e um médico especialista (endócrino).")
}



