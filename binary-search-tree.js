class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  traverse(node = this.root) {
    if (node.left) this.traverse(node.left);
    if (node.right) this.traverse(node.right);
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.val > val) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          console.log(this);
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          console.log(this);
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currentNode = this.root) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    if (currentNode.val > val) {
      if (!currentNode.left) {
        currentNode.left = newNode;
        return this;
      }
      this.insertRecursively(val, currentNode.left);
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode;
        return this;
      }

      this.insertRecursively(val, currentNode.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;

    while (currentNode) {
      if (currentNode?.val > val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }

      if (currentNode?.val === val) return currentNode;
    }

    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currentNode = this.root) {
    if (!currentNode) return undefined;

    if (currentNode.val === val) {
      return currentNode;
    } else if (currentNode.val > val) {
      return this.findRecursively(val, currentNode?.left);
    } else {
      return this.findRecursively(val, currentNode?.right);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Depth First Search
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root, arr = []) {
    if (node === null) return arr;

    arr.push(node.val);
    this.dfsPreOrder(node.left, arr);
    this.dfsPreOrder(node.right, arr);

    return arr;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root, arr = []) {
    if (node === null) return arr;

    this.dfsInOrder(node.left, arr);
    arr.push(node.val);
    this.dfsInOrder(node.right, arr);

    return arr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root, arr = []) {
    if (node === null) return arr;

    this.dfsPostOrder(node.left, arr);
    this.dfsPostOrder(node.right, arr);
    arr.push(node.val);

    return arr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    if (!this.root) return [];

    let queue = [];
    let result = [];

    queue.push(this.root);

    while (queue.length > 0) {
      const current = queue.shift();

      result.push(current.val);

      if (current.left) {
        queue.push(current.left); // Enqueue left child at the end.
      }

      if (current.right) {
        queue.push(current.right); // Enqueue right child at the end.
      }
    }

    return result; //[15, 10, 20, 1, 12, 50, 5]
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

const binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50);

// console.log("Should be 17", binarySearchTree.findRecursively(18));
console.log(binarySearchTree.bfs());

module.exports = BinarySearchTree;
