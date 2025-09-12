"use strict";
let t = window.setInterval(showInformation, 1000);

function showInformation() {
  let element = document.getElementById("browser");
  element.textContent = "Browser: " + window.navigator.userAgent;
  element = document.getElementById("time");
  element.textContent = "Time: " + new Date();
}
