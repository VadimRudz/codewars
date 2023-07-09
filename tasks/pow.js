var myPow = function (x, n) {
  if (n === 0) {
    return 1;
  }

  const positivePow = n < 0 ? -n : n;

  let counter = 1;

  let accumulate = x;

 if (n === 1) {
    return x;
  } else {
    while (positivePow !== counter) {
      accumulate *= x;
      counter++;
    }
  }
  return n < 0 ? (1 / accumulate).toFixed(5) : accumulate.toFixed(5);
};

console.log(myPow(2.1, 3));

// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:

// Input: x = 2.10000, n = 3
// Output: 9.26100
// Example 3:

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25
