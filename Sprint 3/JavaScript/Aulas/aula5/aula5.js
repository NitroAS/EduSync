// Arrow Funtions / Funções Seta = não precisa colocar return na sintaxe padrão 

// função padrão / declaração da função

function DizerOlaMundo(){
    return "Olá Mundo";
}

// /função padrão de constante / declaração de função como expressão constante

const DizerOlaMundo2 = function (){
    return "Olá Mundo 2";
}

// Arrow Function / bem mais curto e simples e o "=>" literalmente parece uma seta por causa disso o nome
const DizerOlaMundo3 = () => 'Olá Mundo 3';

// Escrevendo Arrow Function mas preciso retorna algo / QUANDO TIVER MUITOS PRECEDIMENTOS 

const DizerOlaMundo4 = () => {
    return "Olá Mundo 4";


}

// Declarando Arrow Function passando parametros / usando interpolação

// Recepcionar novas pessoas

const Recepcionar = (nome , sobrenome) => `Olá ${nome} ${sobrenome}`
console.log(Recepcionar("Paulo" , "Brandão"));

console.log(DizerOlaMundo());
console.log(DizerOlaMundo2());
console.log(DizerOlaMundo3());
console.log(DizerOlaMundo4());



