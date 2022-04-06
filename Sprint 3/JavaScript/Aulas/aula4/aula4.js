const pessoa = {
    nome : "Paulo",
    sobrenome : "Brandão",
    links : {
        instagram : "link1",
        linkedin : "link2",
        github : "link3",
    }

}

// forma mais demorada 

// const nome =  pessoa.nome;
// const sobrenome = pessoa.sobrenome

// Desestruturação = reaproveitando todos os elementos e tirando eles do JSON e tendo um sintaxe melhor 

const {nome , sobrenome } = pessoa;
// so add todas as variaveis desse jeito q vai desestruturando e faz de uma forma bem mais simples

console.log(nome);