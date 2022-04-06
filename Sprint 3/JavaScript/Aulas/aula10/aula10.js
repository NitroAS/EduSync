
const produtos = [
    {
        nome: 'Celular',
        categoria: 'Eletrônico',
        preco: 900
    },
    {
        nome: 'MacBook',
        categoria: 'Eletrônico',
        preco: 8000
    },
    {
        nome: 'Super Mario Bros',
        categoria: 'Jogo',
        preco: 60
    }
]
// Filter - Map - Reduce

// Map = uma maneira de gerar objeto fazendo alterações nas propriedades desse objeto

// Como isso funcionar:

let convertido = produtos.map(x =>x.preco*5.40);
console.log(convertido);

// Como se fosse um laço 
// let convertido2 = produtos.map(x => {
//     console.log(x.preco*5.40);
// })
// console.log(convertido2)


// array.forEach(element => {
    
// }); = map é bem melhor




