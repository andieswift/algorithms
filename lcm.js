//Write a function that returns the least common multiple (LCM) of two integers.

function lcm(n1, n2) {
  return (n1 * n2) / gcd(n1, n2)

  function gcd(a, b) {
    if (b == 0) return a;
    return gcd(b, a % b);
  }
}
