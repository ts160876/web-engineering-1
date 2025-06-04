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

function doSomethingQuickly() {
  return "I have done something quickly.";
}

function doSomethingSlowly() {
  let end = Date.now() + 7000;
  while (Date.now() < end) {}
  return "I have done it slowly";
}

function doSomethingAsynchronously(tellMe) {
  setTimeout(() => {
    tellMe("I have done it async.");
  }, 7000);
}

//Handle button 1 (start doing something)
function handleButton1() {
  //alert("You pressed the button 1");
  print(doSomethingQuickly());
  print(doSomethingQuickly());
  print(doSomethingQuickly());
  print(doSomethingQuickly());
  print(doSomethingQuickly());
  //print(doSomethingSlowly());
  doSomethingAsynchronously(print);
}

//Handle button 2 (send a popup)
function handleButton2() {
  alert("You pressed the button 2");
}
