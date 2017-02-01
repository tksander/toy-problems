/**
 * @see https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Given a string, find the length of the longest substring without repeating characters.
 *
 * Examples:
 *
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 *
 * Given "bbbbb", the answer is "b", with the length of 1.
 *
 * Given "pwwkew", the answer is "wke", with the length of 3.
 * Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

/**
 * @param {string} s
 * @return {number}
 */
// Space complexity O(n)
// Time complexity O(n)
var lengthOfLongestSubstring = function(s) {
  // track current Length
  var currentLength = 0;
  var longestLength = 0;
  var currentString = '';
  var longestString = '';
  var chars = {};
  for (var i = 0; i < s.length; i++) {
    // if char not in table, add to table, increment length tracker, and concat string
    if (!chars.hasOwnProperty(s[i])) {
        currentLength++;
        currentString = currentString + s[i];
        chars[s[i]] = s[i];
        if (currentLength > longestLength) {
          longestLength = currentLength;
          longestString = currentString;
        }
    } else {
      currentLength = 1;
      currentString = s[i];
      chars = {};
      chars[s[i]] = s[i];
    }
  }
  return longestString;
};
