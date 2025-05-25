"use strict";

function clicked(event) {
  alert(event.currentTarget.id);
}

//Register the same event handler for multiple elements / events
document.getElementById("1").addEventListener("click", clicked);

document.getElementById("11").addEventListener("click", clicked);
document.getElementById("111").addEventListener("click", clicked);
document.getElementById("112").addEventListener("click", clicked);
document.getElementById("113").addEventListener("click", clicked);

document.getElementById("12").addEventListener("click", clicked);
document.getElementById("121").addEventListener("click", clicked);
document.getElementById("122").addEventListener("click", clicked);
document.getElementById("123").addEventListener("click", clicked);

document.getElementById("13").addEventListener("click", clicked);
document.getElementById("131").addEventListener("click", clicked);
document.getElementById("132").addEventListener("click", clicked);
document.getElementById("133").addEventListener("click", clicked);
