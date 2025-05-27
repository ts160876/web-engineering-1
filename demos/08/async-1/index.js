"use strict";

//Function to "print" something on the screen
function print(textContent) {
  if (textContent != undefined && textContent != "") {
    let p = document.createElement("p");
    p.textContent = textContent;
    document.getElementById("myBody").appendChild(p);
  }
}

//Function does something quickly
function doSomethingQuickly() {
  return "We did something quickly.";
}

//Function does something slowly
function doSomethingSlowly() {
  const end = Date.now() + 10000;
  while (Date.now() < end) {}
  return "We did something slowly.";
}

//Function does something slowly (with callback)
function doSomethingSlowlyWithCallback() {
  setTimeout(() => {
    print("We did something slowly (with callback).");
  }, 10000);
}

//Function does something with a promise
async function doSomethingAsync() {
  return "We did something (with a promise).";
}

function promiseSomething() {
  let myPromise = new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 10);
    setTimeout(() => {
      if (random < 8) {
        resolve("We promised something and delivered.");
      } else {
        reject("We promised something and unfortunately failed.");
      }
    }, 10000);
  });
  return myPromise;
}

//Handle button 1 (start doing something)
function handleButton1() {
  print(doSomethingQuickly());
  print(doSomethingQuickly());
  print(doSomethingQuickly());
  //print(doSomethingSlowly());
  //print(doSomethingSlowlyWithCallback());
  //doSomethingAsync().then((result) => print(result));
  promiseSomething()
    .then((result) => print(result))
    .catch((result) => print(result));
}

//Handle button 2 (send a popup)
function handleButton2() {
  alert("You pressed the button");
}

document.getElementById("myButton1").addEventListener("click", handleButton1);
document.getElementById("myButton2").addEventListener("click", handleButton2);
