// Generics - Tipo Genérico /Qualquer
// Constraints - Para limitar
let pessoa = Mesclar(
    {nome : 'Alexsandro'}, 
    {idade : 17});
    
    function Mesclar<U extends object, V extends object>(obj1: U , obj2: V){
        return{
            ...obj1,
            ...obj2,
        }
    }

    // essa function server para pega um elemento
     function GetPro <T extends object , K extends keyof T>(obj: T , key: K){
         return obj[key]
     }
    let nomenclatura = GetPro(pessoa, 'nome')


    console.log(nomenclatura);