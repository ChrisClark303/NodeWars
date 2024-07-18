const isNarcissistic = require("./narcissistic.js");

function narcissisticRequestHandler(query) {
  const number = query.number;
  if (number === undefined) {
    return "";
  }
  const numAsNum = Number(number);
  const numIsNarcissistic = isNarcissistic(numAsNum);
  console.log(number + " = " + numIsNarcissistic);

  return number + " is " + (numIsNarcissistic ? "" : "not ") + "narcissistic.";
}

module.exports = narcissisticRequestHandler;
