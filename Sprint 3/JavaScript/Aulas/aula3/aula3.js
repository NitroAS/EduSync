// const e let
var idade = 31;
idade = 32
console.log(idade);
// trabalhando com var é um valor q mudar ao decorrer do tempo igual a idade é consegue variar o valor

const cpf = 11122233344
const chaceDeAcesso = "xpo123"
const urlPadrao = "http://localhost"
console.log(cpf);

//  com a const é um valor q n pode ser trocado , um valor unico igual nosso cpf ou até mesmo nossa data de nascimento 


// já no let posso declarar e mudar o valor 




// escopo = é a propriedade  onde vai determina onde uma variavel pode ser ultilizada dentro de um programar

// VAR X LET


// Global = 

var globalVar = 10;
let globalLet =  20;

globalVar = 100;
globalLet = 200;

console.log(globalVar);
console.log(globalLet);


// comportamendo das duas aqui é igual consigo trocar as duas normalmente , aqui os dois n tem nenhuma diferença


// Local "Dentro de uma função" então ela e local para essa função

function Mostrar () {
    var escopoLocal = 'Alexandre'

    console.log(escopoLocal);
}

Mostrar();



// No escopo Local não consigo acessar ela fora da minha função "console.log(escopoLocal);", posso usar tanto let quanto var nessa função que n vai mudar em nada





// De Bloco

// já aqui consigo ver a diferença do let e var

if(true){
    var blocoVar = "Paulo";
    let blocoLet = "Prisila";

    console.log(blocoVar);
    console.log(blocoLet);

    // chamando dentro fica normal , consigo chama os dois dentro do bloco mas já fora temos um problema
    //  VAR : Dentro || Fora
    // Let : Somente Dentro
}

console.log(blocoVar);
console.log(blocoLet);


// Chamando fora a variavel Let mostrar não definido 
