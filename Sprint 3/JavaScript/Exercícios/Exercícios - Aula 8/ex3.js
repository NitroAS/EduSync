let botao= document.getElementById('botao')

const calculo = () =>
{
    let altura= document.querySelector('#altura').value
    let peso= document.querySelector('#peso').value

    let imc = peso / (altura * altura)
    alert(imc.toFixed(1))
    return imc
}

botao.addEventListener('click', calculo)