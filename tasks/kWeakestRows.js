var kWeakestRows = function (mat, k) {

    let soldiersNumberArray = [];

    mat.forEach((value) => {
        let filteredArray = value.filter((innerValue => innerValue > 0));
        soldiersNumberArray.push(filteredArray.length);
    });

    const soldiersObject = new Object();

    for (let i = 0; i < soldiersNumberArray.length; i++) {
        soldiersObject[i] = soldiersNumberArray[i];
    }

    const sortedArr = Object.entries(soldiersObject).sort((a, b) => a[1] - b[1]);
    
    const resultArray = [];

    sortedArr.forEach(value => {
        resultArray.push(value[0]);
    });

    resultArray.length = k;

    return resultArray;

};

kWeakestRows([[1,0,0,0],
    [1,1,1,1],
    [1,0,0,0],
    [1,0,0,0]], 2);

// Input: mat =
// [[1,1,0,0,0],
//  [1,1,1,1,0],
//  [1,0,0,0,0],
//  [1,1,0,0,0],
//  [1,1,1,1,1]],
// k = 3
// Output: [2,0,3]
// Explanation:
// The number of soldiers in each row is:
// - Row 0: 2
// - Row 1: 4
// - Row 2: 1
// - Row 3: 2
// - Row 4: 5
// The rows ordered from weakest to strongest are [2,0,3,1,4].
