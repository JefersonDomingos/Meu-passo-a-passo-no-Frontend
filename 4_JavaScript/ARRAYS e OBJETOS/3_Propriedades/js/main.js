//PROPRIEDADES
//SÃO INFORMAÇÕES QUE PODEMOS ACESSAR DE UM VALOR
//QUASE TODOS OS VALORES TEM PROPRIEDADES 'MENOS' O undefined e o null;
//PODEMOS ACESSAR AS PROPRIEDADES DE DUAS MANEIRAS:

let frutas = ['pera', 'uva', 'maçã', 'morango'];
let carros = ['gol', 'celta', 'uno', 'fiesta'];

console.log(frutas.length); //imprimirá  4, pois estou acessando o comprimento através do  'ponto length'
console.log(carros['length'] -1); //imprimirá 3, pois estou acessando o comprimento - 1 'através de string'
console.log(carros['2']); //corresponde ao 'uno' // 0,1,2
console.log(frutas[1]); //corresponde a 'uva' // 0,1