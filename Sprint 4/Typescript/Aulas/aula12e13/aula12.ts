// Encapsulamento 
// Modificado de Acesso

// Public,Private,Protected, readonly ,-> leitura e escrita  get , set

class cartao5 {
    public titular:string;  // é o padrão
    protected numero:number; // consigo  chamar nas classes nas classes filhas, mas não consigo alterar na instância do objeto
    private ativo:boolean; // consigo chamar apenas nessa classe
    readonly evv: number; //Somente leitura, não é possível atribuir novos valores
    
    // da permissão de leitura e escrita para valores private
    // Get  - LEITURA
    // Set - ESCRITA

    private _idade:number = 19;

    // Só com o Get vai ser modo de leitura vai precisar do SET para conseguir modificar 
    get Idade():number{
        return this._idade
    }
    

    set Idade(valor:number){
        if(valor >= 18){
        this._idade = valor;
        }
    }
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
// Polimorfismo
// Sobrescrita de métodos do mesmo nome
// Sobre carga = não ta desponivel no Typescript :(

class CartaoCredito2 extends cartao5{
    
    limite:number;
    
    constructor(_titular:string , _numero:number , _ativo:boolean , _evv:number, _limite:number ){
        
        super(_titular, _numero , _ativo , _evv)
        
        this.limite = _limite;
    }
    
    ConsultarLimit():number{
        return this.limite;

        
    }
     // Sobrescrita
        Cancelar():void{
            console.log("Agora seu cartão de crédito foi cancelado!");
            
            
        }
}

let cartao3 = new CartaoCredito2 ("Paulo" , 221231323132 ,true ,12123 , 5000)

// console.log(cartao5);
// cartao3.Idade = 23
// console.log(cartao3.Idade);

cartao3.Cancelar()



//  Saldo - Atributo

// Instrutura de uma Interface
interface ICartaoDebito{
    // SubtrairSaldo - Método
    // Interfaces - Contrato
    saldo:number
    SubtrairSaldo(valor:number):number

    // CRUD = interface usada muito no CRUD
    // Create
    // Read
    // Update
    // Delete
}

class CartaoDebito extends cartao5 implements ICartaoDebito{
    saldo: number = 8000;
    SubtrairSaldo(valor: number): number {
        this.saldo = this.saldo - valor
        return this.saldo
    }

}

let cartao0 = new CartaoDebito("Weollington" , 99999 , true , 123)
console.log(cartao0.SubtrairSaldo(465));
