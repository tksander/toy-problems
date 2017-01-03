describe("islandPerimeter", function() {

  beforeEach(function() {
  })

  describe("islandPerimeter - single island", function() {
    it("should correctly count an island of 1 permimeter", function() {
      var grid = [[1,0],[0,0]];
      var perimeterNum = islandPerimeter(grid);
      expect(perimeterNum).toEqual(4);
    });
  });

  describe("islandPerimeter - multiple side island", function() {
    it("should correctly count an island of multiple sides", function() {
      var grid = [[0,1,0,0],
                 [1,1,1,0],
                 [0,1,0,0],
                 [1,1,0,0]];
      var perimeterNum = islandPerimeter(grid);
      expect(perimeterNum).toEqual(16);
    });
  });
});
