function sumMissingNumbers(arr) {
  let max = Math.max.apply(Math, arr);
  let min = Math.min.apply(Math, arr);
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  let arrSum = arr.reduce((a, c) => a + c);
  return sum - arrSum;
}
