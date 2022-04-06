
let morango = parseFloat(prompt('Digite a quantidade de Morangos desejados'))
let maca = parseFloat(prompt('Digite a quantidade de Maças desejados'))

function calculoMorango(morango) {

    if (morango <= 5) {
        let KG = morango * 2.50
        return KG
    }

    else {
        let KG = morango * 2.20
        return KG
    }
}

let valorKgMorango = calculoMorango(morango)


function calculoMaca(maca) {

    if (maca <= 5) {
        let KG = maca * 1.80
        return KG
    }

    else {
        let KG = maca * 1.50
        return KG
    }
}

let valorKgMaca = calculoMaca(maca)


const desconto = calculoMaca(maca) + calculoMorango(morango);
const SomaDosLet = morango + maca

function valorDesconto(desconto, SomaDosLet) {

    if (SomaDosLet > 8 || desconto > 25) {
        let final = desconto * 0.9
        return final
    }
    return final2
}

console.log(`O total deu: R$ ${valorDesconto (desconto,SomaDosLet).toFixed(2)}`);



