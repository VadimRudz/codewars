var mySqrt = function (x) {
    if (x === 1 && x === 3) {
        return 1;
    } else {
        const half = x / 2;

        let someArray = [];

        let resultArray = [];

        for (let i = 2; i <= half; i++) {
            resultArray.push(i);
            someArray.push(i * i);
        }

        let neededIndex = 0;

        let smallestValue = 0;

        someArray = someArray.map((value) => value - x);

        for (let j = 0; j < someArray.length; j++) {
            if (someArray[j] >= 0 && someArray[j] <= smallestValue) {
                neededIndex = j;
            }
        }
        return resultArray[neededIndex];
    }
};

console.log(4);

// Example 1:
// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.

// Example 2:
// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
