//Write a function that calculates the GCD (Greatest Common Divisor) of two numbers recursively.
function gcd(a, b) {
  if (b == 0) return a;
  return gcd(b, a % b);
}
