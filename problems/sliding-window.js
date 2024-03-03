// const repeatedValues = (arr, k) => {
//   const hash = {};
//   // let p1 = 0,
//   //   p2 = 1;

//   for (let i = 0; i < arr.length; i++) {
//     // if (arr[p1] && arr[p2]) {
//     //   hash[arr[p1] + arr[p2]]
//     //     ? (hash[arr[p1] + arr[p2]] += 1)
//     //     : (hash[arr[p1] + arr[p2]] = 1);
//     // }
//     // p1++;
//     // p2++;
//     if (arr[i] && arr[i + 1]) {
//       hash[arr[i] + arr[i + 1]]
//         ? (hash[arr[i] + arr[i + 1]] += 1)
//         : (hash[arr[i] + arr[i + 1]] = 1);
//     }
//   }
//   return hash;
// };

// console.log(
//   "repeated numbers: ",
//   repeatedValues(["A", "Z", "B", "F", "J", "K", "A", "Z", "L", "M"], 2)
// );

function findSubstring(str1, str2) {
  // let res = [];
  // for (let i = 0; i <= str1.length - str2.length; i++) {
  //   let window = str1.substring(i, i + str2.length);
  //   if (window === str2) {
  //     res.push(i);
  //   }
  // }
  // return res;

  let res = "";
  let idx1 = 0;
  let idx2 = 0;

  while (idx1 < str1.length && idx2 < str2.length) {
    if (str1[idx1] === str2[idx2]) {
      res += str1[idx1];
      idx2++;
    }
    if (str1[idx1] === str2[idx2] && str1[idx1 + 1] !== str2[idx2 + 1]) {
      res += str1[idx1 + 1];
    }
    idx1++;
  }
  return res;
}

let str1 = "ABCDEBDDE";
let str2 = "BDE";

let result = findSubstring(str1, str2);
console.log(result);

function minWindow(str1, str2) {
  let sizeStr1 = str1.length;
  let sizeStr2 = str2.length;
  let minSubLen = Infinity;
  let indexS1 = 0;
  let indexS2 = 0;
  let minSubsequence = "";
  while (indexS1 < sizeStr1) {
    if (str1[indexS1] === str2[indexS2]) {
      indexS2++;
      if (indexS2 === sizeStr2) {
        let start = indexS1;
        let end = indexS1;
        indexS2--;
        while (indexS2 >= 0) {
          if (str1[start] === str2[indexS2]) {
            indexS2--;
          }
          start--;
        }
        start++;
        if (end - start + 1 < minSubLen) {
          minSubLen = end - start + 1;
          minSubsequence = str1.slice(start, end + 1);
        }
        indexS1 = start;
        indexS2 = 0;
      }
    }
    indexS1++;
  }
  return minSubsequence;
}
