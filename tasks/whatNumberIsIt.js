function whatNumberIsIt(n){
    if(isNaN(n)) {
        return `Input number is Number.NaN`;
    } else if (n === 1.7976931348623157e+308){
        return `Input number is Number.MAX_VALUE`;
    } else if (n === 5e-324) {
        return `Input number is Number.MIN_VALUE`;
    } else if (n > 1.7976931348623157e+308) {
        return `Input number is Number.POSITIVE_INFINITY`;
    } else if (n < 5e-324) {
        return `Input number is Number.NEGATIVE_INFINITY`;
    } else {
        return `Input number is ${n}`;
    }  
}

console.log(whatNumberIsIt(1/0));
console.log(whatNumberIsIt(100));
console.log(whatNumberIsIt(1.7976931348623157e+308));
console.log(whatNumberIsIt(5e-324));
console.log(whatNumberIsIt(-Number.MAX_VALUE*2));
console.log(whatNumberIsIt(NaN));
console.log(whatNumberIsIt(Infinity+1));

// Test.assertSimilar(whatNumberIsIt(1/0),"Input number is Number.POSITIVE_INFINITY");
// Test.assertSimilar(whatNumberIsIt(100),"Input number is 100");
// Test.assertSimilar(whatNumberIsIt(1.7976931348623157e+308),"Input number is Number.MAX_VALUE");
// Test.assertSimilar(whatNumberIsIt(5e-324),"Input number is Number.MIN_VALUE");
// Test.assertSimilar(whatNumberIsIt(-Number.MAX_VALUE*2),"Input number is Number.NEGATIVE_INFINITY");
// Test.assertSimilar(whatNumberIsIt(NaN),"Input number is Number.NaN");
// Test.assertSimilar(whatNumberIsIt(Infinity+1),"Input number is Number.POSITIVE_INFINITY");
