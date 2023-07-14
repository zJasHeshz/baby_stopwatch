// Get timer-text and html button as a javascipt variable

const hundredthOfASecond = document.getElementById("hundredthOfASecond");
const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");
const btnStart = document.getElementById("btnStart");
const btnStop = document.getElementById("btnStop");
const btnReset = document.getElementById("btnReset");
const darkmode = document.getElementById("darkMode")

// make variable for store hundredth of a second, second and minutes 
let countHundredthOfASecond = 0;
let countASecond = 0;
let countAMinutes = 0;


// this variable for store the setInterval id
let intervalId;

// add event listener to start button
btnStart.addEventListener("click", function () {
    clearInterval(intervalId)               //before the start new timer clear pervious timer and fix not stoping bug
    intervalId = setInterval(display, 10)
}
);
// add event listener to stop button
btnStop.addEventListener("click", function () {
    clearInterval(intervalId)
}
);
// add event listener to reset button
btnReset.addEventListener("click", function () {
    clearInterval(intervalId);  //before reset timer it should stop this line for do that 
    // after stop the timer all counting variable back to zero
    countHundredthOfASecond = 0;
    countASecond = 0;
    countAMinutes = 0;
    // display back to zero like varibles 
    document.getElementById("hundredthOfASecond").innerHTML = '00';
    document.getElementById("seconds").innerHTML = '00';
    document.getElementById("minutes").innerHTML = '00';

})

// function for main calculation and display times
function display() {
    // after the click start button start counting 0.01s 
    countHundredthOfASecond++;
    hundredthOfASecond.textContent = countHundredthOfASecond; //display hundredth of a second 
    if (countHundredthOfASecond < 10) {
        document.getElementById("hundredthOfASecond").innerHTML = '0' + countHundredthOfASecond;
    }

    if (countHundredthOfASecond >= 99) {
        // every 100 of 0.01s display 1 second
        countHundredthOfASecond = 0
        countASecond++;
        seconds.textContent = countASecond;
        if (countASecond < 10) {
            document.getElementById("seconds").innerHTML = '0' + countASecond;
        }
    }

    if (countASecond >= 60) {
        // every 60 second display 1 minuets
        countASecond = 0
        countAMinutes++;
        minutes.textContent = countAMinutes;
        if (countAMinutes < 10) {
            document.getElementById("minutes").innerHTML = '0' + countAMinutes;

        }
    }
}


// dark mode toggle
let clickTime = 0;
darkmode.addEventListener("click", function () {
    clickTime++;
    document.getElementById("body").style.cssText = "background: #2b2b2b;"
    document.getElementById("darkmode-img").src = "/img/light.png"
    if (clickTime == 2) {
        document.getElementById("body").style.cssText = "background:var(--gradient)"
        document.getElementById("darkmode-img").src = "/img/dark.png"
        clickTime = 0;
    }
})

