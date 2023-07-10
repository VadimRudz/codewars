var maxSubArray = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  let numCopy = JSON.parse(JSON.stringify(nums));

  let sumArray = [];

  while (numCopy.length > 0) {
    let currentValue = numCopy[0];
    sumArray.push(currentValue);
    let innerNumCopy = JSON.parse(JSON.stringify(numCopy));
    innerNumCopy.shift();
    for (let i = 0; i < innerNumCopy.length; i++) {
      currentValue = currentValue + innerNumCopy[i];
      sumArray.push(currentValue);
    }
    numCopy.shift();
  }

  return sumArray.sort((a, b) => a - b).reverse()[0];
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.

// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
