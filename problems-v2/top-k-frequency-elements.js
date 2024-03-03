/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

//Time O(n), Space O(n + k)

var topKFrequent = function (nums, k) {
  let map = new Map();
  let res = [];
  let freq = new Array(nums.length + 1).fill(null).map(() => []);
  console.log(freq);
  for (let v of nums) {
    map.set(v, (map.get(v) || 0) + 1);
  }

  for (let [k, v] of map.entries()) {
    freq[v].push(parseInt(k));
  }

  for (let i = freq.length - 1; i > 0; i--) {
    for (let j of freq[i]) {
      if (res.length !== k) res.push(j);
    }
  }
  return res;
};
