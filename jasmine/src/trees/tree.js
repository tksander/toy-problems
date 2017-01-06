/**
 * Tree Data Structure
 */

var Tree = function(val) {
  this.root = new Node(val);
}

var Node = function(val) {
  this.val = val;
  this.children = [];
  this.parent = null;
}

Tree.prototype.add = function() {
}
