function validaNumero(chute){
    const numero = +chute; //transforma em inteiro

    if(gameOver(chute)){
        exibeChute(chute)
        document.body.innerHTML =`
        <h3>Você perdeu!</h3>
        <button class="reiniciar" id="btn-reiniciar"><i class="fa-solid fa-arrow-rotate-right" id="i-reload"></i></button>
        `
        return;
    }

    if(verificaSeENumero(numero)){
        chuteEL.innerHTML += `
            <div>Valor inválido</div>
        `;
        return //Se não for um numero, pare a função
    }

    if(numeroForaDaRange(numero)){
        chuteEL.innerHTML += `
            <div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>
        `;
        return //Se não estiver dentro da Range, pare a função
    }

    if(acertou(numeroSorteado,numero)){
        document.body.innerHTML = `
        <h3>Você Acertou!</h3>
        <h2>O número era ${numeroSorteado}</h2>
        <button class="reiniciar" id="btn-reiniciar"><i class="fa-solid fa-arrow-rotate-right" id="i-reload"></i></button>`
    }

    else if(maiorOuMenor(numero,numeroSorteado)){
        chuteEL.innerHTML += `  
        <div>O numero secreto é menor                         
            <i class="fa-sharp fa-solid fa-arrow-down"></i>
        </div>`
    }else{
        chuteEL.innerHTML += `
        <div>O numero secreto é maior 
            <i class="fa-sharp fa-solid fa-arrow-up"></i>
        </div>`
    }

}

function verificaSeENumero(numero){
    return Number.isNaN(numero);
}

function numeroForaDaRange(numero){
    return numero < 1 || numero > 1000;
}

function acertou (numeroSorteado, numero){
    console.log(numeroSorteado);
    return numeroSorteado == numero; 
}

function maiorOuMenor (numero, numeroSorteado){
    return numero > numeroSorteado;
}

function gameOver(chute){
    return chute == "game over";
}

recognition.addEventListener('end',  () => recognition.start());

document.body.addEventListener('click', e => {
    if(e.target.id === "i-reload"){
        window.location.reload();
    }
})

