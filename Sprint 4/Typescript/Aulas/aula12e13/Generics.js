"use strict";
// Generics - Tipo Genérico /Qualquer
// Constraints - Para limitar
let pessoa = Mesclar({ nome: 'Alexsandro' }, { idade: 17 });
function Mesclar(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
// essa function server para pega um elemento
function GetPro(obj, key) {
    return obj[key];
}
let nomenclatura = GetPro(pessoa, 'nome');
console.log(nomenclatura);
