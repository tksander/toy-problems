// Write a function for doing an in-place ↴ shuffle of a list.
// The shuffle must be "uniform," meaning each item in the original list must have the same probability of ending up in each spot in the final list.

// Assume that you have a function get_random(floor, ceiling) for getting a random integer that is >= floor and <= ceiling.
/**
 * @method shuffleInPlace
 * @see 'https://blog.codinghorror.com/the-danger-of-naivete/'
 */
var shuffleInPlace = function(array) {
  for (var i = 0; i < array.length; i++) {
     var randomIndex = get_random(0, i);
     var tempStore = array[randomIndex];
     array[randomIndex] = array[i];
     array[i] = tempStore;
  }
  return array;
}

var get_random = function(floor, ceiling) {
    var range = ceiling - floor;
    return Math.floor((Math.random() * range));
}
