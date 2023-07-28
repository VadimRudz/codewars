var maxProfit = function(prices) {

    const cloneArray = JSON.parse(JSON.stringify(prices));

    const secondClone = JSON.parse(JSON.stringify(prices));

    if(prices.toString() === cloneArray.sort((a, b) => b - a).toString()){
        return 0;
    }

    const map1 = new Map();

    for (let i = 0; i < secondClone.length - 1; i++){
        for(let j = i + 1; j < secondClone.length; j++){
            if(secondClone[j] - secondClone[i] >= 0){
                map1.set(secondClone[j] - secondClone[i], j);
            }
        }
    }

    let dif = 0;

    for (let difference of map1.keys()) {
        dif = dif < difference ? difference : dif;
    }

    return map1.get(dif) + 1;
};

console.log(maxProfit([7,1,5,3,6,4]));


// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.