​
function subDigits(number){
    if (number < 0) {
        return "Argument Error"
        
    } else {
        if (Number.isInteger(number)){
            const numberTostring = String(number)
            
            for ( let i = 0; i < numberTostring.length; i++){
                               
                number -= Number(numberTostring[i])
            } return number

        } else {
            return "To nie jest liczba całkowita"
        }

    } 
}

​​
console.log(subDigits(50))
console.log(subDigits(-20))
console.log(subDigits(3.5))
console.log(subDigits(100))
