<?php
$first_name = htmlspecialchars($_GET["first_name"]);
$last_name = htmlspecialchars($_GET["last_name"]);
?>

<!DOCTYPE html>
<html lang="en-US">

<head>
  <title>Web Page demonstrating GET and POST requests</title>
  <meta charset="UTF-8" />
  <meta name="author" content="Thorsten Schneider" />
</head>

<body>
  <h1>Web Page demonstrating GET and POST requests</h1>
  <p>
    This web page demonstrates how data is passed from the client to the
    server:
  </p>
  <ul>
    <li>Via the GET method (data is passed in the query string)</li>
    <li>Via the POST method (data is panned in the message body)</li>
  </ul>
  <h2>Formular using the GET method</h2>
  <form action="./get.php" method="get">
    <label for="first_name_get">First Name:</label><br />
    <input type="text" id="first_name_get" name="first_name" required /><br />
    <label for="last_name_get">Last Name:</label><br />
    <input type="text" id="last_name_get" name="last_name" required /><br />
    <input type="submit" value="Submit Data via GET" />
  </form>
  <h2>Formular using the POST method</h2>
  <form action="./post.php" method="post">
    <label for="first_name_post">First Name:</label><br />
    <input type="text" id="first_name_post" name="first_name" required /><br />
    <label for="last_name_post">Last Name:</label><br />
    <input type="text" id="last_name_post" name="last_name" required /><br />
    <input type="submit" value="Submit Data via POST" />
  </form>
</body>

</html>