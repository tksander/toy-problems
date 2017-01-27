/**
 * LCS Problem Statement: Given two sequences, find the length of longest subsequence present in
 * both of them. A subsequence is a sequence that appears in the same relative order,
 * but not necessarily contiguous. For example, “abc”, “abg”, “bdf”, “aeg”, ‘”acefg”,
 * .. etc are subsequences of “abcdefg”. So a string of length n has
 * 2^n different possible subsequences.
 *
 * @see http://www.geeksforgeeks.org/dynamic-programming-set-4-longest-common-subsequence/
 *
 * It is a classic computer science problem, the basis of diff
 * (a file comparison program that outputs the differences between two files),
 * and has applications in bioinformatics.
 *
 * Examples:
 * LCS for input Sequences “ABCDGH” and “AEDFHR” is “ADH” of length 3.
 * LCS for input Sequences “AGGTAB” and “GXTXAYB” is “GTAB” of length 4.
 *
 */

/**
 * Generates the powerSet of a given string
 * @method powerSet
 * @param {string} str
 * @returns {Array<string>}
 */
var powerSet = function(str) {
  var strArr = str.split('');
  var subStrings = [];

  var recurse = function(subStr, remain) {
    var currSubstr = subStr;
    if (remain.length === 0) {
       return;
    }
    for (var i = 0; i < remain.length; i++) {
      currSubstr.push(remain[i]);
      subStrings.push(currSubstr.join(''));
      recurse(currSubstr, remain.slice(i + 1));
      currSubstr.pop();
    }
  };
  recurse([], strArr);
  return subStrings;
};

/**
 * Naive solution of least common subsequence of two strings
 * Generates powersets for both strings and compares the sets
 * to find the longest common string.
 * @param {string} str1
 * @param {string} str2
 * @return {stinrg}
 */
var lcsNaive = function(str1, str2) {
   var subs1 = powerSet(str1);
   var subs2 = powerSet(str2);
   var max = '';
   subs1.forEach(function(subStr1) {
     subs2.forEach(function(subStr2) {
        if (subStr1 === subStr2 &&
            subStr1.length > max.length) {
          max = subStr1;
        }
     });
   });
   return max;
};

