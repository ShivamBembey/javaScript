class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new Node(value);
  
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  }
  
// Example usage:
const bst = new BinarySearchTree();
bst.insert(11);
bst.insert(6);
bst.insert(8);
bst.insert(19);
bst.insert(4);
bst.insert(10);
bst.insert(5);
bst.insert(17);
bst.insert(43);
bst.insert(49);
bst.insert(31);
  
  console.log(bst.root); // The root node of the binary search tree
  