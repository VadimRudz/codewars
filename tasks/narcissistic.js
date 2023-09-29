function narcissistic(value) {

    const sumOfDigits = value => [...""+value].reduce((acc, dig) => acc + +Math.pow(dig,(value.toString(). length)), 0);

    let returnValue = sumOfDigits(value) === value ? true: false; 

    return returnValue;
  
}

console.log(narcissistic(7));
