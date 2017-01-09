/*
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].
 *
 * Note:
 * You must do this in-place without making a copy of the array.
 * Minimize the total number of operations.
 */

/**
 * @method moveZeroes
 * @param {array} zeroArr
 * @see https://leetcode.com/problems/move-zeroes/
 * Input: Array of numbers
 * Output: Array of numbers
 * Edge cases: None
 * Complexity:
 */
// Naive would be a O(n^2)
// [0, 1, 0, 3, 12]
// [1, 0, 1, 0, 3, 12]
// const moveZeroes = (zeroArr) => {
  // let endNonZero = 0;
  // for(let i = 0; i < zeroArr.length; i++) {
    // if (zeroArr[i] !== 0) {
      // let tempNonZero = zeroArr[i];
      // zeroArr[i] = zeroArr[endNonZero];
      // zeroArr[endNonZero] = zeroArr[i];
      // endNonZero++;
    // }
  // }
// }

"use strict";

//[1,0,2]
var moveZeroes = function moveZeroes(zeroArr) {
  var endNonZero = 0;
  for (var i = 0; i < zeroArr.length; i++) {
    if (zeroArr[i] !== 0) {
      var tempNonZero = zeroArr[i];
      zeroArr[i] = zeroArr[endNonZero];
      zeroArr[endNonZero] = tempNonZero;
      endNonZero++;
    }
  }
  return zeroArr;
};
