describe("Invert Binary Search Tree", function() {

  /*
   * @constructor
   * @param {Number}
   */
  function TreeNode(val) {
      this.val = val || 0;
      this.left = this.right = null;
  }

  /*
   * Insertion
   * Average Time Complexity: Time O(log n)
   * @method insert
   * @return {Object}
   */
  TreeNode.prototype.insert = function(val) {
    if(val === this.val) {
        return;
    }

    if (val < this.val) {
      if (this.left === null) {
          this.left = new TreeNode(val)
      } else {
       this.left.insert(val)
      }
    } else {
        if (this.right === null) {
           this.right = new TreeNode(val) 
        } else {
          this.right.insert(val)
        }
    }
  }

  var root;
  beforeEach(function() {
    root = new TreeNode(4);
    root.insert(2)
    root.insert(7)
    root.insert(1)
    root.insert(3)
    root.insert(6)
    root.insert(9)
  })
  describe("Function: invertTree", function() {
    var result = invertTree(root);
    expect(result.left.val).toEqual(7)
  })
})

