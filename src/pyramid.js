/* eslint-disable no-console */
function pyramid(n) {
  if (n <= 0 || n % 2 === 0) {
    throw new Error(`Podana liczba ${n} jest niewłaściwa!`);
  } else {
    let str = '';
    for (let i = 1; i <= n; i += 2) {
      str = `${str + ' '.repeat((n - i) / 2) + '#'.repeat(i)}\n`;
    } return str;
  }
}

console.log(pyramid(9));
//     #
//    ###
//   #####
//  #######
// #########

console.log(pyramid(1));
// #

console.log(pyramid(5));
//   #
//  ###
// #####

console.log(pyramid(-2));

console.log(pyramid(4));
