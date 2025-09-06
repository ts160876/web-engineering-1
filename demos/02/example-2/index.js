"use strict";

function handleSearchBooksButton() {
  document.getElementById("SearchScreen").classList.add("hidden");
  document.getElementById("ResultScreen").classList.remove("hidden");
  document.title = "Example 2 (Result Screen)";
  document.getElementById("ResultList").innerHTML = "";
  requestData(document.getElementById("ISBN").value);
}

function handleNewSearchButton() {
  document.getElementById("ResultScreen").classList.add("hidden");
  document.getElementById("SearchScreen").classList.remove("hidden");
  document.title = "Example 2 (Search Screen)";
  document.getElementById("ISBN").value = "";
}

function requestData(isbn) {
  let httpRequest = new XMLHttpRequest();
  httpRequest.onload = function () {
    receiveData(this.responseText, this.status);
  };

  let params = `isbn=${isbn}`;
  httpRequest.open("GET", "./api.php?" + params);
  httpRequest.send();
}

function receiveData(responseText, status) {
  /*
    <li>ISBN:</li>
    <li>Author:</li>
    <li>Title:</li>
    <li>Published:</li>
    <li>Pages:</li>
    <li>Audio Book:</li>
    <li>Hardcover:</li>
    <li>Kindle:</li>
    <li>MP3:</li>
  */

  if (status == "200") {
    const resultList = document.getElementById("ResultList");
    const book = JSON.parse(responseText);

    resultList.appendChild(
      document.createElement("li")
    ).innerText = `ISBN: ${book.isbn}`;

    resultList.appendChild(
      document.createElement("li")
    ).innerText = `Author: ${book.author}`;

    resultList.appendChild(
      document.createElement("li")
    ).innerText = `Title: ${book.title}`;

    resultList.appendChild(
      document.createElement("li")
    ).innerText = `Published: ${book.published}`;

    resultList.appendChild(
      document.createElement("li")
    ).innerText = `Pages: ${book.pages}`;

    resultList.appendChild(
      document.createElement("li")
    ).innerText = `Audio Book: ${book.audio_book}`;

    resultList.appendChild(
      document.createElement("li")
    ).innerText = `Hardcover: ${book.hardcover}`;

    resultList.appendChild(
      document.createElement("li")
    ).innerText = `Kindle: ${book.kindle}`;

    resultList.appendChild(
      document.createElement("li")
    ).innerText = `MP3: ${book.mp3}`;
  }

  //console.log(responseText);
}

document.getElementById("SearchBooks").addEventListener("click", function () {
  handleSearchBooksButton();
});

document.getElementById("NewSearch").addEventListener("click", function () {
  handleNewSearchButton();
});
