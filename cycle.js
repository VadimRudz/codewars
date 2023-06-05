function cycle(n) {
    if (n % 2 === 0 || n % 5 === 0) {
      return -1;
    }
  
    let remainder = 1;
    let cycleLength = 0;
    let remainders = new Array(n).fill(0);
  
    while (remainders[remainder] === 0 && remainder !== 0) {
      remainders[remainder] = cycleLength;
      remainder = (remainder * 10) % n;
      cycleLength++;
    }

    if (remainder === 0) {
      return -1;
    }

    return cycleLength - remainders[remainder];
  }

  console.log(cycle(13));