/*
1_  As varíveis podem ter o mesmo nome, porém se o escopo for diferente não da conflitos
2_ Os escopos são separados por {} chaves, veja abaixo:*/

let nome = "pessoaUm";  //Escopo Global

if(1 > 0){
    let nome = "pessoaDois"; //Escopo do if(){}
    console.log(nome);  //Escopo do if(){}
}

console.log(nome) //Escopo Global