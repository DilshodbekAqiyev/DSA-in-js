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
linkedList.addNode(32);
linkedList.addNode(78);
linkedList.addNode(65);
linkedList.addNode(90);
linkedList.addNode(12);
linkedList.addNode(44);

// console.log("Original Linked List:");
// linkedList.printList();

// const n = 3;
// linkedList.removeNthFromEnd(n);

// console.log("Linked List after removing ${n}th node from the end:");
// linkedList.printList();

// ---------------------------------------------

function reverseWords(inputString) {
  let wordStart = 0;
  let result = "";

  for (let i = 0; i <= inputString.length; i++) {
    if (inputString[i] === " " || i === inputString.length) {
      const word = inputString.slice(wordStart, i);
      if (word.length > 0) {
        result = word + " " + result;
      }
      wordStart = i + 1;
    }
  }

  return result.trim();
}

// const inputString = "Hello World Friend";
// const reversedString = reverseWords(inputString);
// console.log("Input:", inputString);
// console.log("Reversed String:", reversedString);

//   ---------------------------------------------

function happyNumber() {}

function returnMiddleLinkedList(head) {
  // let slow = head;
  // let fast = head;

  // while (fast && fast.next) {
  //   slow = slow.next;
  //   fast = fast.next.next;

  //   if (slow === fast) {
  //     break;
  //   }
  // }

  // if (!fast || !fast.next) {
  //   return slow;
  // }

  // slow = head;
  // while (slow !== fast) {
  //   slow = slow.next;
  //   fast = fast.next;
  // }

  // return slow;

  let slow = head;
  let fast = head;

  if (!head) return null;
  while (!fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

console.log(returnMiddleLinkedList(linkedList.head));

// ------------------------------------

function isHappy(n) {
  function getNext(num) {
    let sum = 0;
    while (num > 0) {
      const digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }
    return sum;
  }

  let slow = n;
  let fast = n;

  while (slow !== 1 && fast !== 1) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));

    if (slow === fast) {
      return false;
    }
  }

  return true;
}

console.log(isHappy(19));

// ---------------------------------------

function returnSumTarget(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {}
}

console.log(returnSumTarget([1, 7, 3, 5, 2, 5], 7));
