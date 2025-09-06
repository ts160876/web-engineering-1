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
  $showList = true;
  $author = $bookArray["author"];
  $title = $bookArray["title"];
  $published = $bookArray["published"];
  $pages = $bookArray["pages"];
  $audioBook = $bookArray["audio_book"];
  $hardCover = $bookArray["hardcover"];
  $kindle = $bookArray["kindle"];
  $mp3 = $bookArray["mp3"];
} else {
  $showList = false;
}
?>

<!DOCTYPE html>
<html lang="en-US">

<head>
  <title>Example 1 (Result Screen)</title>
  <meta charset="UTF-8" />
</head>

<body>
  <h1>Result Screen</h1>
  <ul>
    <?php if ($showList): ?>
      <li>ISBN: <?php echo $isbn ?></li>
      <li>Author: <?php echo $author ?></li>
      <li>Title: <?php echo $title ?> </li>
      <li>Published: <?php echo $published ?></li>
      <li>Pages: <?php echo $pages ?></li>
      <li>Audio Book: <?php echo $audioBook ?></li>
      <li>Hardcover: <?php echo $hardcover ?></li>
      <li>Kindle: <?php echo $kindle ?></li>
      <li>MP3: <?php echo $mp3 ?></li>
    <?php endif; ?>
  </ul>
  <form action="./index.html" action="get">
    <button type="submit">New Search</button>
  </form>
</body>

</html>