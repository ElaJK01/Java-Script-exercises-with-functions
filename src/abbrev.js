/* eslint-disable no-console */
function abbrev(txt) {
  if (txt.length >= 3) {
    return `${txt.slice(0, 3)} ${txt.length}`;
  }
  return txt.slice(0, txt.length) + ' '.repeat(3 - txt.slice(0, txt.length).length) + txt.length;
}

console.log(abbrev('Nice')); // 'Nic 4'
console.log(abbrev('I am your father')); // 'I a 16'
console.log(abbrev('Supercalifragilisticexpialidocious')); // 'Sup 34'
console.log(abbrev('!')); // '!   1'
console.log(abbrev('Yo')); // 'Yo  2'
