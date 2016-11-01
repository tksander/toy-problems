/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 */

describe("BinarySearchArray", function() {
  it("should find the index of a number in an array", function() {
    var arr = [1,2,3,4,5]
   expect(binarySearch(arr, 4)).toEqual(3);
  });
});
