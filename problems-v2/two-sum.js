/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Time O(n^2), Space O(1)
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  const newNums = [...nums].sort((a, b) => a - b);
  while (l < nums.length) {
    if (newNums[l] + newNums[r] === target)
      return [nums.indexOf(newNums[l]), nums.lastIndexOf(newNums[r])];
    if (newNums[l] + newNums[r] > target) {
      r--;
    } else if (newNums[l] + newNums[r] < target) {
      l++;
    }
  }
};
