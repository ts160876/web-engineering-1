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

function divideAsync(a, b, callback) {
  setTimeout(() => {
    if (b !== 0) {
      callback(a, b, a / b);
    } else {
      throw new Error("Division by 0 is not possible.");
    }
  }, 3000);
}

function receiveResult(a, b, c) {
  log(`${a}+${b}=${c}`);
}

log(`Start of program`);
log(`Calculations happen asynchronously. They take 3 seconds each.`);
try {
  divideAsync(4, 2, receiveResult);
} catch (e) {
  log(e.message);
}
try {
  divideAsync(4, 0, receiveResult);
} catch (e) {
  log(e.message);
}
log(`We are not able to properly catch the exception.`);
log(`End of program`);
