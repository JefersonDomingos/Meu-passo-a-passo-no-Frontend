const formulario = document.getElementById("formulario");
const nome = document.querySelector("#nome");
const sobrenome = document.querySelector("#sobrenome");
const email = document.querySelector("#email");
const area = document.querySelectorAll(".area");
const senioridade = document.querySelector("#senioridade");
const tecnologias = document.querySelectorAll(".tecnologias");
const experiencias = document.querySelector("#experiencia");

formulario.addEventListener("submit",(e) => {
    e.preventDefault()
    
    //verificar nome
    if(nome.value === "" || nome.value.length < 2){
        alert("Insira um nome válido");
        return;
    }

    //verificar sobrenome
    if(sobrenome.value === "" || sobrenome.value.length < 2){
        alert("Preencha o sobrenome corretamente");
        return;
    }

    //verificar email
    if(email.value === "" || !validaEmail(email.value)){
        alert("Preencha corretamente o email");
        return;
    }
    
    //Area de Dev
    if(!validaAreaDev (area)){
        alert("Selecione sua area de Dev");
        return;
    }

    //Senioridade
    if(senioridade.value === ""){
        alert("Selecione sua senioridade");
        return;
    }
    
    //tecnologias
    if(!validaTecnologias(tecnologias)){
        alert("Selecione pelo menos uma tecnologia");
        return;
    }

    //experiencias
    if(experiencias.value === ""){
        alert("Adicione qualquer experiencia obtida");
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

function validaAreaDev (area) {
    for(let i=0; i<area.length; i++){
        if(area[i].checked){
            return true;
        }
    }
    return false;
}

function validaTecnologias (techs) {
    for(let i=0; i<tecnologias.length; i++){
        if(techs[i].checked){
            return true;
        }
    }
    return false;
}