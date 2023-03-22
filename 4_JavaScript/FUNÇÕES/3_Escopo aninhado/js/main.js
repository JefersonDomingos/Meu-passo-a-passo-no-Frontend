/*
1_  As varíveis podem ter o mesmo nome, porém se o escopo for diferente não da conflitos
2_ Os escopos são separados por {} chaves, veja abaixo:*/

//Escopo aninhado 

let y = 0; //escopo global

function imprimir(){
    let y = 1 //escopo da função imprimir
    
    if(2 > 1 ){
        console.log("ok");
        let y = 2;
        console.log(y); //escopo do if(){}
    }

    console.log(y); //escopo da função imprimir

}
imprimir();

console.log(y); //escopo global