<?php
$first_name = htmlspecialchars($_GET["first_name"]);
$last_name = htmlspecialchars($_GET["last_name"]);
?>

<!DOCTYPE html>
<html>

<head>
    <title>Result of GET request</title>
    <meta charset="UTF-8" />
    <meta name="author" content="Thorsten Schneider" />
</head>

<body>
    <h1>Result of GET requests</h1>
    <p>You have submitted the following data: </p>
    <ul>
        <li>First Name: <?php echo $first_name; ?></li>
        <li>Last Name: <?php echo $last_name; ?></li>
    </ul>
</body>

</html>