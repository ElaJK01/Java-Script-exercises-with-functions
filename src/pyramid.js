
function pyramid(n){
    if (n <=0 || n%2 == 0){
        console.log('Podana liczba jest niewłaściwa!')
    } else {
     
        
        for (let i=1; i<=n; i= i+2){
            console.log(" ".repeat((n-i)/2)+"#".repeat(i))
            
        } 
    }
}

pyramid(9)
//     #
//    ###
//   #####
//  #######
// #########

pyramid(1)
// #
 
pyramid(5)
//   #
//  ###
// #####

pyramid(-2)

pyramid(4)

pyramid(11)
