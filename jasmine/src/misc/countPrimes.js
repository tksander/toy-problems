/**
 * @see https://leetcode.com/problems/count-primes/
 * Description:
 *
 * Count the number of prime numbers less than a non-negative number, n.
 */

/**
* Time complexity: O(n)
* Space complexity: O(n)
* Natural number greater than 1 that has no positive divisors other than 1 and itself
* @see https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
* @param {number} n
* @return {number}
*/
var countPrimes = function(n) {
  var notPrime = [];
  // initialize array to all false
  for (var j = 0; j < n; j++) {
     notPrime[j]  = false;
  }
  count = 0;
  for (var i = 2; i < n; i++) {
      if (!notPrime[i]) {
         count++;
         console.log(i)
         for (var k = 2; k * i < n; k++) {
            notPrime[k * i] = true;
         }
      }
  }
  return count;
};
