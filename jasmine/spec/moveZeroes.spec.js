describe("moveZeroes", function() {
  it("should move all zeros to the end of the array", function() {
   var testArr = [1, 0, 1, 0, 3, 12];
   expect(moveZeroes(testArr)).toEqual([1,1,3,12,0,0]);
  });
});
