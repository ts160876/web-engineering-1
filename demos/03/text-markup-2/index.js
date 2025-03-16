const blockquote = "blockquote";
const q = "q";
const abbr = "abbr";
const sup = "sup";
const sub = "sub";

function encode(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function encodeBlockquote() {
  document.write(encode("<p>This example shows a blockquote:</p>"));
  document.write("<br>");
  document.write(encode("<blockquote cite='https://...'>"));
  document.write("<br>");
  document.write(
    encode(
      "  <p>This is a blockquote. Browsers by default will render it as an indented paragraph.</p>"
    )
  );
  document.write("<br>");
  document.write(encode("</blockquote>"));
}

function encodeQ() {
  document.write(
    encode(
      "<p>The quote element is <q cite='https://...'>intended for short quotations that don't require paragraph breaks.</q></p>"
    )
  );
}

function encodeAbbr() {
  document.write(
    encode(
      "<p>We use <abbr>HTML</abbr>, Hypertext Markup Language, to structure our web documents.</p>"
    )
  );
  document.write("<br>");
  document.write(
    encode(
      "<p>We use <abbr title='Hypertext Markup Language'>HTML</abbr> to structure our web documents.</p>"
    )
  );
}

function encodeSup() {
  document.write(
    encode("<p>My birthday is on the 25<sup>th</sup> of May 2001.</p>")
  );
}

function encodeSub() {
  document.write(
    encode(
      "<p>Caffeine's chemical formula is C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>.</p>"
    )
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

function changeToBlockquote(event) {
  change(blockquote);
}
function changeToQ(event) {
  change(q);
}

function changeToAbbr(event) {
  change(abbr);
}

function changeToSup(event) {
  change(sup);
}

function changeToSub(event) {
  change(sub);
}
