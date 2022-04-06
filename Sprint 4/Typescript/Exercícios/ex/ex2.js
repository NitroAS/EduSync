"use strict";
class Carro {
    constructor(_Cor, _Marca, _Placa) {
        this.cor = _Cor;
        this.marca = _Marca;
        this.placa = _Placa;
    }
}
let listaDeCarros = [{
        cor: `Preto`,
        marca: `Jeep`,
        placa: `NAX-1019`
    }, {
        cor: `Vermelho`,
        marca: `Ferrari`,
        placa: `SRB-2729`
    }, {
        cor: `Branco`,
        marca: `Chevrolet`,
        placa: `ALD-2911`
    }];
const list = () => {
    for (let i = 0; i < 3; i++) {
        console.log(listaDeCarros[i].placa);
    }
};
