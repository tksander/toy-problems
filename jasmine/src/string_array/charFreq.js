/**
 *
 * Given a string, sort it in decreasing order based on the frequency of characters.
 *
 * Example 1:
 *
 * Input:
 * "tree"
 *
 * Output:
 * "eert"
 *
 * Explanation:
 * 'e' appears twice while 'r' and 't' both appear once.
 * So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
 * Example 2:
 *
 * Input:
 * "cccaaa"
 *
 * Output:
 * "cccaaa"
 *
 * Explanation:
 * Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
 * Note that "cacaca" is incorrect, as the same characters must be together.
 * Example 3:
 *
 * Input:
 * "Aabb"
 *
 * Output:
 * "bbAa"
 *
 * Explanation:
 * "bbaA" is also a valid answer, but "Aabb" is incorrect.
 * Note that 'A' and 'a' are treated as two different characters.
 */

/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 * Sorts a string in decreasing order based on frequency of chars
 * @method charFreq
 */
var charFreq = function(str) {
  var table = {};
  var strArr = str.split('');
  for (var i = 0; i < strArr.length; i++) {
    if (!table[strArr[i]]) {
       table[strArr[i]] = 1;
    } else {
    debugger
      table[strArr[i]] = ++table[strArr[i]];
    }
  }
  var freqArr = convertHash(table);
  return arrToString(freqArr);
};

var convertHash = function(table) {
  debugger
   var freqarr = [];
   for (var prop in table)  {
     if (!freqarr[table[prop]]) {
        freqarr[table[prop]] = [prop];
     } else {
        freqarr[table[prop]].push(prop);
     }
   }
   return freqarr;
};

var arrToString = function(arr) {
  debugger
  var strArr = [];
  for (var i = arr.length - 1; i >= 1; i--) {
    if (arr[i]) {
      for (var y = 0; y < arr[i].length; y++) {
        for (var z = 0; z < i; z++) {
            strArr.push(arr[i][y])
        }
      }
    }
  }
  return strArr.join('');
};

/**
 * Sorts a string in decreasing order based on frequency of chars
 * @method charFreq
 */
var charFreq = function(str) {
  // iterate across string
};
