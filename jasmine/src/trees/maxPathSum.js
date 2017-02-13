/**
 * Maximum Path Sum in a Binary Tree
 * @see http://www.geeksforgeeks.org/find-maximum-path-sum-in-a-binary-tree/
 *
 * Given a binary tree, find the maximum path sum. The path may start and end at any node in the tree.
 *
 * Example:
 *
 * Input: Root of below tree
 *        1
 *       / \
 *      2   3
 *     /
 *    -2
 *    /
 *  3
 * Output: 6
 *
 * See below diagram for another example.
 * 1+2+3
 *
 */


/**
 * @method maxPathSum
 * @param {object} root - Root of binary tree
 * @returns {number} greatest sum for a contiguous path
 */
var maxPathSum = function(root) {
  var max = 0
  var current = 0

  var recurse = function(node) {

    if (!node) {
        return 0
    }

    if (node.left === null && node.right === null) {
      max = Math.max(max, node.val)
      return node.val;
    }

    var left = recurse(node.left)
    current = 0
    var right = recurse(node.right)
    current = 0

    var greaterChild = Math.max(left, right)
    var immediateFam = left + right + node.val
    var nodeAndChild = greaterChild + node.val

    max = Math.max(immediateFam, greaterChild, nodeAndChild, node.val, max)
    current = Math.max(Math.max(greaterChild, nodeAndChild, node.val), 0)
    return current
  }
  recurse(root)

  return max
}

var Node = function(val) {
    this.val = val
    this.left = null;
    this.right = null;
}

var r = new Node(1)
r.left = new Node(2)
r.left.left = new Node(-2)
r.right = new Node(3)

var c = new Node(10)
c.left = new Node(2)
c.left.left = new Node(20)
c.left.right = new Node(1)
c.right = new Node(10)
c.right.right = new Node(-25)
c.right.right.left = new Node(3)
c.right.right.right = new Node(4)

