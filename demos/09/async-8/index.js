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

function divideAsync(a, b, callback, error) {
  setTimeout(() => {
    if (b !== 0) {
      callback(a, b, a / b);
    } else {
      error(new Error("Division by 0 is not possible."));
    }
  }, 3000);
}

function receiveResult(a, b, c) {
  log(`${a}+${b}=${c}`);
}
function handleError(e) {
  log(e.message);
}

log(`Start of program`);
log(`Calculations happen asynchronously. They take 3 seconds each.`);
divideAsync(4, 2, receiveResult, handleError);
divideAsync(4, 0, receiveResult, handleError);
log(`End of program`);
