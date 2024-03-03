class Node {
  constructor(data) {
    this.val = data;
    this.left = null;
    this.right = null;
  }
}

// Binary Heap
class MaxHeap {
  constructor(arr) {
    this.items = [...arr];
  }

  insert(data) {
    this.items.push(data);
    this.bubbleUp();
    return this;
  }

  bubbleUp() {
    let idx = this.items.length - 1;
    let val = this.items[idx];
    while (idx > 0) {
      let parentIdx = this.getParentIdx(idx);
      let parent = this.items[parentIdx];

      if (val <= parent) break;
      else {
        this.swap(idx, parentIdx);
      }

      idx = parentIdx;
    }
  }

  getParentIdx(n) {
    return Math.floor((n - 1) / 2);
  }

  swap(i, j) {
    [this.items[i], this.items[j]] = [this.items[j], this.items[i]];
  }

  delete() {
    if (this.items.length === 0) return null;
    if (this.items.length === 1) return this.items.pop();

    const deletedItem = this.items[0];
    this.items[0] = this.items.pop();
    this.sinkDown();
    return deletedItem;
  }

  leftChild(idx) {
    return 2 * idx + 1 < this.items.length ? 2 * idx + 1 : null;
  }

  rightChild(idx) {
    return 2 * idx + 2 < this.items.length ? 2 * idx + 2 : null;
  }

  sinkDown() {
    let idx = 0;
    while (this.leftChild(idx) !== null) {
      let maxChildIdx = this.getMaxChildIdx(idx);
      if (this.items[idx] >= this.items[maxChildIdx]) break;
      this.swap(idx, maxChildIdx);
      idx = maxChildIdx;
    }
  }

  getMaxChildIdx(idx) {
    const left = this.leftChild(idx);
    const right = this.rightChild(idx);

    if (right === null || this.items[left] > this.items[right]) return left;
    else return right;
  }

  isHeap() {
    for (let i = 0; i < this.items.length; i++) {
      const left = this.leftChild(i);
      const right = this.rightChild(i);

      if (
        (left !== null && this.items[i] < this.items[left]) ||
        (right !== null && this.items[i] < this.items[right])
      ) {
        return false;
      }
    }
    return true;
  }

  heapify(arr) {
    this.items = [...arr];
    for (let i = Math.floor(this.items.length / 2); i >= 0; i--) {
      this.sinkDown(i);
    }
  }
}

// max Heap test cases
const maxHeap = new MaxHeap([]);
maxHeap
  .insert(10)
  .insert(8)
  .insert(9)
  .insert(7)
  .insert(6)
  .insert(12)
  .insert(15);

console.log('maxHeap items: ', maxHeap.items);
const deletedItem = maxHeap.delete();
console.log('maxHeap items: ', maxHeap.items);

const maxHeap1 = new MaxHeap([9, 8, 6, 7]);
console.log('is Heap: ', maxHeap1.isHeap());

const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const maxHeap2 = new MaxHeap([]);
maxHeap2.heapify(unsortedArray);
console.log('max heap 2 items: ', maxHeap2.items);

maxHeap2.insert(10).insert(7);
console.log('max heap 2 items: ', maxHeap2.items);

maxHeap2.delete();
console.log('max heap 2 items: ', maxHeap2.items);

console.log('max heap 2 is heap: ', maxHeap2.isHeap());

// ---------------------------------------------------

class MinHeap {
  constructor(arr) {
    this.items = [...arr];
  }

  insert(data) {
    this.items.push(data);
    this.bubbleUp();
    return this;
  }

  bubbleUp() {
    let idx = this.items.length - 1;
    let val = this.items[idx];
    while (idx > 0) {
      let parentIdx = this.getParentIdx(idx);
      let parent = this.items[parentIdx];

      if (val <= parent) break;
      else {
        this.swap(idx, parentIdx);
      }

      idx = parentIdx;
    }
  }

  getParentIdx(n) {
    return Math.floor((n - 1) / 2);
  }

  swap(i, j) {
    [this.items[i], this.items[j]] = [this.items[j], this.items[i]];
  }

  delete() {
    if (this.items.length === 0) return null;
    if (this.items.length === 1) return this.items.pop();

    const deletedItem = this.items[0];
    this.items[0] = this.items.pop();
    this.sinkDown();
    return deletedItem;
  }

  leftChild(idx) {
    return 2 * idx + 1 < this.items.length ? 2 * idx + 1 : null;
  }

  rightChild(idx) {
    return 2 * idx + 2 < this.items.length ? 2 * idx + 2 : null;
  }

  sinkDown() {
    let idx = 0;
    while (this.leftChild(idx) !== null) {
      let minChildIdx = this.getMinChildIdx(idx);
      if (this.items[idx] <= this.items[minChildIdx]) break;
      this.swap(idx, minChildIdx);
      idx = minChildIdx;
    }
  }

  getMinChildIdx(idx) {
    const left = this.leftChild(idx);
    const right = this.rightChild(idx);

    if (right === null || this.items[left] < this.items[right]) return left;
    else return right;
  }

  isHeap() {
    for (let i = 0; i < this.items.length; i++) {
      const left = this.leftChild(i);
      const right = this.rightChild(i);

      if (
        (left !== null && this.items[i] > this.items[left]) ||
        (right !== null && this.items[i] > this.items[right])
      ) {
        return false;
      }
    }
    return true;
  }

  heapify(arr) {
    this.items = [...arr];
    for (let i = Math.floor(this.items.length / 2); i >= 0; i--) {
      this.sinkDown(i);
    }
  }
}

// test cases for Min Heap
const minHeap = new MinHeap([]);
minHeap
  .insert(10)
  .insert(8)
  .insert(9)
  .insert(7)
  .insert(6)
  .insert(12)
  .insert(15);

console.log('minHeap items: ', minHeap.items);
const deletedMinItem = minHeap.delete();
console.log('minHeap items after deletion: ', minHeap.items);

const minHeap1 = new MinHeap([9, 8, 6, 7]);
console.log('Is minHeap1 a Heap: ', minHeap1.isHeap());

const unsortedArrayForMinHeap = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const minHeap2 = new MinHeap([]);
minHeap2.heapify(unsortedArrayForMinHeap);
console.log('minHeap2 items: ', minHeap2.items);

minHeap2.insert(0).insert(4);
console.log('minHeap2 items: ', minHeap2.items);

minHeap2.delete();
console.log('minHeap2 items: ', minHeap2.items);

console.log('Is minHeap2 a Heap: ', minHeap2.isHeap());
