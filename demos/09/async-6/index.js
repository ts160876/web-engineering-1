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

function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    throw new Error("Division by 0 is not possible.");
  }
}

log(`Start of program`);
log(`Everything happens synchronously here.`);
try {
  log(`4/2=${divide(4, 2)}`);
} catch (e) {
  log(e.message);
}
try {
  log(`4/0=${divide(4, 0)}`);
} catch (e) {
  log(e.message);
}
log(`End of program`);
