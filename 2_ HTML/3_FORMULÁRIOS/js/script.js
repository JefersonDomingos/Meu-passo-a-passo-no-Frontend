const formulario = document.getElementById("formulario");
const nome = document.querySelector("#nome");
const sobrenome = document.querySelector("#sobrenome");
const email = document.querySelector("#email");
const area = document.querySelectorAll(".area");
const senioridade = document.querySelector("#senioridade");
const textarea = document.querySelector("#experiencia");

formulario.addEventListener("submit",(e) => {
    e.preventDefault()
    
    //verificar nome
    if(nome.value === "" || nome.value.length < 2){
        alert("Insira um nome válido");
        return;
    }

    //verificar sobrenome
    if(sobrenome.value === "" || sobrenome.value.length < 2){
        alert("preencha o sobrenome corretamente");
        return;
    }

    //verificar email
    if(email.value === "" || !validaEmail(email.value)){
        alert("preencha o email corretamente");
        return;
    }

    if(senioridade.value === ""){
        alert("preencha o campo de senioridade");
        return;
    }

    formulario.submit();
}
)

function validaEmail(email){
    const regexEmail = new RegExp(
        //usuário12@email.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z-A-Z]{2,}$/
    );

    if(regexEmail.test(email)){
        return true;
    }
    return false;
}

textarea.addEventListener("click", teste(area))

function teste(area){
    for(let i = 0; i < area.length; i++){
        if(area[i].checked != false){
            console.log(area[i]);
        }
    }
}

