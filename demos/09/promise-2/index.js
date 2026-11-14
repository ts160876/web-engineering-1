"use strict";

function log(message) {
  const now = new Date();

  const jetzt = new Date();
  const h = String(jetzt.getHours()).padStart(2, "0");
  const m = String(jetzt.getMinutes()).padStart(2, "0");
  const s = String(jetzt.getSeconds()).padStart(2, "0");
  const ms = String(jetzt.getMilliseconds()).padStart(3, "0");

  console.log(`[${h}:${m}:${s}.${ms}] ${message}`);
}

function add(a, b) {
  return a + b;
}

async function addAsync(a, b) {
  return a + b;
}

log(`Start of program`);
log(`2+3=${add(2, 3)}`);
addAsync(2, 3).then((result) => {
  log(`Result=${result};`);
});
log(`End of program`);
