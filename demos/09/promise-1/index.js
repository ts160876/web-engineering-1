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

function subtract(a, b) {
  return a - b;
}

function subtractAsync(a, b) {
  return new Promise((resolve) => {
    resolve(a - b);
  });
}

log(`Start of program`);
log(`The return type of add is: ${typeof add(2, 3)}`);
log(`It is an instance of: ${add(2, 3).constructor.name}`);
log(`The return type of add is: ${typeof addAsync(2, 3)}`);
log(`It is an instance of: ${addAsync(2, 3).constructor.name}`);
log(`The return type of subtract is: ${typeof add(2, 3)}`);
log(`It is an instance of: ${subtract(2, 3).constructor.name}`);
log(`The return type of subtractAsync is: ${typeof addAsync(2, 3)}`);
log(`It is an instance of: ${subtractAsync(2, 3).constructor.name}`);
log(`End of program`);
