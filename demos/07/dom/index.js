"use strict";

document.getElementById("findElements").addEventListener("click", findElements);
document
  .getElementById("findElementsBySelector")
  .addEventListener("click", findElementsBySelector);
document
  .getElementById("findByProperties")
  .addEventListener("click", findByProperties);
document
  .getElementById("changeTextContent")
  .addEventListener("click", changeTextContent);
document
  .getElementById("changeInnerHTML")
  .addEventListener("click", changeInnerHTML);
document
  .getElementById("changeAttributes")
  .addEventListener("click", changeAttributes);
document.getElementById("addElements").addEventListener("click", addElements);

//Find elements
function findElements() {
  //Get single element based on ID
  let cheetah = document.getElementById("cheetah");
  cheetah.style.color = "red";

  //Get elements based on tag
  let unorderedLists = document.getElementsByTagName("ul");
  for (const unorderedList of unorderedLists) {
    unorderedList.style.color = "blue";
  }

  //Get elements based on class
  let reptiles = document.getElementsByClassName("reptilia");
  for (const reptile of reptiles) {
    reptile.style.color = "green";
  }
}

//Find elements by selector
function findElementsBySelector() {
  //Get the first element matching a selector
  let firstListItem = document.querySelector("li");
  firstListItem.style.backgroundColor = "red";

  //Get all elements matching a selector
  let reptiles = document.querySelectorAll("li.reptilia:nth-child(odd)");
  for (const reptile of reptiles) {
    reptile.style.backgroundColor = "blue";
  }
}

//Find elements by properties
function findByProperties() {
  console.log(document.body);
  console.log(document.doctype);
  console.log(document.documentElement);
  console.log(document.embeds);
  console.log(document.forms);
  console.log(document.head);
  console.log(document.images);
  console.log(document.links);
  console.log(document.title);
  console.log(document.URL);
}

//Change text content of elements
function changeTextContent() {
  //Change the text content of a list
  let listElement = document.querySelector("ul#reptilia");
  listElement.textContent = "New text content of the list";
  listElement.style.backgroundColor = "yellow";

  //Change the text content of an anchor
  let linkElement = document.querySelector("a#link");
  linkElement.textContent = "New text content of the link";
  linkElement.style.backgroundColor = "yellow";
}

//Change inner HTML of elements
function changeInnerHTML() {
  //Change the inner HTML of a list
  let listElement = document.querySelector("ul#reptilia");
  listElement.innerHTML = "New inner HTML of the list";
  listElement.style.backgroundColor = "yellow";

  //Change the inner HTML of an anchor
  let linkElement = document.querySelector("a#link");
  linkElement.innerHTML = "New inner HTML of the link";
  linkElement.style.backgroundColor = "yellow";
}

//Change attributes of elements
function changeAttributes() {
  //Change a link
  let linkElement = document.querySelector("a#link");
  //...text content
  linkElement.textContent = "Link to Yahoo";
  //...atributes
  linkElement.setAttribute("href", "http://www.yahoo.com");
  linkElement.target = "_blank";
  //...style
  linkElement.style.backgroundColor = "yellow";
}

//Add elements
function addElements() {
  let reptiliaList = document.querySelector("ul#aves");
  let penguinItem = document.createElement("li");
  penguinItem.textContent = "Penguin";
  reptiliaList.appendChild(penguinItem);
}
