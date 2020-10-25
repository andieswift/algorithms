//For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4.
//oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

function oddishOrEvenish(num) {
  num = num + '';
  let arr = num.split('');
  let sum = arr.reduce((a, c) => { return (parseInt(a) + parseInt(c)) });
  return sum % 2 == 0 ? 'Evenish' : 'Oddish';
}
