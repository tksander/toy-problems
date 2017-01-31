/*
 * Given a binary tree, find its maximum depth.
 *
 * The maximum depth is the number of nodes along the longest path from the root
 * node down to the farthest leaf node.
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  var maxDepth = 0;
  var currentDepth = 0;
  var innerRecurse = function(node) {
    if (!node) {
      return;
    }
    currentDepth++;
    maxDepth = Math.max(maxDepth, currentDepth);
    innerRecurse(node.left);
    innerRecurse(node.right);
    currentDepth--;
  }
  innerRecurse(root);
  return maxDepth;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
