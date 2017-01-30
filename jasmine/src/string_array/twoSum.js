/**
 * @see  https://leetcode.com/problems/two-sum/
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 *
 *   You may assume that each input would have exactly one solution.
 *
 *   Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 *
 *   Because nums[0] + nums[1] = 2 + 7 = 9,
 *   return [0, 1].
 */

/**
* Naive solution
* Time Complexity O(n^2)
* Space Complexity: Constant
*/
var twoSum = function(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i  + 1; j < nums.length; j++)  {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  console.error("No target found")
  return;
};


/**
* Hash table solution
* Time Complexity O(n)
* Space Complexity: O(n)
*/
var twoSum = function(nums, target) {
  var hash = {};
 for (var i = 0; i < nums.length; i++) {
  hash[nums[i]] = i
   var complement = target - nums[i]
   if (hash.hasOwnProperty(complement)) {
     return [i, hash[complement]];
   }
 }
};

console.log(twoSum([15,7,11,2], 9));
