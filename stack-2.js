export class Stack {
  constructor() {
    this.items = [];
    this.top = null;
  }

  Push(data) {
    this.items.push(data);
  }

  Pop() {
    if (this.items.length !== 0) {
      if (this.items.length === 1) {
        this.top = null;
        this.items.pop();
      }
      if (this.items.length > 1) {
        this.top = this.items[this.items.length - 2];
        this.items.pop();
      }
    } else {
      return null;
    }
  }

  GetTop() {
    return this.top;
  }

  Size() {
    return this.items.length;
  }

  IsEmpty() {
    return this.items.length === 0;
  }
}

const stack = new Stack();

stack.Push(1);
stack.Push(2);
stack.Pop();
stack.Pop();
console.log(stack.items);
console.log(stack.items);
