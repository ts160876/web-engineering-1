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

function addWithCallback(a, b, callback) {
  callback(a, b, a + b);
}

function receiveResult(a, b, c) {
  log(`${a}+${b}=${c}`);
}

log(`Start of program`);
log(`Everything happens synchronously here, but with a callback.`);
addWithCallback(2, 3, receiveResult);
addWithCallback(5, 5, receiveResult);
log(`End of program`);
