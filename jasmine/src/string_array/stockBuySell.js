/**
 * @see http://www.geeksforgeeks.org/stock-buy-sell/
 *
 * Stock Buy Sell to Maximize Profit
 *
 * The cost of a stock on each day is given in an array, find the max profit that you can make by
 * buying and selling in those days. For example, if the given array is
 * {100, 180, 260, 310, 40, 535, 695}, the maximum profit can earned by buying on day 0,
 * selling on day 3. Again buy on day 4 and sell on day 6.
 * If the given array of prices is sorted in decreasing order, then profit cannot be earned at all.
 *
 */


/*
 * Solve for buy and sell only once
 */
var maxProfit = function(arr) {
    var min = arr[0]
    var minIndex = 0;

    var max = arr[0]
    var maxIndex = null;

    var bestDiff = 0;
    var buySells = []
    var buySell = {}

    arr.forEach(function(price, index) {
      if (price < min) {
          buySells.push(Object.assign({}, buySell))
          max = price
          maxIndex = index
          min = price
          minIndex = index
      }
      if (price > max) {
          max = price
          maxIndex = index
      }
      var tempBestDiff = max - min
      if (tempBestDiff > bestDiff) {
         buySell.buy = minIndex
         buySell.sell = maxIndex
         buySell.maxProfit = tempBestDiff
         bestDiff = tempBestDiff
      }
    })
    buySells.push(buySell)
  return buySells
}
var testArr = [100, 180, 260, 310, 40, 535, 695]


