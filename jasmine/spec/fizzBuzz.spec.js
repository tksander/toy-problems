describe("FizzBuzz", function() {

  var results15
  beforeEach(function() {
  results15 = [
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "Fizz",
      "7",
      "8",
      "Fizz",
      "Buzz",
      "11",
      "Fizz",
      "13",
      "14",
      "FizzBuzz"
  ]
  });

  describe("FizzBuzz", function() {
    it("should print Fizz, Buzz, and FizzBuzz for n = 15", function() {
      var result = fizzBuzz(15);
      expect(result).toEqual(results15);
    });
  });
});
