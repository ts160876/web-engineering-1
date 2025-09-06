<?php
$isbn = htmlspecialchars($_GET["isbn"]);
$booksString = file_get_contents("./../masterdata/books.json");
$booksArray = json_decode($booksString, true);
$bookArray = null;

foreach ($booksArray as $book) {
  if ($book["isbn"] === $isbn) {
    $bookArray = $book;
    break;
  }
}

if ($bookArray != null) {
  http_response_code(200);
  header('Content-Type: application/json');
  echo json_encode($bookArray);
} else {
  http_response_code(404);
}
