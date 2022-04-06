"use strict";
// Encapsulamento 
// Modificado de Acesso
// Public,Private,Protected, readonly ,-> leitura e escrita  get , set
class cartao5 {
    constructor(_titular, _numero, _ativo, _evv) {
        // da permissão de leitura e escrita para valores private
        // Get  - LEITURA
        // Set - ESCRITA
        this._idade = 19;
        this.titular = _titular;
        this.numero = _numero;
        this.ativo = _ativo;
        this.evv = _evv;
    }
    // Só com o Get vai ser modo de leitura vai precisar do SET para conseguir modificar 
    get Idade() {
        return this._idade;
    }
    set Idade(valor) {
        if (valor >= 18) {
            this._idade = valor;
        }
    }
    // Ação Padrão
    Cancelar() {
        this.ativo = false;
        console.log('Cartão cancelado!');
    }
}
// Polimorfismo
// Sobrescrita de métodos do mesmo nome
// Sobre carga = não ta desponivel no Typescript :(
class CartaoCredito2 extends cartao5 {
    constructor(_titular, _numero, _ativo, _evv, _limite) {
        super(_titular, _numero, _ativo, _evv);
        this.limite = _limite;
    }
    ConsultarLimit() {
        return this.limite;
    }
    // Sobrescrita
    Cancelar() {
        console.log("Agora seu cartão de crédito foi cancelado!");
    }
}
let cartao3 = new CartaoCredito2("Paulo", 221231323132, true, 12123, 5000);
// console.log(cartao5);
// cartao3.Idade = 23
// console.log(cartao3.Idade);
cartao3.Cancelar();
class CartaoDebito extends cartao5 {
    constructor() {
        super(...arguments);
        this.saldo = 8000;
    }
    SubtrairSaldo(valor) {
        this.saldo = this.saldo - valor;
        return this.saldo;
    }
}
let cartao0 = new CartaoDebito("Weollington", 99999, true, 123);
console.log(cartao0.SubtrairSaldo(465));
