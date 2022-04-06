const v = [1, 4, 7, 1, 2, 1, 4, 25, 3, 7]
let vReduce = v.reduce((soma, valores) => soma += valores , 0 ) / v.length
console.log(`Média dos Valores: ${vReduce}`);


