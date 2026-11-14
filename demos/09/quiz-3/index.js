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

async function divideAsync(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (b !== 0) {
        resolve(a / b);
      } else {
        reject(new Error("Division by 0 is not possible."));
      }
    }, 3000);
  });
}

log(`Start of program`);
log(`We want the result of 40/5/2/2=2.`);
divideAsync(40, 5)
  .then((r) => divideAsync(r, 2))
  .then((r) => divideAsync(r, 2))
  .then((r) => log(`Result=${r}`))
  .catch((e) => log(e.message))
  .finally(() => log("Calculation is finished."));
log(`End of program`);
