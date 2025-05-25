"use strict";
//Global variable for interval timer
let myInterval = null;

//Register the event handler
document.getElementById("myButton1").addEventListener("click", handleButton1);
document.getElementById("myButton2").addEventListener("click", handleButton2);

//Handle button1
function handleButton1() {
  //Message "Waiting for data to be received"
  document.getElementById("myMessage").textContent =
    "Waiting for data to be received";
  myInterval = window.setInterval(showProgress, 1000);

  //Create the HTTP request and send it
  let xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    receiveData(this.responseText, this.status);
  };
  xhttp.open("GET", "animals.php", true);
  xhttp.send();
}

//Handle button 2
function handleButton2() {
  alert("Send a Popup");
}

//Show a progress bar
function showProgress() {
  //Add a . to show a simple progress bar
  document.getElementById("myMessage").textContent =
    document.getElementById("myMessage").textContent + ".";
}

//Receive the data
function receiveData(responseText, status) {
  if (status == 200) {
    document.getElementById("myMessage").textContent = responseText;
  } else {
    document.getElementById("myMessage").textContent =
      "Data could not be received. An error happened.";
  }
  window.clearInterval(myInterval);
  myInterval = null;
}
