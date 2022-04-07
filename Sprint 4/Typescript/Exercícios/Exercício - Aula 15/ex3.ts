class Animais {
    porte: string;
    idade: number;
    peso: number;
    constructor(_porte:string , _idade:number , _peso:number){
        this.porte = _porte
        this.idade = _idade
        this.peso = _peso
  }
}



class Felinos extends Animais{


        AfiarGarras = (): string =>  {
            let mensagem = 'Afiando  a Garrinha'
            return mensagem;
        }
    
        Dormir = (): string =>  {
            let mensagem  =  'Em coma' 
            return mensagem        
        }
    
        TipoFelino: boolean
        constructor(_PorteSuper: string, _IdadeSuper: number, _PesoSuper: number) {
            super(_PorteSuper, _IdadeSuper, _PesoSuper);
            this.TipoFelino = true
        }

}

let crianca: Felinos[] = []
for (let index = 0; index < 1; index++) {
   
    let porte:string = 'anão'
    let idade:number = 1
    let peso:number = 5

    crianca[index] = new Felinos  (porte , idade , peso)
}


let adulto: Felinos[] = []
for (let index = 0; index < 1; index++) {
   
    let porte:string = 'barrigudo'
    let idade:number = 5
    let peso:number = 10

    adulto[index] = new Felinos  (porte , idade , peso)
}

const pokemon = () => {
    console.log(crianca[0].Dormir());
    console.log(adulto[0].AfiarGarras());
}
pokemon()