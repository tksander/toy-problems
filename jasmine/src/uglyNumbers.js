/**
 * @see http://www.geeksforgeeks.org/dynamic-programming-set-1/
 *
 * Ugly numbers are numbers whose only prime factors are 2, 3 or 5.
 * The sequence 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, … shows the first 11 ugly numbers.
 * By convention, 1 is included. Write a program to find Nth Ugly Number.
 *
 * Input:
 *
 * The first line of input contains an integer T denoting the number of test cases.
 * The first line of each test case is N.
 *
 * Output:
 *
 * Print the Nth Ugly Number.
 *
 * Constraints:
 *
 * 1 ≤ T ≤ 100
 * 1 ≤ N ≤ 500
 *
 * Example:
 *
 * Input:
 * 2
 * 10
 * 4
 *
 * Output:
 * 12
 * 4
 */


/**
 * Finds maximum divide for given interger - greatest divisible power
 * Divides a by greatest divisible power of b
 * @method gdp
 * @param { number } a numerator
 * @param { number } b divsor/factor
 * @returns { number }
 */
var gdp = function(a, b) {
   while (a % b === 0) {
     a = a / b;
   }
   return a;
}

/**
 * Check if a nuber is ugly
 * @method isUgly
 * @param { number } a
 * @returns { number } Factored number
 */
var isUgly = function(a) {
   a = gdp(a, 2);
   a = gdp(a, 3);
   a = gdp(a, 5);
   return (a === 1) ? true : false;
};

/**
 * Naive solution
 * @method uglyNumber
 * @param { number } n - Nth Ugly Integer
 * @returns { number } Nth Guly Integer
 */
var uglyNumber = function(n) {
    var uglyCount = 0;
    var i = 1
    while (uglyCount < n) {
        if (isUgly(i)) {
            uglyCount++;
        }
        i++;
    }
  return i;
};

/**
 * Dynamic Programming solution
 * @method uglyNumber
 * @param { number } n - Nth Ugly Integer
 * @returns { number } Nth Guly Integer
 */
var uglyNumberDynamic = function(n) {
};
