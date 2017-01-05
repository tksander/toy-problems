/**
 * Binary Search Tree
 * @see http://www.geeksforgeeks.org/level-order-tree-traversal/
 */

/**
 * Constructor Fuction for Binary Search Tree
 * @method binarySearchTree
 * @returns {object}
 */
var binarySearchTree = function() {
  this.root = new Node();
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
   var node = new Node(val)
     if (val < currentNode.val && currentNode.left === null)  {
       currentNode.left = node;
     }
     if (val > currentNode.val && currentNode.right === null)  {
       currentNode.right = node;
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
 * Print level order traversal of tree
 * @method printLevelOrder
 * @returns {undefined}
 */
binarySearchTree.prototype.printLevelOrder = function() {
  var treeHeight = this.height();
  for (var i = 1; i <= treeHeight; i++) {
   this.printGivenLevel(i);
  }
}

/**
 * Compute the "height" of a tree -- the number of
 * nodes along the longest path from the root node
 * down to the farthest leaf node.
 */
binarySearchTree.prototype.height = function() {
  var maxheight = 0;

  function dfs(tree, height) {
    if (tree === null) {
        return;
    }
    // base case
     if (tree.left === null && tree.right === null) {
       maxheight = Math.max(maxheight, height);
       return;
     }
     // recursive cases
     dfs(tree.left, height + 1);
     dfs(tree.right, height + 1);
  }
  dfs(this.root, 1);
  return maxheight;
}

/**
 * Prints a given level of the binary sorted tree
 * @method printGivenLevel
 * @param {number} Level of binary tree, 0 indexed
 * @returns {undefined}
 */
binarySearchTree.prototype.printGivenLevel = function(level) {
  var breadthTraverse = function(tree, level) {
     if (tree === null)  {
        return;
     }
     if (level === 1) {
       if (tree.val !== null) console.log(tree.val);
     }
     breadthTraverse(tree.left, level - 1);
     breadthTraverse(tree.right, level - 1);
  }
  breadthTraverse(this.root, level);
}

var Node = function(val) {
   this.val = val || null;
   this.left = null;
   this.right = null;
}
