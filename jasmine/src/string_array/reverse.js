function reverseString(inputString) {

  var array = inputString.split('')
  var arrayLength = array.length

  for(var i = 0; i < arrayLength / 2; i++)  {
    var temp = array[arrayLength - i];
    array[arrayLength - i] = array[i];
    array[i] = temp;
  }
  return array.join("");
}

