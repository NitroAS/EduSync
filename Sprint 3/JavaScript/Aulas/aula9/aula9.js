// Manipulações do DOM

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

// Filter 

// let  baratos = produtos.filter((x) => x.preco < 1000)
// console.log(baratos);

// usando o filter consigo filtra os produtos q desejo mostrar, igual o exemplo acima q filtrei só para produtos abaixo de 1000]

// tem como fazer por categoria também 
let  baratos2 = produtos.filter((x) => x.categoria == 'Eletrônico')
console.log(baratos2);
// criar um produto do zero para mostrar só oq precisar realmente

// let  baratos3 = produtos.filter((x) => {
//     console.log(x.categoria == 'Eletrônico');
// })
// sistema boleano  