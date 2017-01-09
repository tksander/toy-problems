/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 */

var binarySearch = function(originalArray, target) {
  if (originalArray.length === 0) {
      console.log('Error: empty array');
      return;
  }
  var searchRecurse = function(innerArray, indexShift) {
    if (innerArray.length === 0) {
        console.log('Sorry, number: ' + target + ' not found.');
        return;
    }
    var currentIndex = Math.floor(innerArray.length / 2);
    var currentNum = innerArray[currentIndex];
    if (currentNum === target) {
        return currentIndex + indexShift;
    } else if (currentNum > target) {
        return searchRecurse(innerArray.slice(0, currentIndex), currentIndex + indexShift);
    } else {
        return searchRecurse(innerArray.slice(currentIndex + 1), currentIndex + indexShift);
    }
  }
  return searchRecurse(originalArray, 0);
}

