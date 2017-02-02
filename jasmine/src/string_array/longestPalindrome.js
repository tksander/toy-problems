/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

// isPalindrome function
// check all substring combos

// etelhta racecar a si dad ym
// My dad is a racecar athlete

// inflection point
// start at opposite ends
// store reversed string

// daad
// racecar

/**
 * Time Complexity: O(n^3)
 * Space complexity: O(1)
 * @param {string} string
 * @returns {string} - longest palindrome
 */
var longestPalindrome = function (string) {
  var currentSubstring = '';
  var maxSubstringLength = 0;
  var maxSubstring = '';
  for (var i = 0; i < string.length; i++) {
     currentSubstring += string[i];
     for (var j = i + 1; j < string.length; j++) {
      currentSubstring += string[j];
      if(isPalindrome(currentSubstring) && currentSubstring.length > maxSubstringLength) {
        maxSubstringLength = currentSubstring.length;
        maxSubstring = currentSubstring;
      }
     }
     currentSubstring = '';
  }
  return maxSubstring;
};


/**
 * Helper function for longestPalindrome
 * @param {string} string
 * @returns {boolean}
 */
var isPalindrome = function(string) {
  // iterate across string until half way point
  for (var i = 0; i < Math.ceil(string.length / 2); i++) {
      if (string[i] !== string[string.length - 1 - i]) {
        return false;
      }
  }
  return true;
}


var res = longestPalindrome("My dad is a racecar athlete");
console.log(res);
