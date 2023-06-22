var searchRange = function(nums, target) {

    let indexArray = [];

    if(nums.includes(target) === false || nums.length === 0) {
        return [-1, -1]
    } else {
        for(let i = 0; i < nums.length; i++){
            if(target === nums[i]){
                indexArray.push(i);
            }
        }
        return [indexArray[0], indexArray[indexArray.length-1]]
    }
 
};

console.log(searchRange([5,7,7,8,8,10], 6));

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]