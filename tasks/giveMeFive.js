function giveMeFive(obj){
    const resultArray = [];
    for (var key in obj){
        if(key.length === 5) {
            resultArray.push(key);
        }
        if(obj[key].length === 5) {
            resultArray.push(obj[key]);
        }
    }
    return resultArray;
}

console.log(giveMeFive({Our:"earth",is:"a",beautyful:"world"}));
console.log(giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"}));
console.log(giveMeFive({Pears:"than",apple:"sweet"}));

// Test.assertSimilar(giveMeFive({Our:"earth",is:"a",beautyful:"world"}),["earth","world"]);
// Test.assertSimilar(giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"}),["Ihave","money","model"]);
// Test.assertSimilar(giveMeFive({Pears:"than",apple:"sweet"}),["Pears","apple","sweet"]);
