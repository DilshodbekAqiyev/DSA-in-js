/**
 * Queue first in first out
 *
 *
 * 1. LInear - chiziqli
 * 2. Curcular - aylanaviy
 * 3. Priorty - asosiyiy clientlar
 *
 * event queue
 * enqueue (navbatga kelishi)
 *  , dequeue (navbatga chiqishi)
 * , getFront, isEmpty, Size
 */

class Queue {
  constructor() {
    this.items = [];
  }

  EnQueue(data) {
    this.items.push(data);
  }

  Dequeue() {
    this.items.shift();
  }

  GetFront() {
    return this.items[0];
  }

  IsEmpty() {
    return this.items.length === 0;
  }

  Size() {
    return this.items.length;
  }
}

// const getBinary = (n) => {
//   let s1,
//     s2,
//     res = [];
//   const queue = new Queue();

//   queue.EnQueue('1');
//   for (let i = 0; i < n; i++) {
//     res.push(queue.Dequeue());
//     s1 = res[i] + '0';
//     s2 = res[i] + '1';

//     queue.EnQueue(s1);
//     queue.EnQueue(s2);
//   }

//   return res;
// };

// const n = 3;
// const res = getBinary(n);
// console.log(res);

class TwoStaks {
  constructor(size) {
    this.size = size;
    this.items1 = [];
    this.items2 = [];
  }

  get items() {
    return [this.items1, this.items2];
  }

  Push1(data) {
    if (this.items.flat().length < this.size) {
      this.items1.push(data);
    } else {
      return -1;
    }
  }

  Push2(data) {
    if (this.items.flat().length < this.size) {
      this.items2.push(data);
    } else {
      return -1;
    }
    return this.items;
  }

  Pop1() {
    this.items1.pop();
  }

  Pop2() {
    this.items2.pop();
  }

  Shift1() {
    if (this.items.flat().length < this.size) {
      this.items1.shift();
    } else {
      return -1;
    }
    return this.items;
  }

  Shift2() {
    if (this.items.flat().length < this.size) {
      this.items1.shift();
    } else {
      return -1;
    }
    return this.items;
  }
}

const size = 3;
const twoStact = new TwoStaks(size);
twoStact.Push1(1);
twoStact.Push1(3);
twoStact.Push2(2);
twoStact.Push2(4);
// twoStact.Pop1();
console.log(twoStact.items);
