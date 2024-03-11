/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = (s, t) =>
  s.split("").sort().join("") === t.split("").sort().join("");

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const counter = new Map();

  for (let char of s) {
    counter.set(char, (counter.get(char) || 0) + 1);
  }

  for (let char of t) {
    if (!counter.has(char) || counter.get(char) === 0) {
      return false;
    }
    counter.set(char, counter.get(char) - 1);
  }

  return true;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) return true;
  }
  return false;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  return new Set(nums).size !== nums.length;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let hash = new Map();
  for (let i = 0; i < nums.length; i++) {
    let comp = target - nums[i];
    if (hash.has(comp)) {
      return [hash.get(comp), i];
    }
    hash.set(nums[i], i);
  }
  return [];

  // Time O(n^2), Space O(1)
  // for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //         if (nums[i] + nums[j] === target) {
  //             return [i, j];
  //         }
  //     }
  // }
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let count = new Map();

  for (let s of strs) {
    let freq = new Array(26).fill(0);
    for (let c of s) {
      freq[c.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    let k = freq.join(".");
    if (!count.has(k)) count.set(k, []);
    count.get(k).push(s);
  }
  return Array.from(count.values());

  //    const map = new Map();
  //     for (const str of strs) {
  //         const sortedStr = str.split('').sort().join('');
  //         if (map.has(sortedStr)) {
  //             map.get(sortedStr).push(str);
  //         } else {
  //             map.set(sortedStr, [str]);
  //         }
  //     }
  //     return Array.from(map.values());
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = new Map();
  let res = [];
  let freq = new Array(nums.length + 1).fill(null).map(() => []);
  // console.log(freq);
  for (let v of nums) {
    map.set(v, (map.get(v) || 0) + 1);
  }

  for (let [k, v] of map.entries()) {
    // console.log(typeof v, "a")
    // console.log(v);
    // console.log(k)
    freq[v].push(parseInt(k));
  }

  for (let i = freq.length - 1; i > 0; i--) {
    for (let j of freq[i]) {
      if (res.length !== k) res.push(j);
    }
  }
  return res;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function (nums) {
  let n = nums.length;
  let res = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    res[i] = res[i - 1] * nums[i - 1];
  }

  let post = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= post;
    post *= nums[i];
  }

  return res;
};

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let set = new Set();
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let current = board[r][c];
      if (current !== ".") {
        let rowk = `row-${r}-${current}`;
        let colk = `col-${c}-${current}`;
        let boxk = `box-${Math.floor(r / 3)}-${Math.floor(c / 3)}-${current}`;
        if (set.has(rowk) || set.has(colk) || set.has(boxk)) {
          return false;
        }
        set.add(rowk);
        set.add(colk);
        set.add(boxk);
      }
    }
  }
  return true;
};

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
