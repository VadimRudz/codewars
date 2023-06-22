var firstMissingPositive = function(nums) {

    let counterNumber = 1;

    const filteredArray = nums.sort((a, b) => a-b).filter(number => number > 0);

    let isExist = true;

    while(isExist){
        if(filteredArray.indexOf(counterNumber) < 0){
            isExist = false;
            break;
        }
        counterNumber++;
    }

    return counterNumber;
    
};

firstMissingPositive([7,8,9,11,12]);


// Example 1:

// Input: nums = [1,2,0]
// Output: 3
// Explanation: The numbers in the range [1,2] are all in the array.
// Example 2:

// Input: nums = [3,4,-1,1]
// Output: 2
// Explanation: 1 is in the array but 2 is missing.
// Example 3:

// Input: nums = [7,8,9,11,12]
// Output: 1
// Explanation: The smallest positive integer 1 is missing.