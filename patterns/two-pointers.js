/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let left = 0,
    right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
};

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (numbers[left] + numbers[right] !== target) {
    if (numbers[left] + numbers[right] > target) {
      right--;
    } else {
      left++;
    }
  }

  return [left + 1, right + 1];
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let output = [],
    i = 0;

  while (i < nums.length - 2) {
    let l = i + 1,
      r = nums.length - 1;
    while (l < r) {
      if (nums[l] + nums[r] + nums[i] == 0) {
        output.push([nums[i], nums[l], nums[r]]);

        while (nums[l] == nums[l + 1]) {
          l++;
        }
        l++;
      } else if (nums[l] + nums[r] + nums[i] > 0) {
        r--;
      } else {
        l++;
      }
    }

    while (nums[i] === nums[i + 1]) {
      i++;
    }
    i++;
  }
  return output;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let l = 0,
    r = height.length - 1,
    result = 0;

  while (l < r) {
    let h = Math.min(height[l], height[r]);
    let area = h * (r - l);
    result = Math.max(area, result);
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return result;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // let n = height.length;
  // let water = 0, l = 0, r = n - 1
  // let leftMax = 0, rightMax = 0;
  // while (l < r) {
  //     if (height[l] <= height[r]) {
  //         if (height[l] > leftMax) {
  //             leftMax = height[l]
  //         } else {
  //             water += leftMax - height[l]
  //         }
  //         l++;
  //     } else {
  //         if (height[r] > rightMax) {
  //             rightMax = height[r]
  //         } else {
  //             water += rightMax - height[r]
  //         }
  //         r--;
  //     }
  // }
  // return water
  let left = 0;
  let right = height.length - 1;
  let res = 0;
  let leftMax = height[left];
  let rightMax = height[right];

  if (height.length === 0) {
    return 0;
  }

  while (left < right) {
    if (leftMax < rightMax) {
      left++;
      leftMax = Math.max(leftMax, height[left]);
      res += leftMax - height[left];
    } else {
      right--;
      rightMax = Math.max(rightMax, height[right]);
      res += rightMax - height[right];
    }
  }

  return res;
};
