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
        //throw new Error("Division by 0 is not possible.");
        reject(new Error("Division by 0 is not possible."));
      }
    }, 3000);
  });
}

log(`Start of program`);
divideAsync(4, 2)
  .then((result) => log(`4/2=${result};`))
  .catch((error) => log(error.message));
divideAsync(4, 0)
  .then((result) => log(`4/0=${result};`))
  .catch((error) => log(error.message));
log(`End of program`);
