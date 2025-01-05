<?php
$cookie_name = "web-engineering-cookie";
if (!isset($_COOKIE[$cookie_name])) {
    $cookie_value = 1;
} else {
    $cookie_value = intval($_COOKIE[$cookie_name]) +1;
}
setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/");
?>

<!DOCTYPE html>
<html>

<head>
    <title>Demonstrating Cookies</title>
    <meta charset="UTF-8" />
    <meta name="author" content="Thorsten Schneider" />
</head>

<body>
    <h1>Demonstrating Cookies</h1>
    <p>This is the <?php echo strval($cookie_value); ?> time you have visited this page.</p>
    <p>Check out the cookies in the Developer Tools!</p>
</body>

</html>