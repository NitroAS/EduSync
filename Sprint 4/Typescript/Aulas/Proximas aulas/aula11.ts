class cartao {



    titular:string;
    numero:number;
    ativo:boolean;
    evv: number;


   
    constructor(_titular:string , _numero:number , _ativo:boolean , _evv:number){
        this.titular = _titular
        this.numero = _numero
        this.ativo = _ativo
        this.evv = _evv

    }

 
    // Ação Padrão
    Cancelar():void{
        this.ativo = false;
        console.log('Cartão cancelado!');
    }
}

class CartaoCredito extends cartao{

    limite:number;

    constructor(_titular:string , _numero:number , _ativo:boolean , _evv:number, _limite:number ){

        super(_titular, _numero , _ativo , _evv)

        this.limite = _limite;
    }

    ConsultarLimite():number{
        return this.limite;
    }
}

let cartao2 = new CartaoCredito ("Paulo" , 221231323132 ,true ,12123 , 5000)

console.log(cartao2.ConsultarLimite());

