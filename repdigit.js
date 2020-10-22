//A repdigit is a positive number composed out of the same digit.
//Create a function that takes an integer and returns whether it's a repdigit or not.
function isRepdigit(num) {
  let set = new Set(num.toString.spit('');)
  return set.size == 1
}
