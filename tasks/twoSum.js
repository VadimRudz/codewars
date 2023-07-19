const twoSum = function(nums, target) {

    let resultArray=[];

    for(let i = 0; i< nums.length; i++){
        if(nums.includes(target-nums[i]) && i !== nums.lastIndexOf(target-nums[i])){
            resultArray.push(i);
            resultArray.push(nums.lastIndexOf(target-nums[i]));
            return resultArray
        }
    }
    
};
console.log(twoSum([3,3], 6));

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]