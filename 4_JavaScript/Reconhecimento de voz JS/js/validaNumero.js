function validaNumero(chute){
    const numero = +chute; //transforma em inteiro

    if(verificaSeENumero(numero)){
        console.log(`${chute} Não é numero`);
    }

    if(numeroForaDaRange(numero)){
        console.log(`${chute} está fora da range`);
    }
}

function verificaSeENumero(numero){
    return Number.isNaN(numero);
}

function numeroForaDaRange(numero){
    return numero < 1 || numero > 1000;
}