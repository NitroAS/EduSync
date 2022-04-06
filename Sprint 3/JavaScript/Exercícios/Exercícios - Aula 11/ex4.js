let filmes = [
    {
        "id": 1,
        "title": "Die Hard",
        "valor": 12.00,
        "rating": 5.0
    },

    {
        "id": 2,
        "title": "Homem aranha 1",
        "valor": 8.00,
        "rating": 4.0
    },

    {
        "id": 3,
        "title": "Homem de ferro",
        "valor": 7.00,
        "rating": 3.0
    },

    {
        "id": 4,
        "title": "Die Hard",
        "valor": 13.00,
        "rating": 5.0
    }
];


// Descontos do filmes 

let a = filmes
    .map(descontos => (descontos.valor * 0.90).toFixed(2))
console.log(`Descontos dos Filmes:${a}`);


// numeros acima de 10
let b = filmes
    .filter(acima => acima.valor > 10);
for (let index = 0; index < b.length; index++) {


    console.log(`Números Acima de 10: ${b[index].valor}`)
}

let reduce = []
let contador = 0
let map = filmes
.map(function (valor){
    if (valor.valor < 10)
    {
        reduce[contador] = valor
        contador++
        
        return valor
    }
})

let media = reduce.reduce((soma, valores) => soma += valores.valor , 0 ) / reduce.length
console.log(media)
