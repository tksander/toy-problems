function myFunction(arg) {

  var array = arg.split("")
  var arrayLength = array.length

  for(var i = 0; i < arrayLength / 2; i++)  {
    var temp = array[arrayLength - i];
    array[arrayLength - i] = array[i];
    array[i] = temp;
  } 
  return array.join("");
}

console.log(myFunction('test input'));
