// declarando class + name

// mundo abstrato
class Cartao {

    // Atributos - Características
    // titular:string = "Alexsandro";
    // numero:number = 11111222233334444;
    // ativo:boolean = true;
    // evv: number = 123;

    titular:string;
    numero:number;
    ativo:boolean;
    evv: number;


    // construtor na hora de instância um objeto eu sou obrigado a passar as propriedade
    constructor(_titular:string , _numero:number , _ativo:boolean , _evv:number){
        this.titular = _titular
        this.numero = _numero
        this.ativo = _ativo
        this.evv = _evv

    }

    // Método  - Funções - Ações

    // Ação Padrão
    Cancelar():void{
        this.ativo = false;
        console.log('Cartão cancelado!');
    }
}

// concreto

// Instância - Criação do Objeto

// let cartao = new Cartao()
// cartao.titular = "Cristiano"
// cartao.Cancelar();
// console.log(cartao.titular);

// usando o construtor só passar as informações aqui e passando todos as informações e e feito quando construir um objeto e passar os argumentos
let cartao1 = new Cartao('Felipe' , 25252255 , true , 2322323)
cartao1.titular = "Roberto"
