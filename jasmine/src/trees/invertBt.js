/*
 *
  Invert a binary tree.

       4
     /   \
    2     7
   / \   / \
  1   3 6   9

  to

       4
     /   \
    7     2
   / \   / \
  9   6 3   1

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 *
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var invertTree = function(root) {
  var depthFirstTraverse = function(node) {
    if(node.left === null && node.right === null) {
        return;
    }
    var tempLeft = node.left;
    node.left = node.right;
    node.right = tempLeft;
    depthFirstTraverse(node.left)
    depthFirstTraverse(node.right)
    return root;
  }
  return depthFirstTraverse(root)
};
