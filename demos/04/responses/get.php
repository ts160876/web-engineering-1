<!DOCTYPE html>
<html lang="en-US">

<head>
    <title>Result of HTML Form</title>
    <meta charset="UTF-8" />
    <meta name="author" content="Thorsten Schneider" />
</head>

<body>
    <h1>Result of HTML Form (via GET)</h1>
    <p>You have submitted the following data: </p>
    <table border="1px solid">
        <tr>
            <th>Key</th>
            <th>Value</th>
        </tr>
        <?php
        foreach ($_GET as $key => $value) {
            echo "<tr>";
            echo "  <td>$key</td>";
            echo "  <td>$value</td>";
            echo "</tr>";
        }
        ?>
    </table>
</body>

</html>