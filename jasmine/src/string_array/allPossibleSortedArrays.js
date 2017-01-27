/**
 * @see http://www.geeksforgeeks.org/generate-all-possible-sorted-arrays-from-alternate-elements-of-two-given-arrays/
 * Generate all possible sorted arrays from alternate elements of two given sorted arrays
 * Given two sorted arrays A and B, generate all possible arrays such that first element
 * is taken from A then from B then from A and so on in increasing order till the arrays
 * exhausted. The generated arrays should end with an element from B.
 *
 * For Example
 * A = {10, 15, 25}
 * B = {1, 5, 20, 30}
 *
 * The resulting arrays are:
 *   10 20
 *   10 20 25 30
 *   10 30
 *   15 20
 *   15 20 25 30
 *   15 30
 *   25 30
 */


/**
 * Time Complexity: O(n^2) - algorithm iterates over entire array once per each element
 * Space Complexity: O(m) - where m is the number of resulting arrays
 * @method allPossibleSortedArrays
 * @param {array} - arr1
 * @param {array} - arr2
 */
var allPossibleSortedArrays = function(arrA, arrB) {
  var resultArr = [];
  var aLength = arrA.length;
  var bLength = arrB.length;
  var innerRecurse = function(arr, aCurrent, bCurrent) {
    debugger
    if (bCurrent > bLength) {
      return;
    }
    // iterate while length left in b
    while (bCurrent <= bLength - 1) {
      // pick from a - if b just picked and a has length left
      if (arr.length % 2 === 0 && aCurrent <= aLength - 1) {
        // if start of picking or current A value is greater than b value
        if (arrA[aCurrent] > arr[arr.length - 1] || arr.length === 0) {
          // push to string build
          arr.push(arrA[aCurrent]);
        }
        aCurrent++;
      } else { // pick from b
         // if B value greater than previous a value
         if (arrB[bCurrent] > arr[arr.length - 1]) {
           arr.push(arrB[bCurrent]);
           resultArr.push(arr.slice());
           innerRecurse(arr.slice(), aCurrent, bCurrent);
           arr.pop();
         }
         bCurrent++;
      }
    }
  };
  for (var i = 0; i < arrA.length; i++) {
    innerRecurse([], i, 0);
  }
  return resultArr;
};


