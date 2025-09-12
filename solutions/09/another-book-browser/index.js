"use strict";

//Register in JavaScript
document.getElementById("startSearch").onclick = () => startSearch();

//Event handler for search button
function startSearch() {
  //Get the ISBN from the form
  let isbn = document.getElementById("isbn").value;
  let key = "ISBN:" + isbn;

  //Create a new request (this time we do it synchronously)
  let xhttp = new XMLHttpRequest();
  xhttp.open(
    "GET",
    `https://openlibrary.org/api/books?bibkeys=${key}&format=json&jscmd=data`,
    false
  );
  xhttp.send();
  //Get the data from openlibrary.org and parse it into a book object
  let book = JSON.parse(xhttp.responseText);

  //Adjust the HTML (no error handling implemented)
  console.log(book[key]["title"]);
  //...Get the result box and clear it
  let result = document.getElementById("result");
  result.innerHTML = "";
  //...Label of the result box
  let element = document.createElement("span");
  element.textContent = "Result";
  element.classList.add("label");
  result.appendChild(element);

  //...Title of the book
  element = document.createElement("p");
  element.textContent = "Title: " + book[key]["title"];
  result.appendChild(element);
  //...Number of pages
  element = document.createElement("p");
  element.textContent = "Number of Pages: " + book[key]["number_of_pages"];
  result.appendChild(element);
  //...Link to openlibrary.org
  element = document.createElement("a");
  element.textContent = "Link to openlibrary.org";
  element.href = book[key]["url"];
  element.target = "_blank";
  result.appendChild(element);
}
