let gerar = document.querySelector('#gerar')

const calculoTabuada = () => 
{
    let resultadoMostrando = document.getElementById ('resultadoMostrando')
    let tabuada = parseInt(document.querySelector('#tabuada').value)
    let loop = ''
    let resultadoFinal

    for (let index = 0; index <= 10; index++) 
    {
        
        resultadoFinal = tabuada * index
       loop = loop + `${tabuada} x ${index} = ${resultadoFinal}<br/>`
       
        
    }
    
resultadoMostrando.innerHTML = `${loop}`
}
gerar.addEventListener ('click' , calculoTabuada)