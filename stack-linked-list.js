class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.top = this.head;
    this.size = 0;
    this.items = [];
  }

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.top = newNode;
    this.size++;
    this.items.push(data);
  }

  pop() {
    if (this.size === 0) {
      return null;
    }

    const popData = this.top.data;
    this.head = this.head.next;
    this.top = this.head;
    this.size--;
    this.items.pop();

    return popData;
  }

  getTop() {
    return this.top !== null ? this.top.data : null;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  sort() {
    for (let i = 0; i < this.size; i++) {
      let current = this.head;
      let nextNode = current.next;

      for (let j = 0; j < this.size - i - 1; j++) {
        if (current.data > nextNode.data) {
          const temp = current.data;
          current.data = nextNode.data;
          nextNode.data = temp;
        }

        current = nextNode;
        nextNode = nextNode.next;
      }
    }
  }

  getItems() {
    return this.items;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(5);
stack.push(4);
stack.push(3);
stack.push(2);

stack.sort();

console.log('Stack Items:', stack.getItems());
console.log('Top:', stack.getTop());
console.log('Size:', stack.getSize());
console.log('Is Empty:', stack.isEmpty());
