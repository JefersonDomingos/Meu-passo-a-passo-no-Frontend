//Mutação em objetos
//Podemos criar um objeto A clonar o A no objeto B


let objA = {
    cor: 'azul',
    font: 'arial'
}

let objB = objA; //copiando

console.log(objA);
console.log(objB);

console.log(objA == objB); //True, são iguais;

let objC = {
    cor: 'azul',
    font: 'arial'
}

console.log(objC == objA); //False, apesar de terem as mesmas propriedades eles são diferentes