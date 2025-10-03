"use strict";

//Raw data records
const rawDataRecords = [
  "Das Kalendermädchen;Sebastian Fitzek;9783426281741;23.10.2024;400",
  "Das Mädchen aus Yorkshire;Lucinda Riley;9783442317837; 07.11.2024;620",
  "Umlaufbahnen;Samantha Harvey;9783423284233;14.11.2024;208",
  "Zwei Leben;Ewald Arenz;9783832182052;13.09.2024;362",
  "Der verliebte Schwarzbrenner und wie er die Welt sah;Jonas Jonasson;9783570104859;06.11.2024;432",
];

//Class for authors
class Author {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

//Class for books
class Book {
  constructor(author, title, isbn, published, pages) {
    this.author = author;
    this.title = title;
    this.isbn = isbn;
    this.published = published;
    this.pages = pages;
  }
  getFullInformation() {
    return `Author: ${this.author.getFullName()} Title: ${this.title} ISBN: ${
      this.isbn
    } Published: ${this.published} Pages: ${this.pages}`;
  }
}

//Convert the raw data records into objects. Store them in an array.
const books = [];
rawDataRecords.forEach((rawDataRecord) => {
  const rawDataFields = rawDataRecord.split(";");
  const title = rawDataFields[0];
  const fullName = rawDataFields[1];
  const [firstName, lastName] = fullName.split(" ");
  const isbn = rawDataFields[2];
  const publishedString = rawDataFields[3];
  const [day, month, year] = publishedString.split(".");
  const pages = Number(rawDataFields[4]);

  const author = new Author(firstName, lastName);
  const published = new Date(year, month - 1, day);
  const book = new Book(author, title, isbn, published, pages);
  books.push(book);
});

//Print the array
books.forEach((book) => {
  console.log(book.getFullInformation());
});
