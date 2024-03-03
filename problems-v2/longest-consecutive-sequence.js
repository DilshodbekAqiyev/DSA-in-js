/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  let set = new Set(nums),
    max = 1;
  for (let val of [...set]) {
    let streak = 1;
    if (!set.has(val - 1) && set.has(val + 1)) {
      while (set.has(val + streak)) {
        streak++;
      }
      max = Math.max(max, streak);
    }
  }
  return max;
};
