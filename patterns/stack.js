/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        if (s[i] !== stack.pop()) {
          return false;
        }
    }
  }

  return stack.length === 0;
};

/////////////////////////////////////////////////////////////////////////////

var MinStack = function () {
  this.items = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  return this.items.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  return this.items.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.items[this.items.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  let min = this.items[0];
  for (let i = 1; i < this.items.length; i++) {
    if (this.items[i] < min) {
      min = this.items[i];
    }
  }
  return min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
