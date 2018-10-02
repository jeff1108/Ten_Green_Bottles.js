(function(exports) {
  function TenGreenBottle(num) {
    this.num = num;
    // this.counter = counter;
}

  TenGreenBottle.prototype.verseThreeOnwardLyrics = function(num) {
    return _firstSecondLinePlural(this.num) + _thirdLinePlural() + _lastLinePlural(this.num)
  }

  function _firstSecondLinePlural(num) {
    var line = `${numberToWords.toWords(num).capitalize()} green bottles hanging on the wall\n`
    return [line, line].join('')
  }

  function _thirdLinePlural() {
    return "And if one green bottle should accidentally fall\n"
  }

  function _lastLinePlural(num) {
    return `There'll be ${numberToWords.toWords(num - 1)} green bottles hanging on the wall`
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
