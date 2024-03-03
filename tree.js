class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class BirarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data, node = this.root) {
    const newNode = new Node(data);

    if (!node) {
      this.root = newNode;
      return this;
    }

    let current = node;

    while (true) {
      if (current.val === newNode.val) {
        return this;
      }

      if (current.val < newNode.val) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }

        current = current.right;
      } else {
        if (!current.left) {
          current.left = newNode;
          return this;
        }

        current = current.left;
      }
    }
  }

  find(data, node = this.root) {
    if (!node) {
      return null;
    }

    if (data === node.val) {
      return node;
    } else if (data < node.val) {
      return this.find(data, node.left);
    } else {
      return this.find(data, node.right);
    }
  }

  contain(data) {
    return this.find(data) !== null;
  }

  findMin(node = this.root) {
    if (!node) {
      return null;
    }

    while (node.left) {
      node = node.left;
    }

    return node;
  }

  findMax(node = this.root) {
    if (!node) {
      return null;
    }

    while (node.right) {
      node = node.right;
    }

    return node;
  }

  findSecondLargest(node = this.root) {
    if (!node || (!node.left && !node.right)) {
      return null;
    }

    if (!node.right && node.left) {
      return this.findMax(node.left);
    }

    if (node.right && !node.right.left && !node.right.right) {
      return node;
    }

    return this.findSecondLargest(node.right);
  }

  DFSPreOrder() {
    var data = [];

    function traverse(node) {
      data.push(node.val);
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  DFSPreOrderIterative() {
    const stack = [];
    const data = [];
    let node = this.root;

    while (node || stack.length) {
      if (node) {
        data.push(node.val);
        stack.push(node);
        node = node.left;
      } else {
        node = stack.pop();
        node = node.right;
      }
    }

    return data;
  }

  DFSPostOrder() {
    var data = [];
    function traverse(node) {
      node.left && traverse(node.left);
      node.right && traverse(node.right);
      data.push(node.val);
    }
    traverse(this.root);
    return data;
  }

  DFSPostOrderIterative() {
    const list = [];
    const stack = [];
    let node = this.root;
    let lastVisitedNode = null;

    while (node || stack.length) {
      if (node) {
        stack.push(node);
        node = node.left;
      } else {
        let peekNode = stack[stack.length - 1];
        if (peekNode.right && lastVisitedNode !== peekNode.right) {
          node = peekNode.right;
        } else {
          list.push(peekNode.val);
          lastVisitedNode = stack.pop();
        }
      }
    }

    return list;
  }

  DFSInOrder() {
    var data = [];
    function traverse(node) {
      node.left && traverse(node.left);
      data.push(node.val);
      node.right && traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  DFSInOrderIterative() {
    const stack = [];
    const data = [];
    let node = this.root;

    while (node || stack.length) {
      if (node) {
        stack.push(node);
        node = node.left;
      } else {
        node = stack.pop();
        data.push(node.val);
        node = node.right;
      }
    }

    return data;
  }

  BFS(queue = [this.root], data = []) {
    if (!queue.length) {
      return data;
    }

    const node = queue.shift();
    data.push(node.val);

    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
    return this.BFS(queue, data);
  }

  BFSIterative() {
    var node = this.root,
      data = [],
      queue = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
}

const tree = new BirarySearchTree();
/* Methot 1 */
// tree.root = new Node(10);
// tree.root.right = new Node(12);
// tree.root.left = new Node(7);
// tree.root.right.right = new Node(14);
// tree.root.right.left = new Node(11);
// tree.root.left.right = new Node(8);
// tree.root.left.left = new Node(6);

/* 2 */
tree.insert(10);
tree.insert(15);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(20);

// console.log('find ', tree.find(5));
// console.log('max ', tree.findMax());
// console.log('min ', tree.findMin());
// console.log('second largest ', tree.findSecondLargest());
// console.log('tree ', tree);

console.log('DFSPreOrder ', tree.DFSPreOrder());
console.log('DFSPreOrderIterative ', tree.DFSPreOrderIterative());
console.log('DFSPostOrder ', tree.DFSPostOrder());
console.log('DFSPostOrderIterative ', tree.DFSPostOrderIterative());
console.log('DFSInOrder ', tree.DFSInOrder());
console.log('DFSInOrderIterative ', tree.DFSInOrderIterative());
console.log('BFS ', tree.BFS());
console.log('BFSIterative ', tree.BFSIterative());
