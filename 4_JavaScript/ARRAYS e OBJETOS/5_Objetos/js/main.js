//OBJETOS;
//SÃO UMA COLEÇÃO DE PROPRIEDADES, PARECIDO COM UM ARRAY;
//SUAS PROPRIEDADES PODEM SER ACESSADAS USANDO: nomeDoObjeto.propriedade

let carro = {
    marca: 'wolkswagem',
    modelo: 'gol',
    portas: 4,
    mudarCor: function(){
        console.log("A COR FOI MUDADA");
    }
}


console.log(carro.modelo); //Acessando a propriedade modelo;
console.log(carro.mudarCor()); //Acessando o método mudarCor();
console.log(carro.portas); //Acessando a propriedade portas;