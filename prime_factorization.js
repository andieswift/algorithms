function primeFactorize(num) {
  let prime = [];
  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      prime.push(i);
      num = num / i;
    }
  }
  if (num > 1) prime.push(num);
  return prime;
}
