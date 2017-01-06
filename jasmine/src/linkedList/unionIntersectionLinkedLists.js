/*
 * Union and Intersection of two Linked Lists
 * Given two Linked Lists, create union and intersection lists that contain union and
 * intersection of the elements present in the given lists.
 * Order of elments in output lists doesn’t matter.
 * @see http://www.geeksforgeeks.org/union-and-intersection-of-two-linked-lists/
 *
 * Example:
 *
 * Input:
 *    List1: 10->15->4->20
 *    list2:  8->4->2->10
 * Output:
 *    Intersection List: 4->10
 *    Union List: 2->8->20->4->15->10
 */

/**
 * Naive solution
 */
var intersectionList = function(list1, list2) {
  var resultList = new SinglyLinkedList();
  l1current = list1.head;
  l2current = list2.head;

  while (l1current !== null) {
    // loop over second list
    while (l2current !== null) {
        // if second list item matches first, add to intersection
        if (l1current.val === l2current.val) {
            resultList.add(l2current.val);
        }
        l2current = l2current.next;
    }
    l2current = list2.head;
    l1current = l1current.next;
  }
  return resultList;
}

/**
 * Hashed solution
 */
var intersectionList = function(list1, list2) {
  var resultList = new SinglyLinkedList();
  l1current = list1.head;
  l2current = list2.head;
  var table = {};

  while (l1current !== null) {
    table[l1current.val] = l1current.val
    l1current = l1current.next;
  }
  while (l2current !== null ) {
     if (table[l2current.val]){
        resultList.add(l2current.val);
     }
    l2current = l2current.next;
  }
  return resultList;
}

var unionList = function(list1, list2) {
  var resultList = new SinglyLinkedList();
  l1current = list1.head;
  l2current = list2.head;
  var table = {};

  while (l1current !== null) {
    table[l1current.val] = l1current.val
    resultList.add(l1current.val);
    l1current = l1current.next;
  }
  while (l2current !== null ) {
     if (!table[l2current.val]){
        resultList.add(l2current.val);
     }
    l2current = l2current.next;
  }
  return resultList;
}


var SinglyLinkedList = function() {
   this.head = null;
   this.tail = null;
}

SinglyLinkedList.prototype.add = function(val) {
   var node = new Node(val);
   var currentNode = this.head
   if (currentNode === null) {
     this.head = node;
     this.tail = this.head;
     return node;
   }

   while (currentNode.next !== null) {
     currentNode = currentNode.next;
   }
   this.tail.next = node;
   this.tail = node;
}

SinglyLinkedList.prototype.forEach = function(func) {
   var currentNode = this.head;
   while (currentNode.next !== null) {
     func(currentNode)
     currentNode = currentNode.next;
   }
   func(currentNode);
}

SinglyLinkedList.prototype.printNodes = function() {
  this.forEach(function(node) {
      console.log(node.val);
  })
}

var Node = function(val) {
    this.val = val;
    this.next = null;
}
