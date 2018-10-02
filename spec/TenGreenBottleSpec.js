describe("TenGreenBottle", () => {
  var song, verse1, verse2, verse3

  beforeEach(function () {
    song = new TenGreenBottle(3)
  });

  describe("#veresLyrics", function() {
    it("returns ten green bottle", () => {
      expect(song.verseLyrics(10)).toEqual("Ten green bottles hanging on the wall\n" +
                                    "Ten green bottles hanging on the wall\n" +
                                    "And if one green bottle should accidentally fall\n" +
                                    "There'll be nine green bottles hanging on the wall\n")
    });

    it("returns second to last green bottle", () => {
      expect(song.verseLyrics(2)).toEqual("Two green bottles hanging on the wall\n" +
                                    "Two green bottles hanging on the wall\n" +
                                    "And if one green bottle should accidentally fall\n" +
                                    "There'll be one green bottle hanging on the wall\n")
    });

    it("returns last green bottle", () => {
      expect(song.verseLyrics(1)).toEqual("One green bottle hanging on the wall\n" +
                                    "One green bottle hanging on the wall\n" +
                                    "And if one green bottle should accidentally fall\n" +
                                    "There'll be zero green bottles hanging on the wall\n")
    });
  });

  describe("#sing", function() {
    verse1 = "Three green bottles hanging on the wall\n" +
             "Three green bottles hanging on the wall\n" +
             "And if one green bottle should accidentally fall\n" +
             "There'll be two green bottles hanging on the wall\n"
    verse2 = "Two green bottles hanging on the wall\n" +
             "Two green bottles hanging on the wall\n" +
             "And if one green bottle should accidentally fall\n" +
             "There'll be one green bottle hanging on the wall\n"
    verse3 = "One green bottle hanging on the wall\n" +
             "One green bottle hanging on the wall\n" +
             "And if one green bottle should accidentally fall\n" +
             "There'll be zero green bottles hanging on the wall\n"

    it("returns the lyrics of the whole song", () => {
      var expected_output = [verse1, verse2, verse3].join('\n')
      expect(song.sing()).toEqual(expected_output)
    })
  })
});
