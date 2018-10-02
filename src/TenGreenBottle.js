(function(exports) {
  function TenGreenBottle(num) {
    if(num < 0) {
      throw new Error("number needs to be greater than 0")
    }
    this.num = num;
}
  TenGreenBottle.prototype.sing = function() {
    var lyrics = []
    for (var i = this.num; i > 0; i--){
      lyrics.push(this.verseLyrics(i))
    }
    return lyrics.join('\n');
  }

  TenGreenBottle.prototype.verseLyrics = function(num) {
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
    return `There'll be ${numberToWords.toWords(num - 1)} green ${word} hanging on the wall\n`
  }

  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }

  exports.TenGreenBottle = TenGreenBottle;
})(this);
