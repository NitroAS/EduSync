let pokemon: number[] = [10, 12, 15,20, 22]

let numeroSoma: number = 9
let numeroResultado: number[] = pokemon.map((x:number )=> {
    return x + numeroSoma
})  
console.log(numeroResultado);

