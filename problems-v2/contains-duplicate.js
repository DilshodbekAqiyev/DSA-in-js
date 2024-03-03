/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Time O(n), space O(n)
var containsDuplicate = function (nums) {
  let s = new Set(nums);
  return s.size !== nums.length;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Time O(nlogn), Space O(1)
var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) return true;
  }
  return false;
};
