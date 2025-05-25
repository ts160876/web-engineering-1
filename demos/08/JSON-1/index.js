"use strict";

let book = {
  book_id: 1,
  title: "Der verliebte Schwarzbrenner und wie er die Welt sah",
  author: "Jonas Jonasson",
  isbn: "9783570104859",
  published: { year: 2024, month: 11, date: 6 },
  pages: 432,
  formats: ["audio book", "hardcover", "kindle", "mp3"],
};

console.log(JSON.stringify(book));
