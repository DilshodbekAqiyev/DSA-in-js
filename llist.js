class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class List {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  Push(data) {
    let node = new Node(data);

    if (!this.head) {
      this.head = node;
      this.length++;
      return this;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    this.length++;
    // return this;
  }

  Print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  Search(data) {
    let current = this.head;
    let length = 0;
    while (this.head) {
      length++;
      if (current.data === data) {
        return length;
      }
      current = current.next;
    }
    return -1;
  }

  UnShift(data) {
    let tempNode = new Node(data);
    this.head.next = this.head;
    this.head = tempNode;
    this.length++;
    return this;
  }

  Pop() {
    let current = this.head;
    let prevCurrent = this.head;
    while (current) {
      current = current.next;
      if (!current.next) {
        prevCurrent.next = null;
        this.length--;
        return this;
      }
      prevCurrent = current;
    }
  }

  RemoveDuplicate() {
    let current = this.head;

    while (current) {
      let nextNode = current;

      while (nextNode.next) {
        if (current.data === nextNode.next.data) {
          nextNode.next = nextNode.next.next;
          this.length--;
        } else {
          nextNode = nextNode.next;
        }
      }

      current = current.next;
    }

    return this;
  }

  circularNode() {
    let p1 = this.head;
    let p2 = this.head;
    while (p2 && p2.next) {
      p1 = p1.next;
      p2 = p2.next.next;

      if (p1 === p2) return p1;
    }
    return -1;
  }
}

let llist = new List();

llist.Push(1);
llist.Push(2);
llist.Push(3);
llist.Push(4);
llist.Push(5);
llist.Push(6);
llist.Push(7);
llist.Push(8);
llist.Push(9);
//
for (let i = 0; i < 8; i++) {
  llist.Push(4);
  llist.Push(5);
  llist.Push(6);
  llist.Push(7);
  llist.Push(8);
  llist.Push(9);
}

console.log(llist.circularNode());

// console.log(llist.length, 'length llist');
// console.log(llist.Search('5'));
// console.log(llist.UnShift(3));
// console.log(llist.Pop());
// console.log(llist.length, 'length llist pop');
// console.log(llist);
// console.log(llist.RemoveDuplicate());
// llist.Print();
