var usuario = {
    nome: "Paulo",
    idade: 31,
    cidade: "São Paulo",
    estado: "SP"
}

// Com concatenação

// atalho "log"

console.log("Olá , Meu nome é "+usario.nome+ ",tenho"+usuario.idade+ "anos, moro em"+usario.cidade+" ," +usario.estado);
//  a leitura fica dificil de entender 

// Com interpolação
// usando crase usar no começo e no final é sifrão quando for add alguma informação, quando trabalhar com varias variaveis é bem melhor usar interpolação

console.log(`Olá, meu nome é ${usuario.nome}, tenho ${usario.idade} anos , moro em ${usuario.cidade}` );