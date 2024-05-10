function findOutlier(integers){
    const resultOdd = integers.filter((number) => number % 2 === 0);
    if(resultOdd.length === 1) {
        return resultOdd[0];
    } else {
        const resultEven = integers.filter((number) => (number % 2) > 0 || (number % 2) < 0);
        return resultEven[0];
    }
}

console.log(findOutlier([0, 1, 2]));
console.log(findOutlier([1, 2, 3]));
console.log(findOutlier([2,6,8,10,3]));
console.log(findOutlier([0,0,3,0,0]));
console.log(findOutlier([1,1,0,1,1]));

// Test.assertEquals(findOutlier([0, 1, 2]), 1);
// Test.assertEquals(findOutlier([1, 2, 3]), 2);
// Test.assertEquals(findOutlier([2,6,8,10,3]), 3);
// Test.assertEquals(findOutlier([0,0,3,0,0]), 3);
// Test.assertEquals(findOutlier([1,1,0,1,1]), 0);
