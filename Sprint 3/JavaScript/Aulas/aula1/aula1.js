// vamos falar sobre objetos  JSON = javascript objection notecion = é um modelo para armanezamento é transmissão de informações em formato de texto mt utilizado na web


//  Chave : Valor
// String - texto
// Numero - inteiro || decimal
// Objeto
// Array = []
// Boleano - V/F
// Null - nulo


var objeto = {
    "empresa" : "google" ,
    "endereco" : "Avenida Paulista, 120" ,
    // trabalhando só com texto

    // aqui add um array e trabalhando nele em varias camadas
    "funcionarios" : [
        {
            nome:  "Paulo",
            email:  "paulo@email.com",
            cpf : 1112223334444,
            altura : 1.76,
            ativo : true
        },

        {
            nome:  "Adriano",
            email:  "adriano@email.com",
            cpf : 1112223334234,
            altura : 1.23,
            ativo : true
            //  no visual n preciso usar essas "" com isso facilitar a leitura dos codigos mas em outras linguagem necessita dessas ""
        }
//  desse jeito economiza parametros de variaveis 

    ]

}
// transformando nessas strings em objeto JSON
// console.log(JSON.stringify(objeto)); não precisa no javascript então pode usar sem eles

console.log(objeto.funcionarios[0].email);

// esse .nome serve para pega um objeto expecifico do Array

// JSON é composto de chaves e valor , ele é inicial {} e os elemento devem tá separado com vírgula essa é a sintaxe basica do objeto JSON