class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(data, priority) {
    const node = new Node(data, priority);
    this.items.push(node);
    this.bubbleUp();
    return this;
  }

  bubbleUp() {
    let idx = this.items.length - 1;

    while (idx > 0) {
      let parentIdx = this.getParentIdx(idx);

      if (this.items[idx].priority <= this.items[parentIdx].priority) {
        this.swap(idx, parentIdx);
      } else {
        break;
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

  dequeue() {
    if (this.items.length === 0) {
      return null;
    }

    const removedItem = this.items[0];
    const lastItem = this.items.pop();

    if (this.items.length > 0) {
      this.items[0] = lastItem;
      this.bubbleDown();
    }

    return removedItem;
  }

  bubbleDown() {
    let idx = 0;

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let swapIdx = null;

      if (leftChildIdx < this.items.length) {
        if (this.items[leftChildIdx].priority < this.items[idx].priority) {
          swapIdx = leftChildIdx;
        }
      }

      if (rightChildIdx < this.items.length) {
        if (
          (swapIdx === null &&
            this.items[rightChildIdx].priority < this.items[idx].priority) ||
          (swapIdx !== null &&
            this.items[rightChildIdx].priority <
              this.items[leftChildIdx].priority)
        ) {
          swapIdx = rightChildIdx;
        }
      }

      if (swapIdx === null) {
        break;
      }

      this.swap(idx, swapIdx);
      idx = swapIdx;
    }
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue('tast 2', 2);
priorityQueue.enqueue('task 1', 1);
priorityQueue.enqueue('tast 3', 3);
priorityQueue.enqueue('tast 4', 4);

console.log(priorityQueue);

const dequeuedItem = priorityQueue.dequeue();
console.log(dequeuedItem);
console.log(priorityQueue);
