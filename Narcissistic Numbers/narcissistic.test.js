const isNarcissistic = require("./narcissistic");

test("is Narcissistic should return true when passed 153", function () {
  const numIsNarcissistic = isNarcissistic(153);
  expect(numIsNarcissistic).toBe(true);
});
test("is Narcissistic should return true when passed 7", function () {
  const numIsNarcissistic = isNarcissistic(7);
  expect(numIsNarcissistic).toBe(true);
});

test("is Narcissistic should return false when passed 1652", function () {
  const numIsNarcissistic = isNarcissistic(1652);
  expect(numIsNarcissistic).toBe(false);
});

test("is Narcissistic should return false when passed 122", function () {
  const numIsNarcissistic = isNarcissistic(122);
  expect(numIsNarcissistic).toBe(false);
});

test("is Narcissistic should return false when passed 487", function () {
  const numIsNarcissistic = isNarcissistic(487);
  expect(numIsNarcissistic).toBe(false);
});
