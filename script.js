// variables
let time = document.querySelector("h3");
let startStopBtn = document.querySelector(".startStop-btn");
let body = document.querySelector("body");
let resetBtn = document.querySelector(".reset-btn");
let start = false;
let counter = 0;
let timerID;
let colors = ["violet","indigo","skyblue","greenyellow","yellow","orange","red"];
// methods

startStopBtn.addEventListener("click", () => {
    start = !start;
    if(start){
        startStopBtn.innerText = "Stop";
        startStopBtn.style.backgroundColor = "red";
        // body.style.backgroundColor = "#";
        startTimer();
    }else{
        startStopBtn.innerText = "Start";
        startStopBtn.style.backgroundColor = "green";
        stopTimer();
    }
});


resetBtn.addEventListener("click", reset);

function displayTime(){
    let totalSeconds = counter;
    let colorIndex = totalSeconds % 7;
    let days = Number.parseInt(totalSeconds / 86400);
    totalSeconds = (totalSeconds % 86400);

    let hours = Number.parseInt(totalSeconds / 3600);
    totalSeconds = totalSeconds % 3600;

    let mins = Number.parseInt(totalSeconds / 60);
    totalSeconds = totalSeconds % 60;

    days = days < 10 ? `0${days}` : days;
    hours = hours < 10 ? `0${hours}` : hours;
    mins = mins < 10 ? `0${mins}` : mins;
    let sec = totalSeconds < 10 ? `0${totalSeconds}` : totalSeconds;
    body.style.backgroundColor = colors[colorIndex];
    time.innerText = `${days}:${hours}:${mins}:${sec}`;
    counter++;
}

function startTimer(){
    timerID = setInterval(displayTime, 1000);
}

function stopTimer(){
    clearInterval(timerID);
}

function reset(){
    time.innerText = "00:00:00:00";
    counter = 0;
    start = false;
    startStopBtn.innerHTML = "Start";
    startStopBtn.style.backgroundColor = "green";
    if(timerID){
        clearInterval(timerID);
    }
}