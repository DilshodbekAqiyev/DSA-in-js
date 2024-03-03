/**
 * sort types
 * 1.bubble sort
 * 2.selection sort
 * 3.insertion sort
 * 4.merge sort
 * 5.quick sort
 * 6.radix sort
 *          4 - 5 - 6 complex sorts
 *          1 - 2 - 3 easy sorts
 */

// const bubbleSort = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     let swapped = true;

//     for (let j = 0; j < array.length; j++) {
//       if (array[j] > array[j + 1]) {
//         [array[j], array[j + 1]] = [array[j + 1], array[j]];
//         swapped = false;
//       }
//     }
//     if (swapped) break;
//   }
//   return array;
// };

// // const arr = [2, 3, 5, 1, 4];
// const arr = [4, 1, 2, 3];
// const res = bubbleSort(arr);
// console.log(res);

// const selectionSort = (array) => {
//   for (let    i = 0; i < array.length; i++) {
//     let min = i;

//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] > array[j]) {
//         min = j;
//       }
//     }
//     if (array[i] !== array[min]) {
//       [array[i], array[min]] = [array[min], array[i]];
//     }
//   }
//   return array;
// };

// // const arr = [2, 3, 5, 1, 4];
// const arr = [4, 3, 2, 1];
// // const arr = [2, 1, 5];
// const res = selectionSort(arr);
// console.log(res);

// -----------------------------------------------

// const insertionSort = (array) => {
//   for (let i = 1; i < array.length; i++) {
//     let currentElement = array[i];
//     let j = i - 1;

//     while (j >= 0 && array[j] > currentElement) {
//       array[j + 1] = array[j];
//       j--;
//     }

//     array[j + 1] = currentElement;
//   }

//   return array;
// };

// const arr = [5, 1, 2, 3, 4];
// const res = insertionSort(arr);
// console.log(res);

// -----------------------------------------------

// const mergeSort = (array) => {
//   if (arr.length <= 1) return arr;

//   let mid = Math.floor(arr.length / 2);
//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid));
//   // return;
// };

// const arr = [5, 3, 4, 1, 2];
// const res = mergeSort(arr);
// console.log(res);

// -----------------------------------------------

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(arrOfNums) {
  let maxDigitCount = mostDigits(arrOfNums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []); // [[], [], [],...]
    for (let i = 0; i < arrOfNums.length; i++) {
      let digit = getDigit(arrOfNums[i], k);
      digitBuckets[digit].push(arrOfNums[i]);
    }

    arrOfNums = [].concat(...digitBuckets);
  }
  return arrOfNums;
}

console.log(radixSort([1556, 4, 3556, 593, 408, 4386, 907]));
