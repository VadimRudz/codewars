var mergeTwoLists = function (list1, list2) {
    const resultArray = [];

    if (list1.length === 0) {
        return list2;
    } else if (list2.length === 0) {
        return list1;
    } else {
        for (let i = 0; i < list1.length; i++) {
            resultArray.push(list1[i]);
            resultArray.push(list2[i]);
        }
    }

    return resultArray;
};

console.log(mergeTwoLists([], [0]));

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]
