describe("TenGreenBottle", () => {
  var song

  beforeEach(function () {
    song = new TenGreenBottle(10)
  });

  it("returns ten green bottle", () => {
    expect(song.verseThreeFromLastOnwardLyrics(10)).toEqual("Ten green bottles hanging on the wall\n" +
                                  "Ten green bottles hanging on the wall\n" +
                                  "And if one green bottle should accidentally fall\n" +
                                  "There'll be nine green bottles hanging on the wall")
  });

  it("returns second to last green bottle", () => {
    expect(song.verseTwoFromLastOnwardLyrics(2)).toEqual("Two green bottles hanging on the wall\n" +
                                  "Two green bottles hanging on the wall\n" +
                                  "And if one green bottle should accidentally fall\n" +
                                  "There'll be one green bottle hanging on the wall")
  });

  it("returns last green bottle", () => {
    expect(song.verseLastOnwardLyrics(1)).toEqual("One green bottle hanging on the wall\n" +
                                  "One green bottle hanging on the wall\n" +
                                  "And if one green bottle should accidentally fall\n" +
                                  "There'll be zero green bottles hanging on the wall")
  });
});
