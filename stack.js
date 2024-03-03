class Stack {
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

  Sort() {
    for (let i = 0; i < this.items.length; i++) {
      for (let j = 0; j < this.items.length - i - 1; j++) {
        if (this.items[j] > this.items[j + 1]) {
          [this.items[j], this.items[j + 1]] = [
            this.items[j + 1],
            this.items[j],
          ];
        }
      }
    }

    this.top = this.items[0];
    return this.items;
  }
}

const stack = new Stack();

stack.Push(1);
stack.Push(5);
stack.Push(4);
stack.Push(3);
stack.Push(2);
console.log(stack.Sort());
console.log(stack.top);
