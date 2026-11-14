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

function addAsync(a, b, callback) {
  setTimeout(() => {
    callback(a, b, a + b);
  }, 3000);
}

function receiveResult(a, b, c) {
  log(`${a}+${b}=${c}`);
}

log(`Start of program`);
log(`Calculations happen asynchronously. They take 3 seconds each.`);
addAsync(2, 3, receiveResult);
addAsync(5, 5, (a, b, c) => {
  log(`${a}+${b}=${c}`);
});
log(`End of program`);
