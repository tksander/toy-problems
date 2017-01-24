/**
 * Convert a given Binary Tree to Doubly Linked List | Set 4
 * Given a Binary Tree (BT), convert it to a Doubly Linked List(DLL) In-Place.
 *
 * The left and right pointers in nodes are to be used as previous and next pointers respectively
 * in converted DLL. The order of nodes in DLL must be same as Inorder of the given Binary Tree.
 * The first node of Inorder traversal (left most node in BT) must be head node of the DLL.
 *
 */

/**
 * @method btt
 */
var btt = function(tree) {
  var prev = null;
  var head = null;
  function innerRecurse(node) {
    debugger
    if (!node) {
        return;
    }

    innerRecurse(node.left);

    if (head === null) {
      head = node;
    } else {
      node.left = prev;
      prev.right = node;
    }
    prev = node;

    innerRecurse(node.right);
  };
  innerRecurse(tree);
  return head;
};

/**
 * @method Node
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

