/** Write a function reverseWords() that takes a string message and reverses the order of the words in-place 
*
* var message = 'find you will pain only go you recordings security the into if';
* reverseWords(message);
* returns: 'if into the security recordings you go only pain will you find'
*/


/**
 * @method reverseWords
 * @param  { String } message
 * @returns { String } reversed string of words
 */
var reverseWords = function(message) {
  var wordArray = message.split(" ");
  var messageLength = wordArray.length - 1;
  for (var i = 0; i < (wordArray.length / 2); i++) {
    var temp = wordArray[i];
    wordArray[i] = wordArray[messageLength - i];
    wordArray[messageLength - i] = temp;

  }
  return wordArray.join(" ");
}
  

