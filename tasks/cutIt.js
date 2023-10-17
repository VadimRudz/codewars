function cutIt(arr){
    const arrCopy = [...arr];
    arr.sort((a, b) => a.length - b.length);
    for(let i = 0; i < arrCopy.length; i++){
        arrCopy[i] = arrCopy[i].slice(0, arr[0].length);
    }
    return arrCopy;
}

// console.log(cutIt(["ab","cde","fgh"]));
// console.log(cutIt(["abc","defgh","ijklmn"]));
console.log(cutIt(["codewars","javascript","java"]));
// Test.assertSimilar(cutIt(["ab","cde","fgh"]) , ["ab","cd","fg"]);
// Test.assertSimilar(cutIt(["abc","defgh","ijklmn"]) , ["abc","def","ijk"]);
// Test.assertSimilar(cutIt(["codewars","javascript","java"]) , ["code","java","java"]);
