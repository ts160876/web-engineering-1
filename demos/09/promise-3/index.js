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

async function addAsync(a, b) {
  return a + b;
}

async function logAsync() {
  //await is not allowed outside async function and ES modules.
  log(`Result= ${await addAsync(await addAsync(await addAsync(2, 3), 5), 5)}`);
}

log(`Start of program`);
log(`We want the result of 2+3+5+5=15.`);
addAsync(2, 3)
  .then((sum1) => addAsync(sum1, 5))
  .then((sum2) => addAsync(sum2, 5))
  .then((total) => log(`Result=${total}`));
logAsync();
log(`End of program`);
