"use strict";

//Handler for radio buttons
function radioButtonClicked(event) {
  if (event.target.id === "addAnimal") {
    //Class must be visible when adding animals
    document.getElementById("class").style.display = "inline";
    document.getElementById("class-label").style.display = "inline";
  } else {
    //Class must not be visible when removing animals
    document.getElementById("class").style.display = "none";
    document.getElementById("class-label").style.display = "none";
  }
}

//Handler for form (button)
function processForm() {
  let nameValue = document.getElementById("name").value;
  let classValue = document.getElementById("class").value;
  let addAnimal = document.getElementById("addAnimal").checked;

  if (nameValue === "") {
    //The name is mandatory. Only continue, if the user has entered a name.
    alert("You need to enter a name.");
  } else {
    if (addAnimal) {
      //Add an animal
      if (document.getElementById(nameValue) != null) {
        alert("The animal is already in the zoo.");
      } else {
        let newItem = document.createElement("li");
        newItem.innerText = nameValue;
        newItem.id = nameValue;
        document.getElementById(classValue).appendChild(newItem);
      }
    } else {
      //Remove an animal
      if (document.getElementById(nameValue) != null) {
        let itemToRemove = document.getElementById(nameValue);
        itemToRemove.parentElement.removeChild(itemToRemove);
      } else {
        alert("The animal is not in the zoo.");
      }
    }
  }
}

//Register handler for radio button clicks
document
  .getElementById("addAnimal")
  .addEventListener("click", radioButtonClicked);
document
  .getElementById("removeAnimal")
  .addEventListener("click", radioButtonClicked);

//Register handler for the form (button)
document.getElementById("processForm").addEventListener("click", processForm);
