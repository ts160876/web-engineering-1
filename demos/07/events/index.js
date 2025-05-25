"use strict";

function button1Clicked() {
  alert("Button 1 was clicked");
}

function button2Clicked() {
  alert("Button 2 was clicked");
}

function button3Clicked() {
  alert("Button 3 was clicked");
}

//Event handler implementation
function buttonClicked(event) {
  alert(`${event.target.innerText} was clicked`);
}

//Register in JavaScript
document.getElementById("button2").onclick = () => button2Clicked();
//Register in JavaScript (with addEventListener)
document.getElementById("button3").addEventListener("click", button3Clicked);

//Register the same event handler for multiple elements / events
document.getElementById("button4").addEventListener("click", buttonClicked);
document.getElementById("button5").addEventListener("click", buttonClicked);
document.getElementById("button6").addEventListener("click", buttonClicked);
