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

// Reduce = Reduzir o objeto ao unico elemento 

// Podemos pega o preço e fazer a soma pra pega o total dele e o Reduce vai nos ajudar nisso:


// parecido com o for
//  o primeiro argumento da função q é a variavel acumualadora depois temos o item que seria elemento por elemento e depois temos oq vai ser executador e que o parametro/valor inicial é 0
let total = produtos.reduce((acumulador, item) => acumulador += item.preco, 0);
console.log(total);


// Consigo misturar esses elementos tambem:
// desse jeito ainda só vou ter os elementos convertido e não vou ter o total 
// let totalConvertido = produtos.map (x => x.preco*5.40)
// console.log(totalConvertido);


// Já aqui ta convertido e com o total
// resultado é total em dolar + total em reais
// let totalConvertido2 = produtos.map (x => x.preco*5.40)
// .reduce((acumulador, item) => acumulador += item, 0)
// console.log(totalConvertido2);

// Add filter agora:
let totalConvertido3 = produtos
.filter(x => x.categoria == 'Eletrônico')
.map (x => x.preco*5.40)
.reduce((acumulador, item) => acumulador += item, 0)
console.log(totalConvertido3);
