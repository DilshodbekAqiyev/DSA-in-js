const sortColors = (color) => {
  let left = 0;
  let right = color.length - 1;
  let currentIdx = 0;

  while (currentIdx <= right) {
    if (color[currentIdx] === 0) {
      [color[left], color[currentIdx]] = [color[currentIdx], color[left]];
      left++;
      currentIdx++;
    } else if (color[currentIdx] === 2) {
      [color[right], color[currentIdx]] = [color[currentIdx], color[right]];
      right--;
    } else {
      currentIdx++;
    }
  }

  return color;
};

const arr = [1, 2, 0, 1, 0, 2, 1, 1, 2, 0];
console.log(sortColors(arr));

// -------------------------------------------------------

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

function validPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) return false;

    left++;
    right--;
  }
  return true;
}

console.log("valid palindrome: ", validPalindrome("kiyik"));
