var votos = 1000;
var  votos_validos = 800;
var  votos_brancos = 150;
var  votos_nulos   = 50;

var validos = votos - votos_validos
console.log(validos)

var brancos = votos - votos_brancos
console.log(brancos)

var nulos = votos - votos_nulos
console.log(nulos)

var operacao = prompt ('Votos');
console.log(operacao);

switch(operacao)
{
    case 'votos':
    console.log(votos);
    break;


    case 'validos':
    console.log(votos_validos);
    break;

    case 'brancos':
    console.log(votos_brancos);
    break;

    case 'nulos':
    console.log(votos_nulos);
    break;

    default:
        console.log('votos inválidos')
    break;
}

