/* eslint-disable no-console */
/* eslint-disable no-plusplus */
function subDigits(number) {
  if (number < 0) {
    return new Error('Argument Error');
  }
  if (Number.isInteger(number)) {
    const numberTostring = String(number);

    for (let i = 0; i < numberTostring.length; i++) {
      // eslint-disable-next-line no-param-reassign
      number -= Number(numberTostring[i]);
    } return number;
  }
  return 'To nie jest liczba całkowita';
}

console.log(subDigits(12)); // 9
console.log(subDigits(4000000)); // 3999996
console.log(subDigits(0)); // 0
console.log(subDigits(451)); // 441
console.log(subDigits(-12)); // 'Argument Error'
