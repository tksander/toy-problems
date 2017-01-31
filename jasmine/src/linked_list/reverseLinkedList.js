/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Iterative approach
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var node = head.next;
    var prev = head;
    head.next = null;
    while (node !== null) {
      var tempNext = node.next;
      node.next = prev;

      prev = node;
      node = tempNext;
    }
    return prev;
};


/**
 * Recursive approach
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  // Return recurse when reach end of list
  if (head.next === null) {
     return head;
  }
  // Return last node up the stack to return head reference
  var lastNode = reverseList(head.next);
  // Point the next node to this node
  head.next.next = head;
  // Null this nodes next reference -> for the final node
  head.next = null;
  return lastNode;
};

 function ListNode(val) {
     this.val = val;
     this.next = null;
 }
