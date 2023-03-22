/*
1_  As varíveis podem ter o mesmo nome, porém se o escopo dor diferente não da conflitos
2_ Os escopos são separados por {} chaves, veja abaixo:*/

const nome = "Jéferson";  //Escopo Global

function imprimir(){
    const nome = "Dionata"; //Escopo da função
    console.log(nome); //Escopo da função
}

imprimir()
console.log(nome) //Escopo Global