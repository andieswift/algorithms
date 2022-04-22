var rotate = function (nums, k) {

  const length = nums.length;
  //k mod length bc you can rotated it past the length of nums
  const rotate = k % length;
  //splice will cut from the end if start is negative
  const start = -1 * rotate;
  let endArr = nums.splice(start, k);
  const endLength = endArr.length - 1;
  //then add the vals of endArr in reverse order
  for (let i = endLength; i >= 0; i--) {
    nums.unshift(endArr[i])
  }
};
