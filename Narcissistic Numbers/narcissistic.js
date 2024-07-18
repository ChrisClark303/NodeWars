function isNarcissistic(value) {
  const digits = value.toString().split("");
  const powerOf = digits.length;
  const poweredValue = digits.reduce((x, y) => {
    return x + Math.pow(y, powerOf);
  }, 0);
  return poweredValue === value;
}

module.exports = isNarcissistic;
