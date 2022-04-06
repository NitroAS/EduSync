let converterCelsius = document.querySelector('#converterCelsius')
let converterFahrenheit = document.querySelector('#converterFahrenheit')

const calculoCelsius = () =>
{
    let celsius = document.querySelector('#celsius').value
    let calculo = celsius * 1.8 + 32
    let mostrarCelsius = ''
    mostrarCelsius = `A temperatura convertida é: ${calculo.toFixed(2)}`
    convertidoEmCelsius.innerHTML = mostrarCelsius
    return calculo
}
converterCelsius.addEventListener ('click' ,calculoCelsius)

const calculoFahrenheit = () =>
{
    let fahrenheit =  document.querySelector ('#fahrenheit').value
    let calculo = (fahrenheit - 32) / 1.8 
    let mostrarFahrenheit = ''
    mostrarFahrenheit = `A temperatura convertida é: ${calculo.toFixed(2)}`
    convertidoEmFahrenheit.innerHTML = mostrarFahrenheit
    return calculo

}
converterFahrenheit.addEventListener ('click' ,calculoFahrenheit)





