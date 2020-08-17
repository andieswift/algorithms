/*
Create a function which returns the number of true values there are in an array.

EXAMPLES
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0

NOTES
return 0 if there is no true values

all array items are of the type boolean
*/

function countTrue(arr) {
  let sum = 0;
  arr.map(item => {if(item) sum++});
  return sum;
}

/*
function countTrue(arr) {
  return arr.filter(x => x==true).length
}
*/
