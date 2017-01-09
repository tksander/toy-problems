// find the 2nd largest element in a binary search tree

function BinaryTreeNode(value) {
  this.value = value;
  this.left  = null;
  this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};


var findSecondLargest = function(bst) {
  if(bst.right === null) {
    return bst.left
  } else {
    var recurse(tree, prevVal) {
      if(tree.right === null) {
        tree.left !== null ? return tree.left : return prevVal
      } else {
        recurse(tree.right, tree.value)        
      }
    } 
    recurse(bst.right, bst.value) 
  }
}

var root = new BinaryTreeNode(8);
var right1 = root.insertRight(9);
var left1 = root.insertLeft(7);
var right2 = root.insertRight(10);


