/**
 * @see http://www.geeksforgeeks.org/dynamic-programming-set-1/
 */

var fibonacci = function(n) {
   if (n <= 1) {
     return n;
   }
   return fibonacci(n - 1) + fibonacci(n - 2);
}

var fibonacciMemoized = function(n) {
   var store = {};
   if (n <= 1) {
     store[n] = n;
   }
   if (!store[n]) {
     store[n] = fibonacci(n - 1) + fibonacci(n - 2);
   }
   return store[n];
 };

var fibonacciTabulated = function(n) {
  var store = {};
  store[0] = 0;
  store[1] = 1;
  for (var i = 2; i <= n; i++) {
      store[i] = store[ i - 1 ] + store[ i - 2 ];
  }
  return store[n];
 };

var fibonacciTabulatedConstant = function(n) {
  var prev = 0;
  var current = 1;
  for (var i = 2; i <= n; i++) {
    var temp = current
    current = prev + current
    prev = temp
  }
  return current
 };
