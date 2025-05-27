"use strict";

document.getElementById("myButton1").addEventListener("click", handleButton1);
document.getElementById("myButton2").addEventListener("click", handleButton2);

//Function to "print" something on the screen
function print(textContent) {
  if (textContent != undefined && textContent != "") {
    let p = document.createElement("p");
    p.textContent = textContent;
    document.getElementById("myBody").appendChild(p);
  }
}

//Handle button 1 (start doing something)
function handleButton1() {}

//Handle button 2 (send a popup)
function handleButton2() {
  alert("You pressed the button");
}
