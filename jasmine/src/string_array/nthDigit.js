/**
 * @see https://leetcode.com/problems/nth-digit/
 * Find the nth digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...
 *
 * Note:
 * n is positive and will fit within the range of a 32-bit signed integer (n < 2^31).
 */


/**
 * Find nth digit of an inifite integer sequence: Optimized Solution
 * @method findNthDigit
 * @param {number} n
 * Time Complexity: O(log base 10(n))
 * Space Complexity: constant
 */
var findNthDigit = function(n) {
  if (n < 10) {
      return n;
  }

  var sum = 9;
  var rawCount = 9;
  var powTen = 0;

  // build number of digits
  while (sum < n) {
   powTen++;
   var multiplier10 = Math.pow(10, powTen);
   var multiplier = 9 * multiplier10;
   sum += (multiplier * (powTen + 1));
   rawCount += multiplier;
  }

  // Now we know the answer is in the last power of ten:
  // remove the last power of ten
  var multipliedSum = sum - (multiplier * (powTen + 1));
  var rawCount = rawCount - multiplier;
  powTen--;

  var numberOfDigits = powTen + 2;
  var digitsMultiplier = Math.ceil((n - multipliedSum) / (numberOfDigits))
  // get *actual* number that contains the nth digit
  var actualNumber = rawCount + digitsMultiplier;

  // calculate the index offset for the actual number
  var totalLength = multipliedSum + ((numberOfDigits) * digitsMultiplier);
  var offset = totalLength - n;

  return parseInt(actualNumber.toString()[numberOfDigits - offset - 1]);
};

/**
 * Find nth digit of an inifite integer sequence: Naive solution
 * @method findNthDigit
 * @param {number} n
 * Time Complexity: O(n)
 * Space Complexity: n
 */
var findNthDigit = function(n) {
  var digitStr = '1'
  var num = 1;
  while (digitStr.length <= n) {
      num++
      digitStr = digitStr.concat(num)
  }
  return parseInt(digitStr[n - 1]);
};
