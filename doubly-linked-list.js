class Node {
  constructor(val, prev = null, next = null) {
    this.value = val;
    this.tail = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
    this.tail = this.head;
  }

  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length++;
    } else {
      this.tail.next = this.tail;
      this.tail = node;
      this.length++;
    }
  }
}

const list = new DoublyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
// console.log(list);

class Node {}
