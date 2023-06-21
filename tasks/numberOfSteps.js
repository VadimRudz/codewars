const numberOfSteps = function(num) {

    let counter = 0;

    while (num > 0) {

        counter++

    if ( num % 2 === 0) {
        num = num / 2;
    } else {
        num--
    }

    }

    return counter;
    
};

console.log(numberOfSteps(123));


// Given an integer num, return the number of steps to reduce it to zero.

// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.