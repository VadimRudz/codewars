// Change this to the divisor from your task (e.g. 7, 10, 13)
const DIVISOR = 125;

const MIN = 25000;
const MAX = 30000;

let count = 0;
for (let n = MIN; n <= MAX; n++) {
  if (n % DIVISOR === 0) {
    count++;
  }
}

console.log(
  `Numbers between ${MIN} and ${MAX} divisible by ${DIVISOR} (remainder 0): ${count}`
);
