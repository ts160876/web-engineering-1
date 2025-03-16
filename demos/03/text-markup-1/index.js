const p = "p";
const em = "em";
const strong = "strong";
const mark = "mark";
const i = "i";
const b = "b";
const u = "u";

function encode(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function encodeP() {
  document.write(encode("<p>This is a paragraph without any markup.</p>"));
}

function encodeEm() {
  document.write(
    encode("<p>Get out of bed <em>now</em>!<br />Just <em>do</em> it!</p>")
  );
}

function encodeStrong() {
  document.write(
    encode("<p>This liquid is <strong>highly toxic</strong>.</p>")
  );
}

function encodeMark() {
  document.write(
    encode(
      "<p>During the battle, <mark>Rebel spies managed to steal the secret plans</mark> to the Empire's ultimate weapon...</p>"
    )
  );
}

function encodeI() {
  document.write(
    encode(
      "<p>The word <i>the</i> is an article.<br />The <i>Queen Mary</i> sailed last night.</p>"
    )
  );
}

function encodeB() {
  document.write(
    encode(
      "<p>This article describes several <b>text-level</b> elements. It explains their usage in an <b>HTML</b> document.</p>"
    )
  );
}

function encodeU() {
  document.write(
    encode("<p>This paragraph includes a <u>wrnogly</u> spelled word.</p>")
  );
}

function change(markup) {
  const classNames = ["markup", "code"];
  for (const className of classNames) {
    const paragraphs = document.getElementsByClassName(className);
    for (const paragraph of paragraphs) {
      if (paragraph.id.slice(0, markup.length) == markup) {
        paragraph.hidden = false;
      } else {
        paragraph.hidden = true;
      }
    }
  }
}

function changeToP(event) {
  change(p);
}

function changeToEm(event) {
  change(em);
}

function changeToStrong(event) {
  change(strong);
}

function changeToMark(event) {
  change(mark);
}

function changeToI(event) {
  change(i);
}

function changeToB(event) {
  change(b);
}

function changeToU(event) {
  change(u);
}
