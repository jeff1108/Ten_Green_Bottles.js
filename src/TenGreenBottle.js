(function(exports) {
  function TenGreenBottle(num) {
}

  TenGreenBottle.prototype.sing = function(num) {
    firstline = `${numberToWords.toWords(num).capitalize()} green bottles hanging on the wall\n`
    secondline = "And if one green bottle should accidentally fall\n"
    lastline = `There'll be ${numberToWords.toWords(num - 1)} green bottles hanging on the wall`
    return firstline + firstline + secondline + lastline
  }

  // function last_lyrics(num) {
  //   firstline = `${numberToWords.toWords(num).capitalize()} green bottle hanging on the wall\n`
  //   secondline = `${numberToWords.toWords(num).capitalize()} green bottle hanging on the wall\n`
  //   thirdline = "And if one green bottle should accidentally fall\n"
  //   lastline = `There'll be ${numberToWords.toWords(num - 1)} green bottle hanging on the wall`
  //   return firstline + secondline + lastline
  // }
  //
  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }

  exports.TenGreenBottle = TenGreenBottle;
})(this);
