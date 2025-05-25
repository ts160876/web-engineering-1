"use strict";
//New XMLHttpRequest object
let xhttp = new XMLHttpRequest();
// register function which is called asynchronously
xhttp.onload = function () {
  document.getElementById("myBody").textContent = this.responseText;
};
//Specify the request, in this case
//GET
//endpoint is animals.json (in same directory)
//true makes the call asynchronous
xhttp.open("GET", "animals.json", true);
//Send the request
xhttp.send();
