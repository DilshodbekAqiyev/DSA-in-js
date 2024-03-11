/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let left = 0;
  let right = 1;
  let maxProfit = 0;
  while (right <= prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];
      maxProfit = Math.max(profit, maxProfit);
    } else {
      left = right;
    }
    right++;
  }
  return maxProfit;
};

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (str) {
  let set = new Set();
  let r = 0,
    wL = 0,
    l = 0;

  while (r < str.length) {
    if (!set.has(str[r])) {
      set.add(str[r]);
    } else {
      set.delete(str[l]);
      l++;
    }
    wL = Math.max(wL, r - l + 1);
    r++;
  }
  return wL;
  // let set = new Set();
  // let left = 0;
  // let maxSize = 0;

  // if (s.length === 0) return 0;
  // if (s.length === 1) return 1;

  // for (let i = 0; i < s.length; i++) {

  //     while (set.has(s[i])) {
  //         set.delete(s[left])
  //         left++;
  //     }
  //     set.add(s[i]);
  //     maxSize = Math.max(maxSize, i - left + 1)
  // }
  // return maxSize;
};

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let l = 0;
  let r = 0;
  let count = new Map();
  let res = 0;
  for (r = 0; r < s.length; r++) {
    let wLength = r - l + 1;

    count.set(s[r], 1 + count.get(s[r]) || 0);

    if (wLength - Math.max(...count.values()) > k) {
      count.set(s[l], count.get(s[l]) - 1);
      l++;
    }

    wLength = r - l + 1;

    res = Math.max(res, wLength);
  }
  return res;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// a node in a doubly linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //  add value to the beginning of the list
  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
  }

  //  add value to the end of the list
  push(value) {
    const newNode = new Node(value);

    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  //  remove value from the beginning of the list
  shift() {
    if (!this.head) {
      return null;
    }

    const removed = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removed.next;
      this.head.prev = null;
    }

    this.length--;

    return removed.value;
  }

  //  remove value from the end of the list
  pop() {
    if (!this.tail) {
      return null;
    }

    const removed = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removed.prev;
      this.tail.next = null;
    }

    this.length--;

    return removed.value;
  }

  // get the front value
  peekFront() {
    return this.head ? this.head.value : null;
  }

  // get the last value
  peekBack() {
    return this.tail ? this.tail.value : null;
  }
}

var maxSlidingWindow = function (nums, k) {
  const cleanUp = (i, d, n) => {
    while (d.length !== 0 && n[i] >= n[d.peekBack()]) {
      d.pop();
    }
  };

  let d = new Deque();
  let output = [];

  for (let i = 0; i < k; i++) {
    cleanUp(i, d, nums);
    d.push(i);
  }
  output[0] = nums[d.peekFront()];

  for (let i = k; i < nums.length; i++) {
    cleanUp(i, d, nums);
    if (d.length !== 0 && d.peekFront() <= i - k) {
      d.shift();
    }
    d.push(i);
    output[i - k + 1] = nums[d.peekFront()];
  }

  return output;
};
