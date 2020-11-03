//Create a function that will find all primes below a given number. Return the result as an array.
function primesBelowNum(n) {
  let arr = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) arr.push(i);
  }
  return arr;
}
const isPrime = num => {
  for (let i = 2; i < num; i++)
    if (num % i === 0) return false;
  return num > 1;
}
