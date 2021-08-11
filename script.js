let stopwatch = document.getElementById('stopwatch');

let hr = 0;
let min = 0;
let sec = 0;
let stopTime = true;

function startTimer(){
    if(stopTime === true){
        stopTime = false;
        timeCycle();
    }
}

function stopTimer(){
    if(stopTime === false){
        stopTime = true;
    }
}

function resetTimer(){
    stopTime = true;
    stopwatch.innerHTML = "00:00:00";
    hr = 0;
    min = 0;
    sec = 0;
}

function timeCycle(){
    if(stopTime === false){
        hr = parseInt(hr);
        min = parseInt(min);
        sec = parseInt(sec);

        sec += 1

        if(sec == 60){
            min += 1;
            sec = 0;
        }

        if(min == 60){
            hr += 1;
            min = 0;
            sec = 0;
        }

        if(sec < 10 || sec == 0){
            sec = '0' + sec;
        }
        if(min < 10 || min == 0){
            min = '0' + min;
        }
        if(hr < 10 || hr == 0){
            hr = '0' + hr;
        }

        stopwatch.innerHTML = hr + ":" + min + ":" + sec;
        setTimeout("timeCycle()",1000)
    }
}

// theme
const check = document.getElementById('check');
check.addEventListener('change',function (){
    document.body.classList.toggle('bg-dark')
    stopwatch.classList.toggle('text-white')
});