/**
 * Quick Sort
 * @see http://quiz.geeksforgeeks.org/quick-sort/
 *
 * Like Merge Sort, QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and
 * partitions the given array around the picked pivot. There are many different versions of
 * quickSort that pick pivot in different ways.
 *
 * Always pick first element as pivot.
 * Always pick last element as pivot (implemented below)
 * Pick a random element as pivot.
 * Pick median as pivot.
 *
 * The key process in quickSort is partition(). Target of partitions is, given an array and
 * an element x of array as pivot, put x at its correct position in sorted array and put
 * all smaller elements (smaller than x) before x, and put all greater elements
 * (greater than x) after x. All this should be done in linear time.
 *
 */


/**
 * Implements the pivot as last element
 * @method quickSort
 * @param {array} arr
 * @param {number} low - starting index
 * @param {number} high - ending index
 * @returns {array}
 */
var quickSort = function(arr) {
  function recurseSort(low, high) {
    if (low < high) {
      //  select last element as pivot
      var pivot = arr[high];
      // represents the hightest number lower than than the high element
      var wall = low - 1;

      //  sort on pivot
      for (i = low; i < high; i++) {
        // if current is less than pivot, swap current with element to right of wall
        if (arr[i] < arr[high]) {
          wall++;
          var temp = arr[wall];
          arr[wall] = arr[i];
          arr[i] = temp;
        }
      }
      // swap the wall with the high element (wall is >= high)
      // increment wall to lowest high number
      wall++;
      var temp = arr[high];
      arr[high] = arr[wall];
      arr[wall] = temp;
      //  recurse on left
      recurseSort(low, wall - 1);
      //  recurse on right
      recurseSort(wall + 1, high);
    }
  }
  recurseSort(0, arr.length - 1);
  return arr;
}



