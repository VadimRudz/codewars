var search = function(nums, target) {

    return nums.includes(target) ? nums.indexOf(target) : -1

};

console.log(search([4,5,6,7,0,1,2], 0));

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:

// Input: nums = [1], target = 0
// Output: -1