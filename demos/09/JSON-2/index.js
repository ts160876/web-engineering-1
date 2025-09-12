"use strict";
let xhttp = new XMLHttpRequest();
let fileContent;
let animals;

//We get to know XMLHttpRequest later
xhttp.open("GET", "animals.json", false);
xhttp.send();
fileContent = xhttp.responseText;

//Parse the JSON string
animals = JSON.parse(fileContent);
printAnimals(animals);

//The function can use "normal" JavaScript to work with the data.
//The data is an array of objects.
function printAnimals(animals) {
  let body = document.getElementById("myBody");
  //Process all animals
  for (const animal of animals) {
    let ul = document.createElement("ul");
    ul.textContent = animal["Name"];
    body.appendChild(ul);
    //Process all attributes of one animal
    for (const key in animal) {
      let li = document.createElement("li");
      li.textContent = key + ": " + animal[key];
      ul.appendChild(li);
    }
  }
}
