class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  removeNthFromEnd(n) {
    let node = new Node(0);
    node.next = this.head;
    let first = node;
    let second = node;

    for (let i = 1; i <= n + 1; i++) {
      first = first.next;
    }

    while (first) {
      first = first.next;
      second = second.next;
    }

    second.next = second.next.next;

    return node.next;
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const linkedList = new LinkedList();
// linkedList.addNode(32);
// linkedList.addNode(78);
// linkedList.addNode(65);
// linkedList.addNode(90);
// linkedList.addNode(12);
// linkedList.addNode(44);

// console.log("Original Linked List:");
// linkedList.printList();

function validPalindrome2(s) {
  function isPalindromeRange(i, j) {
    while (i < j) {
      if (s[i] !== s[j]) {
        return false;
      }
      i++;
      j--;
    }
    return true;
  }

  function validPalindromeHelper(i, j) {
    while (i < j) {
      if (s[i] !== s[j]) {
        return isPalindromeRange(i + 1, j) || isPalindromeRange(i, j - 1);
      }
      i++;
      j--;
    }
    return true;
  }

  return validPalindromeHelper(0, s.length - 1);
}

console.log("valid palindrome 2: ", validPalindrome2("abca"));

// --------------------------------------

// function reverseWords(inputString) {
//   let wordStart = 0;
//   let result = "";

//   for (let i = 0; i <= inputString.length; i++) {
//     if (inputString[i] === " " || i === inputString.length) {
//       const word = inputString.slice(wordStart, i);
//       if (word.length > 0) {
//         result = word + " " + result;
//       }
//       wordStart = i + 1;
//     }
//   }

//   return result;
// }

// const inputString = "Hello       World      ";
// const reversedString = reverseWords(inputString);
// console.log("Input:", inputString);
// console.log("Reversed String:", reversedString);

// --------------------------------------------
function returnMiddleLinkedList(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      break;
    }
  }

  if (!fast || !fast.next) {
    return slow;
  }

  slow = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

console.log("middle linked list: ", returnMiddleLinkedList(linkedList.head));

// ====================================================================================================================================

function duplicateNumbers(array) {
  const duplicates = [];
  const frequencyMap = {};

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (frequencyMap[element]) {
      if (!duplicates.includes(element)) {
        duplicates.push(element);
      }
    } else {
      frequencyMap[element] = true;
    }
  }

  return duplicates;
}

const numbersArray = [1, 2, 3, 4, 2, 5, 6, 7, 3, 8, 9, 5, 10, 1];
const resultDuplicates = duplicateNumbers(numbersArray);

// console.log("Original Array:", numbersArray);
// console.log("Duplicate Numbers:", resultDuplicates);

function findDuplicates(nums) {
  const duplicates = [];

  for (const num of nums) {
    const absNum = Math.abs(num);
    if (nums[absNum - 1] < 0) {
      duplicates.push(absNum);
    } else {
      nums[absNum - 1] *= -1;
    }
  }

  return duplicates;
}

const nums = [3, 1, 4, 2, 1, 2];
console.log("find Duplicates ", findDuplicates(nums));

//------------------------------------------------------------------------------

function circularArrayLoop(nums) {
  const n = nums.length;

  const getNextIdx = (idx) => {
    let nextIdx = (idx + nums[idx]) % n;
    return nextIdx >= 0 ? nextIdx : nextIdx + n;
  };

  for (let i = 0; i < n; i++) {
    let slow = i;
    let fast = i;

    while (slow !== fast) {
      slow = getNextIdx(slow);
      fast = getNextIdx(getNextIdx(fast));
    }

    if (slow === fast && slow !== getNextIdx(slow)) return true;
  }

  return false;
}

// console.log("curcularArrayLoop: ", circularArrayLoop([2, -1, 1, 2, 2])); // true

//------------------------------------------------------------------------------

function sumNumbersEqualTarget(nums, target) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const elem = target - nums[i];
    const elemIdx = nums.indexOf(elem, i + 1);

    if (elemIdx !== -1) {
      result.push([nums[i], elem]);
    }
  }

  return result;
}

// console.log(
//   "sum number equal target: ",
//   sumNumbersEqualTarget([2, 3, 7, 1, 5, 8, 4, 6], 9)
// );
// result :  [ [ 2, 7 ], [ 3, 6 ], [ 1, 8 ], [ 5, 4 ] ]

//------------------------------------------------------------------------------

function palindromeLinkedList(head) {
  let values = [];
  let current = head;
  while (current) {
    values.push(current.value);
    current = current.next;
  }

  let start = 0;
  let end = values.length - 1;

  while (start < end) {
    if (values[start] !== values[end]) return false;

    start++;
    end--;
  }

  return true;
}

linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(2);
linkedList.addNode(1);

// console.log("palindrome linked list: ", palindromeLinkedList(linkedList.head));

//======================================================================================

function palindromeLinkedList2(head) {
  let fast = head;
  let slow = head;
  let start = head;
  let prev = null;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  while (slow) {
    let next = slow.next;
    slow.next = prev;
    prev = next;
  }

  while (slow.next && start.next) {
    if (slow.value !== start.value) {
      return false;
    }

    start = start.next;
    slow = slow.next;
  }

  return true;
}

// console.log("palindrome linked list: ", palindromeLinkedList2(linkedList.head));

function sortColors(nums) {
  let start = 0;
  let end = nums.length - 1;
  let mid = Math.floor(nums.length / 2);
  for (let i = 0; i < nums.length; i++) {
    if ((nums[i] = 0)) {
      swap(nums[start], nums[mid]);
      start++;
      mid++;
    } else if (nums[mid] === 2) {
      swap(nums[mid], nums[end]);
      end--;
    } else {
      // start++;
      mid++;
    }
  }

  function swap(i, j) {
    return ([i, j] = [j, i]);
  }

  return nums;
}

// console.log("sort colors", sortColors([0, 1, 0, 2, 1, 2, 0, 2]));
