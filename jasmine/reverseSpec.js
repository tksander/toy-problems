beforeEach(function() {
  var testArray = [1,2,3,4,5];
});

describe("Reverse array in place", function() {
  it("reverse an array of length 3", function() {
   var testArray = [1,2,3];
   expect(reverseArray(testArray)).toEqual([3,2,1]);
  });
});
