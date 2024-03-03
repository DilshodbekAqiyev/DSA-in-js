/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// Time O(n*logn), Space O(n)
var findMedianSortedArrays = function (nums1, nums2) {
  let nums = [...nums1, ...nums2].sort((a, b) => a - b);
  if (nums.length % 2 === 1) {
    return nums[Math.floor(nums.length / 2)];
  } else {
    let num = Math.floor(nums.length / 2);

    let middle = (nums[num - 1] + nums[num]) / 2;
    return middle;
  }
};

console.log(findMedianSortedArrays([1, 2], [3, 4]));
