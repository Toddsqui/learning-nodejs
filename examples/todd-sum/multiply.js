module.exports = function mult(a, b) {
  var originalValue = a;
  for (var i = 1; i < b; i++) {
    a += originalValue;
  }
  return a;
}
