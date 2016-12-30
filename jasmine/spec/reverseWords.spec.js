describe("reverseWords", function() {

  beforeEach(function() {
  });

  describe("ReverseWords", function() {
    it("should reverse a string of words", function() {
      var correctResult = 'if into the security recordings you go only pain will you find'
    var message = 'find you will pain only go you recordings security the into if';
      var result = reverseWords(message);
      expect(result).toEqual(correctResult);
    });
  });
});
