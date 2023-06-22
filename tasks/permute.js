var permute = function(nums) {
    let result = [];
  
    function backtrack(current, remaining) {
      if (remaining.length === 0) {
        result.push(current);
        return;
      }
  
      for (let i = 0; i < remaining.length; i++) {
        let next = remaining.slice();
        next.splice(i, 1);
        backtrack(current.concat(remaining[i]), next);
      }
    }
  
    backtrack([], nums);
    return result;
  };

console.log(permute([1,2,3]));

// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:

// Input: nums = [1]
// Output: [[1]]