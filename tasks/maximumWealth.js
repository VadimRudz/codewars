const maximumWealth = function(accounts) {

    let accArray = [];

    accounts.forEach(account => {
        let accountMoney = account.reduce((acc, value) => acc + value, 0);
        accArray.push(accountMoney);
    });

    accArray.sort((a, b) => a - b);

    return accArray[accArray.length -1];
    
};

console.log(maximumWealth([[1,5],[7,3],[3,5]]));


// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6
