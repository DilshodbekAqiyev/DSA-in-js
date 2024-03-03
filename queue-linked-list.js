class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.items = null;
    this.top = null;
    this.size = 0;
  }

  enqueue(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.items = newNode;
      this.top = newNode;
    } else {
      let current = this.items;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }

    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const dequeuedData = this.items.data;
    this.items = this.items.next;

    if ((this.items = null)) {
      this.top = null;
    }

    this.size--;

    return dequeuedData;
  }

  getItems() {
    return this.items !== null ? this.items.data : null;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.getItems());
// console.log(queue.isEmpty());

queue.dequeue();
console.log(queue.getSize());
console.log(queue.getItems());
