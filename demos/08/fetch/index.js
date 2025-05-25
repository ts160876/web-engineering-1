"use strict";

fetch("animals.json")
  .then((response) => {
    return response.text();
  })
  .then((text) => (document.getElementById("myBody").textContent = text));
