let nick = document.getElementById('inputNick')
let fulano = document.getElementById('nickname1')
nick.addEventListener('input', () => {
    if (nick.value.length > 1) {
        document.getElementById('nickname1').innerHTML = nick.value
    }
})

let numerico
let nivel = document.getElementById('inputIntervalo')
let botaoComecar = document.getElementById('botao1')
const adivinhar = () => {

    if (nivel.value == 1) {
        numerico = Math.random() * 11 
        numerico = numerico.toFixed(0)
    }
    
    else if (nivel.value == 2) {
        numerico = Math.random() * 101
        numerico = numerico.toFixed(0)
    }
    
    else {
        numerico = Math.random() * 201
        numerico = numerico.toFixed(0)
    }
    console.log(numerico);
}
botaoComecar.addEventListener('click', adivinhar)

let contador = 3
let númeroE = document.getElementById('númeroE')
let inputDigite = document.getElementById('inputDigite')
let botaoJogar = document.getElementById('botao2')
const acertar = () => {


    if (numerico == inputDigite.value) {
        tentativas.innerHTML = 'Parabéns, você conseguiu adivinhar!'
        númeroE.innerHTML = ''
        document.location.reload()
    }
    else if (numerico < inputDigite.value) {
        númeroE.innerHTML = '<b>O número é menor!</b>'
        contador--
        tentativas.innerHTML = `Você ainda tem ${contador} tentativas!`
    }
    else {
        númeroE.innerHTML = '<b>O número é maior!</b>'
        contador--
        tentativas.innerHTML = `Você ainda tem ${contador} tentativas!`
    }

    if (contador == 0) {
        tentativas.innerHTML = 'Esgotaram suas tentativas!'
    }

    if (contador == -1) {
        document.location.reload()
    }
    console.log(numerico);
}

botaoJogar.addEventListener('click', acertar)