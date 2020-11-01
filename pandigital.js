//A pandigital number contains all digits (0-9) at least once. Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.
function isPandigital(num) {
  return new Set(num.toString().split('')).size === 10
}
