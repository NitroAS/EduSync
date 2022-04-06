"use strict";
class cartao5 {
    constructor(_titular, _numero, _ativo, _evv) {
        this.titular = _titular;
        this.numero = _numero;
        this.ativo = _ativo;
        this.evv = _evv;
    }
    // Ação Padrão
    Cancelar() {
        this.ativo = false;
        console.log('Cartão cancelado!');
    }
}
class CartaoCredito2 extends cartao {
    constructor(_titular, _numero, _ativo, _evv, _limite) {
        super(_titular, _numero, _ativo, _evv);
        this.limite = _limite;
    }
    ConsultarLimite() {
        return this.limite;
    }
}
let cartao3 = new CartaoCredito("Paulo", 221231323132, true, 12123, 5000);
console.log(cartao2.ConsultarLimite());
