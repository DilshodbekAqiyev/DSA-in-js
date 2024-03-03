// function RemoveEvenInt(array) {
//   const res =[]

//   // for (let i = 0; i < array.length; i++) {
//   //   if (array[i] % 2 === 1) {
//   //     res.push(array[i]);
//   //   }
//   // }
//   // return res;
// }

// const arr = [1, 2, 4, 5, 10, 6, 3];
// const res = RemoveEvenInt(arr);

// console.log(res);

// const mergeArray = (arr1, arr2) => {
//   const mergedArray = [...arr1, ...arr2];

//   mergedArray.sort((a, b) => a - b);
//   return mergedArray;
// };

// const arr1 = [1, 3, 4, 5];
// const arr2 = [2, 6, 7, 8];
// const res = mergeArray(arr1, arr2);
// console.log(res);

const arr = [1, 21, 3, 14, 5, 60, 7, 6];

const findedNumbers = (array, value) => {
  const obj = {};

  for (let i = 0; i < array.length; i++) {
    if (array[i] + array[i + 1] == value) obj[value] = value;
  }

  return Object.keys(obj);
};

const val = 81;
const res = findedNumbers(arr, val);

console.log(res);

// function rotateString(t = t.split(''), r = r.split('')) {
//   for (let i = 0; i < t.length; i++) {
//     let s = t.length - i;
//     if (r === t.slice(s) + t.slice(0, s)) return true;
//   }
//   return false;
// }

// const res = foo('javascript', 'acriptjava');
// console.log(res);
