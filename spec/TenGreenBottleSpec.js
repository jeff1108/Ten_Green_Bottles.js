describe("TenGreenBottle", () => {
  it("returns ten green bottle", () => {
    expect(TenGreenBottle(10)).toEqual("Ten green bottles hanging on the wall\n" +
                                     "And if one green bottle should accidentally fall\n" +
                                     "There'll be nine green bottles hanging on the wall")
  });
});
