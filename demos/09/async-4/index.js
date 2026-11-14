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

log(`Start of program`);
log(`Everything happens synchronously here.`);
log(`We want the result of 2+3+5+5=15.`);
log(`Result=${add(add(add(2, 3), 5), 5)}`);
log(`add(add(add(2, 3), 5), 5) is not a nice syntax, but it is working.`);
log(`End of program`);
