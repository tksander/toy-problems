/**
 * Given a sequence, find the length of the longest increasing subsequence from a given sequence .
 * The longest increasing subsequence means to find a subsequence of a given sequence in which the subsequence's elements are in sorted order, lowest
 * to highest, and in which the subsequence is as long as possible. This subsequence is not necessarily contiguous, or unique.
 *
 * Note: Duplicate numbers are not counted as increasing subsequence.
 *
 * For example:
 *  length of LIS for
 * { 10, 22, 9, 33, 21, 50, 41, 60, 80 } is 6 and LIS is {10, 22, 33, 50, 60, 80}.
 *
 * Input:
 * The first line contains an integer T, depicting total number of test cases.
 * Then following T lines contains an integer N depicting the size of array and next line followed by the value of array.
 *
 * Output:
 * Print the Max length of the subsequence in a separate line.
 *
 * Constraints:
 * 1 ≤ T ≤ 40
 * 1 ≤ N ≤ 1000
 * 0 ≤ A[i] ≤ 300
 *
 * Example:
 * Input
 * 1
 * 16
 * 0 8 4 12 2 10 6 14 1 9 5 13 3 11 7 15
 * Output
 * 6
 */


/**
 * @method increasingSubsequence
 */
var increasingSubsequence = function(numbers) {
  var maxCount;
  for (var i = 0; i < numbers.length; i++) {
    var increaseArray = [numbers[i]];
    maxCount++;
    for (var y = i; y < numbers.length; y++) {
      if (numbers[y] > numbers[y - 1] || numbers[y] === numbers[y -1]) {
          increaseArray.push(numbers[y]);
          maxCount++;
      } else {
        for (var z = increaseArray.length; z >= 0; z--) {
          if (numbers[y] > increaseArray[z]) {
            increasingSubsequence(increaseArray.slice(0, z));
          }
        }
      }
    }
  }
  return maxCount;
}

