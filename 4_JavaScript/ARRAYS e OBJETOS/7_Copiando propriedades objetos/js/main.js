//Copiar as propriedades de um OBJETO
//Podemos criar um Objeto com poucas propriedades
//e depois importar, copiar as propriedades de um outro

let pc = {
    ssd: 512,
    ram: 32,
}

let pecas = {
    cpu: 'core i7',
    cooler: 'whater'
}

console.log(pc);

//Objeto 'pc' copiando as propriedades do Objeto 'pecas'
Object.assign(pc, pecas);

console.log(pc);