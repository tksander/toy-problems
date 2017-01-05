/**
 * Binary Search Tree
 */

/**
 * Constructor Fuction for Binary Search Tree
 * @method binarySearchTree
 * @returns {object}
 */
var binarySearchTree = function() {
  this.root = new node()
}

/**
 * Recursively depth first searches tree for corect placement of value
 * based on a binary search
 * @method add
 * @param {any} Value of node
 * @returns {undefined}
 */
binarySearchTree.prototype.add  = function(val) {
  if (this.root.val === null) {
      this.root.val = val;
      return;
  }
  function depthFirstTraverse(currentNode) {
     if (val < currentNode.val && currentNode.left === null)  {
       currentNode.left = val;
     }
     if (val > currentNode.val && currentNode.right === null)  {
       currentNode.right = val;
     }
     if (val < currentNode.val && currentNode.left !== null) {
       depthFirstTraverse(currentNode.left);
     }
     if (val > currentNode.val && currentNode.right !== null) {
       depthFirstTraverse(currentNode.right);
     }
  }
  depthFirstTraverse(this.root);
}

/**
 * Prints a given level of the binary sorted tree
 * @method printGivenLevel
 * @param {number} Level of binary tree, 0 indexed
 * @returns {undefined}
 */
binarySearchTree.prototype.printGivenLevel = function() {
}

var node = function(val) {
   this.val = val || null;
   this.left = null;
   this.right = null;
}
