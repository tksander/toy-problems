/**
 * Reverse an array without affecting special characters
 * @see http://www.geeksforgeeks.org/reverse-an-array-without-affecting-special-characters/
 *
 * Given a string, that contains special character together with alphabets
 * (‘a’ to ‘z’ and ‘A’ to ‘Z’), reverse the string in a way that special
 * characters are not affected.
 *
 * Examples:
 *
 * Input:   str = "a,b$c"
 * Output:  str = "c,b$a"
 * Note that $ and , are not moved anywhere.
 * Only subsequence "abc" is reversed
 *
 * Input:   str = "Ab,c,de!$"
 * Output:  str = "ed,c,bA!$"
 */

/**
 * Recursively reverse string
 * @method reverseArraySpecial
 * @param {string} - str
 */
var reverseArraySpecial = function(str) {
  if (str.length === 0) {
      return str;
  }
  return reverseArraySpecial(str.substring(1)) + str.charAt(0);
};

/**
 * Iteratively reverse string maintaining the position of speical
 * characters.
 * @method reverseSpecial
 * @param {string} - str
 * @return {string}
 */
var reverseSpecial = function(str) {
    var start = 0;
    var end = str.length - 1;
    var strArr = Array.prototype.slice.apply(str);

    while (start !== end) {
      var startAlpha = (/^[A-Za-z]+$/).test(strArr[start]);
      var endAlpha = (/^[A-Za-z]+$/).test(strArr[end]);
      if (startAlpha && endAlpha) {
          var temp = strArr[end];
          strArr[end] = strArr[start];
          strArr[start] = temp;
          start++;
          end--;
      }
      if (!startAlpha) {
          start++;
      }
      if (!endAlpha) {
          end--;
      }
    }
    return strArr.join("");
};
