
/**
 * Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.
 *
 * Supposed the linked list is 1 -> 2 -> 3 -> 4 and you are given the third node with value 3,
 * the linked list should become 1 -> 2 -> 4 after calling your function.
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * @method deleteNode
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

// while loop version
var deleteNode = function(node) {
  if (node.next === null) {
    console.error('Cannot tail from list');
    return;
  }
    node.val = node.next.val;
    node.next = node.next.next;
};

/**
 * Helper Method for singly linked list
 * @method ListNode
 * @param { value } val - Any value
 * @returns { void }
 */
var Node = function(val) {
     this.val = val;
     this.next = null;
 }

/**
 * Constructor for Singly Linked List
 * Borrowed code for testing purposes
 * @see https://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392
 * @method SinglyList
 * @returns { void }
 */
var SinglyList = function() {
  this.head = null;
  this._length = 0;
}

/**
 * Borrowed code for testing purposes
 * @see https://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392
 */
SinglyList.prototype.add = function(value) {
var node = new Node(value),
currentNode = this.head;

 // 1st use-case: an empty list
  if (!currentNode) {
    this.head = node;
    this._length++;
    return node;
  }

  // 2nd use-case: a non-empty list
  while (currentNode.next) {
    currentNode = currentNode.next;
  }

  currentNode.next = node;

  this._length++;

  return node;
};


/**
 * Borrowed code for testing purposes
 * @see https://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392
 */
SinglyList.prototype.searchNodeAt = function(position) {
  var currentNode = this.head,
  length = this._length,
  count = 1,
  message = {failure: 'Failure: non-existent node in this list.'};

  // 1st use-case: an invalid position 
  if (length === 0 || position < 1 || position > length) {
    throw new Error(message.failure);
  }

  // 2nd use-case: a valid position 
  while (count < position) {
    currentNode = currentNode.next;
    count++;
  }

  return currentNode;
};
