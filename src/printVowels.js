/* eslint-disable no-console */
/* eslint-disable no-plusplus */
function printVowels(txt) {
  const vowels = ['a', 'e', 'i', 'u', 'o'];
  const txtSplited = txt.split('');
  const txtVowels = [];
  for (let i = 0; i < txtSplited.length; i++) {
    if (vowels.includes(txtSplited[i])) {
      txtVowels.push(txtSplited[i]);
    }
  } console.log(txtVowels.join(''));
}

printVowels('hello world'); // eoo
printVowels('kangaroo'); // aaoo
printVowels('cheeseburger'); // eeeue
printVowels('rhythm'); //
