const quantidade = document.querySelector("#quantidade");
const unidadeUm = document.querySelector("#unidade-medida-um");
const unidadeDois = document.querySelector("#unidade-medida-dois");
const btnConverter = document.querySelector("#btn-converter");
const campoResultado = document.querySelector("#resultado");
const campoMensagem = document.querySelector("#mensagem");

function converter (){
    if(unidadeUm.value == unidadeDois.value){
        campoResultado.value = quantidade.value;
    }
    
    //Transformar em metros, vai me permitir trabalhar apenas com (uma) medida(metros), isso irá facilitar os cáculos
    let metros
    switch(unidadeUm.value){
        case "m": metros = quantidade.value * 1;
        break;

        case "mm": metros = quantidade.value / 1000;
        break;

        case "cm": metros = quantidade.value / 100;
        break;

        case "km": metros = quantidade.value * 1000;
        break;
    }

    let resultado;
    switch(unidadeDois.value){
        case "m": resultado = metros;
        break;

        case "mm": resultado = metros * 1000;
        break;

        case "cm": resultado =  metros * 100;
        break;

        case "km": resultado = metros / 1000;
        break;
    }

    campoResultado.value = resultado;
    const textoUnidadeUm = unidadeUm.options[unidadeUm.selectedIndex].text;
    const textoUnidadeDois = unidadeDois.options[unidadeDois.selectedIndex].text;

    campoMensagem.textContent = `${quantidade.value} ${textoUnidadeUm} equivalem a ${resultado} ${textoUnidadeDois}`;

}
btnConverter.addEventListener("click", converter);