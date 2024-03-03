// LINEAR SEARCH
// function linearSearch(nums, n) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === n) return i;
//   }
//   return -1;
// }

// const number = 2;
// const num = [1, 2, 3, 4, 5, 6];
// const res = linearSearch(num, number);
// console.log(res);

// BINARY SEARCH
// function binarySearch(nums, n) {
//   let left = 0;
//   let right = nums.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (nums[mid] === n) {
//       return nums[mid];
//     } else if (nums[mid] < n) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return -1;
// }

// const number = 6;
// const num = [1, 2, 3, 4, 5, 6];
// const res = binarySearch(num, number);
// console.log(res);

//NAIVE SEARCH
const naiveSearch = (str, compareStr) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < compareStr.length; j++) {
      if (compareStr[j] !== str[i + j]) break;
      if (j === compareStr.length - 1) {
        count++;
      }
    }
  }
  return count;
};
const str = "lorelod loled lol lole";
const result = naiveSearch(str, "lol");
console.log(result);
