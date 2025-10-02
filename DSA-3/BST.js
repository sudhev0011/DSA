class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root == null;
  }
  insert(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, node) {
    if (node.value < root.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    }

    if (root.value == value) {
      return true;
    } else if (root.value < value) {
      return this.search(root.left, value);// always remember to use 'this' keyword when using the methods inside
    } else {
      return this.search(root.right, value);
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  levelOrder() {
    let queue = [];

    queue.push(this.root);

    while (queue.length) {
      let curr = queue.shift();

      console.log(curr.value);

      if (curr.left) {
        queue.push(curr.left);
      }

      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      this.max(root.right);
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) return root;

    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }

      if (!root.left) {
        return root.right;
      }

      if (!root.right) {
        return root.left;
      }

      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }

    return root; // always remember to return the root 
  }

  isValidBst() {
    return this.validate(this.root, -Infinity, Infinity);
  }

  validate(root, minValue, maxValue) {
    if (root === null) return true;

    if (root.value <= minValue || root.value >= maxValue) return false;

    return (
      this.validate(root.left, minValue, root.value) &&
      this.validate(root.right, root.value, maxValue)
    );
  }

  isBalanced(root) {
    return this.balanced(root) !== -1;
  }

  balanced(root) {
    if (root === null) return 0;

    let leftHeight = this.balanced(root.left);
    if (leftHeight === -1) return -1;
    let rightHeight = this.balanced(root.right);
    if (rightHeight === -1) return -1;

    if(Math.abs(leftHeight - rightHeight) > 1) return -1;

    return Math.max(leftHeight,rightHeight) + 1;
  }

  maxDepth(root) {
    if (root === null) {
      return 0;
    }

    let leftHeight = this.maxDepth(root.left);
    let rightHeight = this.maxDepth(root.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  secondLargest() {
    if (this.root === null) {
      return null;
    }

    let parent = null;

    let curr = this.root;

    while (curr.right) {
      parent = curr;
      curr = curr.right;
    }

    if (curr.left !== null) {
      return this.max(curr.left);
    }

    return parent.value;
  }

  secondSmallest() {
    if (this.root === null) return null;

    let parent = null;
    let curr = this.root;

    while (curr.left) {
      parent = curr.value;
      curr = curr.left;
    }

    if (curr.right !== null) {
      return this.min(curr.right);
    }

    return parent;
  }

  closest(target) {
    if (this.root === null) {
      return null;
    }

    let curr = this.root;
    let close = Infinity;

    while (curr !== null) {
      if (Math.abs(curr.value - target) < Math.abs(close - target)) {
        close = curr.value;
      }

      if (curr.value < target) {
        curr = curr.right;
      } else if (curr.value > target) {
        curr = curr.left;
      } else {
        return curr.value;
      }
    }

    return close;
  }

  sumAllNodes(root) {
    if (root === null) return null;

    return (
      root.value + this.sumAllNodes(root.left) + this.sumAllNodes(root.right)
    );
  }

  sumLeftSubTree() {
    if (this.root === null || this.root.left === null) return 0;

    return this.sumAllNodes(this.root.left);
  }

  sumRighthSubTree() {
    if (this.root === null || this.root.right === null) return 0;

    return this.sumAllNodes(this.root.right);
  }

  countAllNodes() {
    if (this.root === null) return 0;

    return (
      1 +
      this.countAllNodes(this.root.left) +
      this.countAllNodes(this.root.right)
    );
  }

  countLeftSubTree() {
    if (this.root === null || this.root.left === null) return 0;

    return this.countAllNodes(this.root.left);
  }

  countRightSubTree() {
    if (this.root === null || this.root.right === null) return 0;

    return this.countAllNodes(this.root.right);
  }

  heightOfNode(node) {
    if (node === null) return -1;

    let leftHeight = this.heightOfNode(node.left);
    let rightHeight = this.heightOfNode(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  KthSmallest(k){

    let count = 0;
    let result = null;

    function inOrder(node){

      if(!node || result !== null) return;

      inOrder(node.left);

      count++;

      if(count === k){

        result = node.value;
        return;
      }

      inOrder(node.right);

    }

    inOrder(this.root);

    return result;
  }
}

const bst = new BST();

console.log("Tree is Empty?", bst.isEmpty());

bst.insert(10);
bst.insert(7);
bst.insert(5);
bst.insert(3);
bst.insert(15);
bst.insert(2);

// console.log(bst.search(bst.root, 1));
// console.log(bst.isValidBst());
console.log('preOrder');
bst.preOrder(bst.root);

bst.delete(5);
console.log('preOrder');
bst.preOrder(bst.root);
// console.log('inOrder');
// bst.inOrder(bst.root);
// console.log('postOrder');
// bst.postOrder(bst.root)
// console.log('levelOrder');
// bst.levelOrder();
// console.log(bst.secondLargest());
// console.log(bst.secondSmallest());
// console.log(bst.heightOfNode(bst.root.left.left.left));
// console.log(bst.KthSmallest(3));
