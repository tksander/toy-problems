/**
 *
 * You are given a map in form of a two-dimensional integer grid where 1 represents
 * land and 0 represents water. Grid cells are connected horizontally/vertically
 * (not diagonally). The grid is completely surrounded by water, and there is
 * exactly one island (i.e., one or more connected land cells).
 * The island doesn't have "lakes" (water inside that isn't connected to the
 * water around the island). One cell is a square with side length 1.
 * The grid is rectangular, width and height don't exceed 100.
 * Determine the perimeter of the island.
 *
 */

var arr = [[0,1,0,0],
           [1,1,1,0],
           [0,1,0,0],
           [1,1,0,0]]


var islandPerimeter = function(grid) {
  var perimeter = 0;
  for (var i = 0; i < grid.length; i++) {
     for (var j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === 1) {
          perimeter += 4 - numberConnected(i, j, grid);
        };
    }
   }
  return perimeter;
  }

var numberConnected = function(row, col, grid) {
   var gridExtent = grid.length - 1;
   var numberSubtract = 0;
   // up
   if (row - 1 >= 0 && grid[row - 1][col] === 1) {
     numberSubtract++;
   }
   // down
   if (row + 1 <= gridExtent && grid[row  + 1][col] === 1) {
     numberSubtract++;
   }
   // right
   if (col + 1 <= gridExtent && grid[row][col + 1] === 1) {
     numberSubtract++;
   }
   // left
   if (col - 1 >= 0 && grid[row][col - 1] === 1) {
     numberSubtract++;
   }
   return numberSubtract;
}
// recursively walk through grid
