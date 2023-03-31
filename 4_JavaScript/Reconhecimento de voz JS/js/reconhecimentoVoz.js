window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";
recognition.start();
const chuteEL = document.getElementById("chute");

recognition.addEventListener('result', onSpeak);
function onSpeak(e){
    const chute = e.results[0][0].transcript;
    exibeChute(chute);
    validaNumero(chute)
}

function exibeChute (chute){
    chuteEL.innerHTML = `
    <div>Você disse: </div>
    <span id="box">${chute}</span>
    `
}