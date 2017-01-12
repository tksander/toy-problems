/**
 * Search an element in a sorted and rotated array
 * An element in a sorted array can be found in O(log n) time via binary search.
 * But suppose we rotate an ascending order sorted array at some pivot unknown
 * to you beforehand. So for instance, 1 2 3 4 5 might become 3 4 5 1 2.
 * Devise a way to find an element in the rotated array in O(log n) time.
 */

/**
 * @method sortRotateSearch
 * @param {array} arr
 * @param {number} target
 * @return {boolean}
 */


// 3 4 5 1 2
// 0 1 2 3 4
// start = 3
// end = 2
// length = 5
// halfLength = 2
// vMiddle = start + halfLength = 2 + 2 = 4
//
var sortRotateSearch = function(arr, target) {
  var pivot = findPivot(arr);
  var startIndex =
  var endIndex =
  // implement binary search with pointers
  // if less than
    // halve from vMiddle to start
    // call search
  // if greater than
    // halve vMiddle to end
    // call search
}

// 3 4 5 1 2
// 5 6 7 8 9 2 3
var findPivot = function() {
   // get beginning, middle, end
   // if end < middle (then pivot)
    // recurse
   // if beginning > middle (then pivot)
    // recurse
}
