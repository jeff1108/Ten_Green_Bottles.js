(function(exports) {
  function TenGreenBottle(num) {
    this.num = num;
    // this.counter = counter;
}

  TenGreenBottle.prototype.verseThreeFromLastOnwardLyrics = function(num) {
    if (num < 3) {
      throw new Error("verse needs to be thrid from last")
    }
    return _firstSecondLine(num) + _thirdLine() + _lastLine(num)
  }

  TenGreenBottle.prototype.verseTwoFromLastOnwardLyrics = function(num) {
    return _firstSecondLine(num) + _thirdLine() + _lastLine(num)
  }

  TenGreenBottle.prototype.verseLastOnwardLyrics = function(num) {
    return _firstSecondLine(num) + _thirdLine() + _lastLine(num)
  }

  function _firstSecondLine(num) {
    var word
    num == 1 ? word = "bottle" : word = "bottles"
    var line = `${numberToWords.toWords(num).capitalize()} green ${word} hanging on the wall\n`
    return [line, line].join('')
  }

  function _thirdLine() {
    return "And if one green bottle should accidentally fall\n"
  }

  function _lastLine(num) {
    var word
    num - 1 == 1 ? word = "bottle" : word = "bottles"
    return `There'll be ${numberToWords.toWords(num - 1)} green ${word} hanging on the wall`
  }

  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }

  exports.TenGreenBottle = TenGreenBottle;
})(this);
