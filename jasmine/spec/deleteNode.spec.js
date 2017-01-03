describe("deleteNode", function() {
  var list;

  beforeEach(function() {
    list = new SinglyList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);
  })

  describe("deleteNode", function() {
    it("should remove node from singly linked list", function() {
      var three = list.searchNodeAt(3);
      deleteNode(three);
      var two = list.searchNodeAt(2);
      expect(two.next.val).toEqual(4);
    });
  });
});
