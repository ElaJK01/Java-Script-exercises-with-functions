

function abbrev(txt){
    if (txt.length >= 3) {
        newTxt = txt.slice(0, 3)+' '+txt.length
    } else {
        newTxt = txt.slice(0, txt.length)+' '.repeat(3 - txt.slice(0, txt.length).length)+txt.length
    } return newTxt

        
}


console.log(abbrev("Nice"))                               // 'Nic 4'
console.log(abbrev("I am your father"))                   // 'I a 16'
console.log(abbrev("Supercalifragilisticexpialidocious")) // 'Sup 34'
console.log(abbrev("!"))                                  // '!   1'
console.log(abbrev("Yo"))                                 // 'Yo  2'
