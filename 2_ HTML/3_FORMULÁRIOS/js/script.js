const formulario = document.getElementById("formulario");
const nome = document.querySelector("#nome");
const sobrenome = document.querySelector("#sobrenome");
const email = document.querySelector("#email");
const textarea = document.querySelector("#experiencia");
const botaoEnvio = document.querySelector("#botao-envio");

//funções
function verificacoes (eventoEnvio){
    eventoEnvio.preventDefault();
    verificarNome();
    verificarSobrenome();
}

function verificarNome (){
    if(nome.value === "" || nome.value.length < 2){
        alert("escreva seu nome");
    }
    return;
}

function verificarSobrenome (){
    if(sobrenome.value === "" || sobrenome.value.length < 2){
        alert("escreva seu sobrenome");
    }
    return;
}

function verificarEmail (){
    
}

//eventos
botaoEnvio.addEventListener("click", verificacoes)

