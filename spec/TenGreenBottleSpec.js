describe("TenGreenBottle", () => {
  var song

  beforeEach(function () {
    song = new TenGreenBottle()
  });

  it("returns ten green bottle", () => {
    expect(song.sing(10)).toEqual("Ten green bottles hanging on the wall\n" +
                                  "Ten green bottles hanging on the wall\n" +
                                  "And if one green bottle should accidentally fall\n" +
                                  "There'll be nine green bottles hanging on the wall")
  });

  // it("returns one green bottle", () => {
  //   expect(song.sing(1)).toEqual("One green bottle hanging on the wall\n" +
  //                                     "One green bottle hanging on the wall\n" +
  //                                     "And if one green bottle should accidentally fall\n" +
  //                                     "There'll be zero green bottles hanging on the wall")
  // });
});
