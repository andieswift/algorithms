function secondLargest(arr) {
  let largest = Math.max(...arr);
  let index = arr.indexOf(largest);
  arr.splice(index, 1);
  return Math.max(...arr);
}
