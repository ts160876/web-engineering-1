<?php
$text = "You have not told me your name. You can do this via query parameters.";
$name = htmlspecialchars($_GET["name"]);
if ($name != "") {
  $text = "You have told me your name: " . $name;
}
?>
<!DOCTYPE html>
<html>

<head>
  <title>Demonstration of URLs</title>
  <meta charset="UTF-8" />
  <meta name="author" content="Thorsten Schneider" />
</head>

<body>
  <h1>Demonstration of URLs</h1>
  <p>Hello and Welcome!</p>
  <p><?php echo $text; ?></p>
  <h2 id="anchor1">Anchor 1 </h2>
  <p>This is some example text. It is solely used for the purpose to make this page larger and demonstrate the use of anchors / fragments.</p>
  <h2 id="anchor2">Anchor 2 </h2>
  <p>This is some example text. It is solely used for the purpose to make this page larger and demonstrate the use of anchors / fragments.</p>
  <h2 id="anchor3">Anchor 3 </h2>
  <p>This is some example text. It is solely used for the purpose to make this page larger and demonstrate the use of anchors / fragments.</p>
  <h2 id="anchor4">Anchor 4 </h2>
  <p>This is some example text. It is solely used for the purpose to make this page larger and demonstrate the use of anchors / fragments.</p>
  <h2 id="anchor5">Anchor 5 </h2>
  <p>This is some example text. It is solely used for the purpose to make this page larger and demonstrate the use of anchors / fragments.</p>
  <h2 id="anchor6">Anchor 6 </h2>
  <p>This is some example text. It is solely used for the purpose to make this page larger and demonstrate the use of anchors / fragments.</p>
  <h2 id="anchor7">Anchor 7 </h2>
  <p>This is some example text. It is solely used for the purpose to make this page larger and demonstrate the use of anchors / fragments.</p>
</body>

</html>