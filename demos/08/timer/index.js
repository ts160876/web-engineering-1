"use strict";
let t;
let i;

//Run showCountdown once after 5 seconds
window.setTimeout(showCountdown, 5000);

function writeCountdown() {
  return "Countdown: " + i + " seconds";
}

function showCountdown() {
  let element = document.getElementById("myParagraph");
  i = prompt("How long do you like to wait (seconds)?");
  element.textContent = writeCountdown();
  //Run reduceCountdown every second
  t = window.setInterval(reduceCountdown, 1000);
}

function reduceCountdown() {
  let element = document.getElementById("myParagraph");
  i = i - 1;
  if (i == 0) {
    element.textContent = "Countdown is over.";
    //Stop the interval timer
    window.clearInterval(t);
  } else {
    element.textContent = writeCountdown();
  }
}
