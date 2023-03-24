const showMiliseconds = document.getElementById("miliseconds");
const showSeconds = document.getElementById("seconds");
const showMinutes = document.getElementById("minutes");
const startBtn = document.getElementById("start-btn-id");
const pauseBtn = document.getElementById("pause-btn-id");
const resumeBtn = document.getElementById("resume-btn-id");
const resetBtn = document.getElementById("reset-btn-id");

let interval;
let isPaused = false;
let miliseconds = 0;
let seconds = 0;
let minutes = 0;


startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pause);
resumeBtn.addEventListener("click", resume);
resetBtn.addEventListener("click", reset);



function startTimer(){
    interval = setInterval(() => {
        if(!isPaused){
            miliseconds += 10;
            showMiliseconds.textContent = formatMs(miliseconds);
            
            if(miliseconds == 1000){
                seconds ++;
                miliseconds = 0;
                showSeconds.textContent = formatTime(seconds);
            }

            if(seconds == 60){
                minutes++;
                seconds = 0;
                showMinutes.textContent = formatTime(minutes);
            }
        }

    },10);

    pauseBtn.style.display = "block";
    startBtn.style.display = "none";
}

function pause(){
    isPaused = true;
    resetBtn.style.display = "block";
    startBtn.style.display = "none";
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block";
   
}

function resume(){
    isPaused = false;
    pauseBtn.style.display = "block";
    resumeBtn.style.display = "none";
   
}

function reset(){
    clearInterval(interval);

    isPaused = false;
    miliseconds = 0;
    seconds = 0;
    minutes = 0;

    showMiliseconds.textContent = "000";
    showSeconds.textContent = "00";
    showMinutes.textContent = "00"

    pauseBtn.style.display = "none";
    resumeBtn.style.display = "none";
    startBtn.style.display = "block";
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

function formatMs(ms){
    return ms < 100? `${ms}`.padStart(3, "0") : ms;
    //padstart(3, "0") formata para o padrão de 3 numeros;
}

