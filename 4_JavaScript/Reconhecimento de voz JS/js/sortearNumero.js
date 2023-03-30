const menorValorEl = document.getElementById("menor-valor");
const maiorValorEl = document.getElementById("maior-valor");
const menorValor = 1;
const maiorValor = 1000;
const numeroAleatorio = sortearNumero();


function sortearNumero (){
    return parseInt(Math.random() * maiorValor + 1);
}

console.log(numeroAleatorio);

menorValorEl.innerHTML = menorValor;
maiorValorEl.innerHTML = maiorValor;