/**
 * @see https://leetcode.com/problems/hamming-distance/
 *
 * Hamming distance between two integers is the number of positions at which the corresponding bits are different.
 *
 * Given two integers x and y, calculate the Hamming distance.
 *
 * Note:
 * 0 ≤ x, y < 231.
 *
 * Example:
 *
 * Input: x = 1, y = 4
 *
 * Output: 2
 *
 * Explanation:
 * 1   (0 0 0 1)
 * 4   (0 1 0 0)
 *        ↑   ↑
 *
 * The above arrows point to positions where the corresponding bits are different.
 */

var hammingDistance = function(x, y) {
  var binary = convertToBinary(x,y);
  x = binary.x
  y = binary.y

  var diff = 0;
  // iterate over array
  for (var i = 0; i < x.length; i++) {
    // count differences
    if (x[i] !== y[i]) {
      diff++;
    }
  }
  return diff;
}

var convertToBinary = function(x, y) {
  var xBinary = (x).toString(2);
  var yBinary = (y).toString(2);
  if (xBinary.length > yBinary.length) {
   var diff = xBinary.length - yBinary.length;
   var yArr = yBinary.split("")
   for (var i = 0; i < diff; i++) {
     yArr.unshift("0");
     yBinary = yArr.join("");
   }
  } else {
   var diff = yBinary.length - xBinary.length;
   var xArr = xBinary.split("")
   for (var i = 0; i < diff; i++) {
     xArr.unshift("0");
     xBinary = xArr.join("");
   }
  }
  return {
          x: xBinary,
          y: yBinary
         }
}

console.log(`Hamming Distance is: ${hammingDistance(1,4)}`);

