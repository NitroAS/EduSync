// Manipulações do DOM

let botao        = document.querySelector('#adicionar')
let contador     = document.querySelector('#contador')
let manual       = document.querySelector('.manual')

const Somar = () => {
    // Pegar o que está dentro da tag = innerHTML (string) 01
    // Converter string em int -  parseInt
    contador.innerHTML = parseInt(contador.innerHTML) + 1;
}

// Eventos - Manipulação
// Evento => Ação

botao.addEventListener('click' , Somar);

// com isso com o click ta funcionando e o digite número por enquanto n ta funcionando


manual.addEventListener ('input' , () => {
    contador.innerHTML = manual.value;
})






