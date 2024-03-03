/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// Time O(m * n), Space O(m * n)
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
