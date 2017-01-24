/**
 * @see https://leetcode.com/problems/binary-tree-inorder-traversal/
 * @see For example answer: http://www.geeksforgeeks.org/inorder-tree-traversal-without-recursion/
 * Given a binary tree, return the inorder traversal of its nodes' values.
 *
 * For example:
 * Given binary tree [1,null,2,3],
 *    1
 *     \
 *      2
 *     /
 *    3
 * return [1,3,2].
 *
 * Note: Recursive solution is trivial, could you do it iteratively?
 */

/**
 * Prints Binary Tree InOrder
 * @method inorder
 * @param {Node} tree - represents binary tree
 * @returns {undefined}
 */
var inorder = function(tree) {
  var stack = [];
  var currNode = tree;
  // Traverse to first node inOrder
  while (stack.length !== 0 || currNode !== null) {
    if (currNode !== null) {
      stack.push(currNode);
      currNode = currNode.left;
    } else {
      currNode = stack.pop();
      console.log(currNode.val);
      currNode = currNode.right;
    }
  }
};

/**
 * Creates a node in a binary tree
 * @method Node
 * @param {any} val
 */
var Node = function(val) {
   this.val = val;
   this.left = null;
   this.right = null;
}

var a = new Node(1);
a.left = new Node(2);
a.left.left = new Node(3);
a.left.right = new Node(4);
a.right = new Node(5);
a.right.left = new Node(6);
