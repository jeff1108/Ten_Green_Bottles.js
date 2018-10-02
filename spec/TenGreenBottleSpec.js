describe("TenGreenBottle", () => {
  var song

  beforeEach(function () {
    song = new TenGreenBottle(10)
  });

  it("returns ten green bottle", () => {
    expect(song.verseThreeOnwardLyrics(10)).toEqual("Ten green bottles hanging on the wall\n" +
                                  "Ten green bottles hanging on the wall\n" +
                                  "And if one green bottle should accidentally fall\n" +
                                  "There'll be nine green bottles hanging on the wall")
  });
});
