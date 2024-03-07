/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n <= 1) return n;

  return fib(n - 1) + fib(n - 2);
};

console.log(fib(4)); // 3

/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function (n) {
  if (n <= 2) {
    return n;
  }

  const arr = new Array(n + 1);

  arr[1] = 1;
  arr[2] = 2;

  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[n];
};

console.log(climbStairs(3)); // 3
