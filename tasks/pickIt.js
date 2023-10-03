function pickIt(arr){
    var odd=[],even=[];
    
    for (let x of arr) {
        ((x % 2) ? odd : even).push(x);
    }

    return [odd,even];
}

console.log(pickIt([1,2]));
console.log(pickIt([1,2,3]));
console.log(pickIt([3,2,1]));
console.log(pickIt([10,20,30]));
console.log(pickIt([11,21,31]));
console.log(pickIt([8,1,5,4,6,1,1]));

// Test.assertSimilar(pickIt([1,2]),[[1],[2]]);
// Test.assertSimilar(pickIt([1,2,3]),[[1,3],[2]]);
// Test.assertSimilar(pickIt([3,2,1]),[[3,1],[2]]);
// Test.assertSimilar(pickIt([10,20,30]),[[],[10,20,30]]);
// Test.assertSimilar(pickIt([11,21,31]),[[11,21,31],[]]);
// Test.assertSimilar(pickIt([8,1,5,4,6,1,1]),[[1,5,1,1],[8,4,6]]);
