<!DOCTYPE html>
<html lang="en-US">

<head>
  <title>Result of HTML Form</title>
  <meta charset="UTF-8" />
  <meta name="author" content="Thorsten Schneider" />
</head>

<body>
  <h1>Result of HTML Form (via POST)</h1>
  <p>You have submitted the following data: </p>
  <table border="1px solid">
    <tr>
      <th>Key</th>
      <th>Value</th>
    </tr>
    <?php
    foreach ($_POST as $key => $value) {
      echo "<tr>";
      echo "  <td>$key</td>";
      if (!is_array($value)) {
        echo "  <td>$value</td>";
      } else {
        echo "<td>";
        foreach ($value as $akey => $avalue) {
          echo "$avalue<br>";
        }
        echo "</td>";
      }
      echo "</tr>";
    }
    ?>
  </table>
</body>

</html>