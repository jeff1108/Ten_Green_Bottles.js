function TenGreenBottle(num) {
  firstline = `${numberToWords.toWords(num).capitalize()} green bottles hanging on the wall\n`
  secondline = "And if one green bottle should accidentally fall\n"
  lastline = `There'll be ${numberToWords.toWords(num - 1)} green bottles hanging on the wall`
  return firstline + secondline + lastline
}


String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}
