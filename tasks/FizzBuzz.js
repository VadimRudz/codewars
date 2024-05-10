const fizzBuzz = function(n) {

    let stringArray = [];

    for (let i = 1; i <= n; i++){

        if( i % 3 === 0 && i%5 === 0 ){
            stringArray.push('FizzBuzz');
        }else if(i % 3 === 0){
            stringArray.push('Fizz');
        } else if(i % 5 === 0) {
            stringArray.push('Buzz');
        } else {
            stringArray.push(i + '');
        }

    }
    return stringArray;
};

fizzBuzz(15);

// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
