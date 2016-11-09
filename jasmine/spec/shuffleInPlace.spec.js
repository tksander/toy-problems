describe("shuffleInPlace", function() {
  it("should shuffle an array in place", function() {
   var testArr = [1,2,3,4,5];
   expect(shuffleInPlace(testArr)).not.toEqual([1,2,3,4,5]);
  });
});

