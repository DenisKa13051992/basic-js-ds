const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/



// function removeKFromList(l, k) {
//   let current = l
//   let newList = new Node()

//   while (current) {
//     if (current.value === k) {
//       while (current.value === k) {
//         current = current.next
//       }
//     } else {
//       if (!newList.value) {
//         newList = new Node(current.value)
//       } else {
//         let currentList = newList

//         while (currentList.next) {
//           currentList = currentList.next
//         }

//         currentList = new Node(current.value)
//       }
//       current = current.next
//     }
//   }
//   console.log(JSON.stringify(newList))
//   return newList
// }
// class Node {
//   constructor(data) {
//     this.value = data;
//     this.left = null
//     this.right = null
//   }
// }
class BinarySearchTree {
  constructor(){this.rooot = null};
  root() {
    return this.rooot
  }

  add(data) {
    this.rooot = addWithin(this.rooot, data);
    function addWithin(node, data){
      if (!node){return new Node(data);}
      if (node.data === data) {return node;}
      if (data<node.data){
        node.left = addWithin(node.left, data);
      } else {node.right = addWithin(node.right, data);}
      return node;}
  }

  has(data) {
    return hasWithin(this.rooot, data);
    function hasWithin(node, data){
      if (!node){
        return false;
      }
      if (node.data === data){
        return true;
      }
      return data < node.data ? hasWithin(node.left, data) : hasWithin(node.right, data)
    }
  }

  find(data) {
    return findWithin(this.rooot, data);

    function findWithin(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data > node.data) {
        return findWithin(node.right, data);
      } else {
        return findWithin(node.left, data);
      }
    }
  }

  remove(data) {
    this.rooot = removeNode(this.rooot, data);
    function removeNode(node, data){
      if (!node) {
        return null;
      }
      if (data<node.data){
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right){
          return null;
        };
      if (!node.left){
        node = node.right;
        return node;
      }
      if (!node.right){
        node = node.left;
        return node;
      }
      let minFromRight = node.right;
      while (minFromRight.left) {
        minFromRight = minFromRight.left;
      }
      node.data = minFromRight.data;
      node.right = removeNode(node.right, minFromRight.data);
      return node
        
      }
    }
  }

  min() {
    if (!this.rooot) {
      return;
    }
    let node = this.rooot;
    while (node.left){
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.rooot) {
      return;
    }
    let node = this.rooot;
    while (node.right){
      node = node.right;
    }
    return node.data;
  }
}
const tree = new BinarySearchTree()



module.exports = {
  BinarySearchTree
};