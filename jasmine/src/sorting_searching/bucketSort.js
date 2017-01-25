/**
 * @see http://www.geeksforgeeks.org/bucket-sort-2/
 *
 * Bucket sort is mainly useful when input is uniformly distributed over a range.
 * For example, consider the following problem.
 * Sort a large set of floating point numbers which are in range from 0.0 to 1.0 and
 * are uniformly distributed across the range. How do we sort the numbers efficiently?
 *
 * A simple way is to apply a comparison based sorting algorithm.
 * The lower bound for Comparison based sorting algorithm
 * (Merge Sort, Heap Sort, Quick-Sort .. etc) is Ω(n Log n), i.e., they cannot do better than nLogn.
 * Can we sort the array in linear time? Counting sort can not be applied here as we use
 * keys as index in counting sort. Here keys are floating point numbers.
 */

/**
 * Sorts an array using bucket sort.
 * @param {number[]} array The array to sort.
 * @param {number} [bucketSize=5] The number of values a bucket can hold.
 * @returns The sorted array.
 */
function sort(array, bucketSize) {
  var min = array[0];
  var max = array[0];
  // Determine minimum and maximum values
  for (var i = 1; i < array.length; i++) {
     min = Math.min(min, array[i]);
     max = Math.max(max, array[i]);
  }
  // set default bucketSize
  bucketSize = bucketSize || 5;
  // calc bucketCount
  var bucketCount = Math.floor((max - min) / bucketSize) + 1;
  var buckets = new Array(bucketCount);
  for (i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  // Distribute input array values into buckets
  for (var i = 0; i < array.length; i++) {
      buckets[Math.floor((array[i] - min) / bucketSize)].push(array[i]);
  }
  // Sort buckets and place back into input array
  array.length = 0;
  for (var i = 0; i < buckets.length; i++) {
     insertionSort(buckets[i]);
     for (var j = 0; j < buckets[i].length; j++) {
        array.push(buckets[i][j]);
     }
  }
  return array;
}

var insertionSort = function(arr) {
  for (var i = 1; i < arr.length; i++) {
      // get value from current
      var val = arr[i];
      var hole = i - 1;
      while (hole >= 0 && arr[hole] > val) {
         // move the current hole val to the right
         arr[hole + 1]  = arr[hole];
        // decrement hole
         hole--;
      }
      // place val in hole
      arr[hole + 1] = val;
  }
  return arr;
};

var testArr = [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434];

