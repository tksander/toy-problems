/**
 * Problem prompt:
 * You are given a map in form of a two-dimensional integer grid where 1 represents
 * land and 0 represents water. Grid cells are connected horizontally/vertically
 * (not diagonally). The grid is completely surrounded by water, and there is
 * exactly one island (i.e., one or more connected land cells).
 * The island doesn't have "lakes" (water inside that isn't connected to the
 * water around the island). One cell is a square with side length 1.
 * The grid is rectangular, width and height don't exceed 100.
 * Determine the perimeter of the island.
 * @see https://leetcode.com/problems/island-perimeter/
 */

/**
 * Caculate number of sides on island
 * @method islandPerimeter
 * @param { number[][] } grid - grid representing islands
 * @returns { number } perimeter - Perimeter of island
 */
var islandPerimeter = function(grid) {
  var perimeter = 0;
  for (var i = 0; i < grid.length; i++) {
     for (var j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === 1) {
          perimeter += 4 - numberConnected(i, j, grid);
        }
    }
   }
  return perimeter;
  };

/**
 * Helper function, checks how many sides a piece of land
 * is connected with other land
 * @method numberConnected
 * @param { number } row
 * @param { number } col
 * @param { number[][] } grid
 * @returns number
 */
var numberConnected = function(row, col, grid) {
   var colExtent = grid[0].length - 1;
   var rowExtent = grid.length - 1;
   var numberSubtract = 0;
   // up
   if (row - 1 >= 0 && grid[row - 1][col] === 1) {
     numberSubtract++;
   }
   // down
   if (row + 1 <= rowExtent && grid[row  + 1][col] === 1) {
     numberSubtract++;
   }
   // right
   if (col + 1 <= colExtent && grid[row][col + 1] === 1) {
     numberSubtract++;
   }
   // left
   if (col - 1 >= 0 && grid[row][col - 1] === 1) {
     numberSubtract++;
   }
   return numberSubtract;
};
// recursively walk through grid
