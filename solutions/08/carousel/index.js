"use strict";
//Array to store the given books
const books = [];
//Next book to be displayed
let nextBook = 0;
//Seconds to wait before the next book
let delayInSeconds = 3;
//Countdown till next book
let countdownTillNextBook = 3;

//Simple constructor function for a book
function Book(isbn, title) {
  this.isbn = isbn;
  this.file = `${isbn}.jpg`;
  this.title = title;
}

//Display the next book
function displayBook() {
  //Display the picture of the next book
  document
    .getElementById("pictureOfABook")
    .setAttribute("src", books[nextBook].file);
  //Display the title of the next book
  document.getElementById("titleOfABook").innerText = books[nextBook].title;
  //Increase the variable for the next book
  if (nextBook + 1 > books.length - 1) {
    //At the end of the array, the carousel goes back to the first book
    nextBook = 0;
  } else {
    nextBook++;
  }
  //Set the countdown to the seconds to wait before the next book
  countdownTillNextBook = delayInSeconds;
}

//Display the countdown
function displayCountdown() {
  //Display the countdown
  document.getElementById(
    "countdownTillNextBook"
  ).innerText = `${countdownTillNextBook} seconds till next book is displayed`;
  //Reduce the countdown by one second
  countdownTillNextBook--;
}

//Start the carousel
function startCarousel() {
  //Hide the parameter screen
  document.getElementById("parameterScreen").classList.add("hidden");
  //Display the carousel screen
  document.getElementById("carouselScreen").classList.remove("hidden");
  //Display the countdown screen
  document.getElementById("countdownScreen").classList.remove("hidden");
  //Get the seconds to wait
  countdownTillNextBook = delayInSeconds =
    document.getElementById("delayInSeconds").value;
  //Display the first book
  displayBook();
  //Display the (initial) countdown
  displayCountdown();
  //Set the interval timers
  window.setInterval(displayBook, delayInSeconds * 1000);
  window.setInterval(displayCountdown, 1000);
}

//Add the five books to the array
books.push(new Book("9783426281741", "Das Kalendermädchen"));
books.push(new Book("9783442317837", "Das Mädchen aus Yorkshire"));
books.push(new Book("9783423284233", "Umlaufbahnen"));
books.push(new Book("9783832182052", "Zwei Leben"));
books.push(
  new Book(
    "9783570104859",
    "Der verliebte Schwarzbrenner und wie er die Welt sah"
  )
);

//Register the event handler for the button
document
  .getElementById("startCarousel")
  .addEventListener("click", startCarousel);
