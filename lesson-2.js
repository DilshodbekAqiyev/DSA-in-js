// Array elementlari ketma ketlikda indeks siljib boradigan bolsa usha indexdan boshqa indexlar kopaytmasini array ko'rinishida

// const ArrayOfProducts = (array) => {
//   let mul = 1;
//   const res = [];

//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       if (array[i] !== array[j]) {
//         mul *= array[j];
//       }
//     }
//     res.push(mul);
//     mul = 1;
//   }
//   return res;
// };

// const arr = [1, 2, 3, 4];
// const res = ArrayOfProducts(arr);
// console.log(res);

// const ArrayMin = (array) => {
//   // const newArr = [...array].sort((a, b) => a - b);
//   // return newArr[0];

//   let min = array[array.length - 1];
//   for (const val of array) if (min > val) min = val;

//   return min;
// };

// const arr = [1, 2, 3, 4];
// const res = ArrayMin(arr);
// console.log(res);

/*
 * find first unique val in array
 * [hash table]
 */
// const UniqueArray = (array) => {
//   let hash = {};
//   let order = [];

//   for (const val of array) {
//     if (hash[val]) hash[val] += 1;
//     else {
//       hash[val] = 1;
//       order.push(val);
//     }
//   }

//   for (const val of order) {
//     if (hash[val] === 1) return val;
//   }
// };

// const arr = [1, 1, 3, 3, 2, 4];
// const res = UniqueArray(arr);
// console.log(res);

/*
 * arraydagi 2- eng katta qiymat
 */

// const findSecondMaxValue = (array) => {
//   let max = array[0];
//   let smax = 0;

//   for (const val of array) {
//     if(val> max) {
//       smax = max;
//       max = val;
//     } else if()
//   }

// for (let i = 0; i < array.length; i++) {
//   if (max < array[i]) max = arr[i];
// }

// for (let i = 0; i < array.legnth; i++) {
//   if (max > array[i] && smax < arr[i]) smax = array[i];
// }
// return smax;
// };

// const arr = [1, 1, 3, 3, 2, 4];
// const res = findSecondMaxValue(arr);
// console.log(res);

// ====================

// let n = 3;
// let res = [3, 4, 5, 1, 2];
// let n = 4;
// let res = [2,3,4,5,1]

// let array = [1, 2, 3, 4, 5];
// const rotateArray = (arr, n) => {
//   const rotatedArray = [...arr.slice(-n), ...arr.slice(0, arr.length - n)];
//   return rotatedArray;
// };

// const res = rotateArray(array, 3);
// console.log(res); // [ 3, 4, 5, 1, 2 ]

// ===================
// 2-m
// [1,2,3,-2,-3,0,5]

// const customSort = (arr) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// };
// let arr = [1, 2, 3, -2, -3, 0, 5];
// let res = customSort(arr);
// console.log(res);

// 3-m ------------------------------------
// [1,2,3,4,5] => [5,1,4,2,3]

// const twoPointersInPattern = (arr) => {
// 1-usul

// const newArr = [];
// const length = arr.length;

// for (let i = 0; i < length / 2; i++) {
//   newArr.push(arr[length - 1 - i]);
//   if (i !== length - 1 - i) {
//     newArr.push(arr[i]);
//   }
// }

// return newArr;

// 2-usul
//   let right = arr.length - 1;
//   let left = 0;
//   let midIdx = Math.floor(arr.length / 2);
//   let form = [];

//   for (let i = 0; i < mid; i++) {
//     form.push(arr[right]);
//     right--;
//     form.push(arr[left]);
//     left++;
//   }
//   if (arr.length % 2 !== 0) {
//     form.push(arr[midIdx]);
//   }

//   return form;
// };

// let arr = [1, 2, 3, 4, 5, 6];
// let res = twoPointersInPattern(arr);
// console.log(res);

//4-m
// [-2,10,7,-5,15,6]=>

// const findMaxSum = (arr) => {
// 1-usul
// let newArr = [];
// let sumNumbers = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i; j < arr.length; j++) {
//     sumNumbers += arr[j];
//     newArr.push(sumNumbers);
//   }
//   sumNumbers = 0;
// }
// return Math.max(...newArr);

// 2-usul
// let maxSum = arr[0];
// let currentSum = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   currentSum = Math.max(arr[i], currentSum + arr[i]);
//   maxSum = Math.max(maxSum, currentSum);
// }
// return maxSum;

// 3-usul
//   let local = Number.NEGATIVE_INFINITY;
//   let global = Number.NEGATIVE_INFINITY;

//   for (let i = 0; i < arr.length; i++) {
//     local = local + arr[i] > arr[i] ? local + arr[i] : arr[i];
//     global = global > local ? global : local;
//   }
//   return global;
// };

// const array = [-2, 10, 7, -5, 15, 6];
// const res = findMaxSum(array);
// console.log(res);
