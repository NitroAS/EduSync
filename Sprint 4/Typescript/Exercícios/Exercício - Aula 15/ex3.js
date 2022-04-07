"use strict";
class Animais {
    constructor(_porte, _idade, _peso) {
        this.porte = _porte;
        this.idade = _idade;
        this.peso = _peso;
    }
}
class Felinos extends Animais {
    constructor(_PorteSuper, _IdadeSuper, _PesoSuper) {
        super(_PorteSuper, _IdadeSuper, _PesoSuper);
        this.AfiarGarras = () => {
            let mensagem = 'Afiando  a Garrinha';
            return mensagem;
        };
        this.Dormir = () => {
            let mensagem = 'Em coma';
            return mensagem;
        };
        this.TipoFelino = true;
    }
}
let crianca = [];
for (let index = 0; index < 1; index++) {
    let porte = 'anão';
    let idade = 1;
    let peso = 5;
    crianca[index] = new Felinos(porte, idade, peso);
}
let adulto = [];
for (let index = 0; index < 1; index++) {
    let porte = 'barrigudo';
    let idade = 5;
    let peso = 10;
    adulto[index] = new Felinos(porte, idade, peso);
}
const pokemon = () => {
    console.log(crianca[0].Dormir());
    console.log(adulto[0].AfiarGarras());
};
pokemon();
