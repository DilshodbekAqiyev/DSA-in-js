function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

const num = 5;
const res = factorial(num);
console.log(res);
