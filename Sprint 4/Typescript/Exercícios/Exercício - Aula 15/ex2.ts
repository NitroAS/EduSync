class Carro{
    cor: string
    marca: string
    placa: string

    constructor(_Cor:string , _Marca:string , _Placa:string) {
        this.cor = _Cor
        this.marca = _Marca
        this.placa = _Placa

    }

}
let listaDeCarros: Array<Carro> = [{
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
}]

const list = () => {
    for (let i = 0; i < 3; i++) {
        console.log(listaDeCarros[i].placa)
    }
}