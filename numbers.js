// CODEWARS

//-----TASK
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each.
// If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
// Write a function that will take the number of petals of each flower and return true if they are in love and false if
// they aren't.

function lovefunc(flower1, flower2) {
    if (flower1 % 2 == 0 & flower2 % 2 !== 0) {
        return true
    }
    if (flower1 % 2 !== 0 & flower2 % 2 == 0) {
        return true
    }
    return false
}


// ---from Best practice:
// function lovefunc(flower1, flower2){
//     return flower1 % 2 !== flower2 % 2;
// }

//-----TASK
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or
// exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

function validatePIN(pin) {

    let array = pin.split("")
    if (array.every(element => Number.isInteger(+element))) {
        return pin.length === 4 || pin.length === 6
    } else {
        return false
    }
}

//CODEWARS
//-----TASK
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.//
//Examples: Input: 42145 Output: 54421

function descendingOrder(n){
    return Number(n.toString().split("").map(n=> +n).sort((a,b)=>b-a).join(""))
}
//best practice:
// function descendingOrder(n){
//     return parseInt(String(n).split('').sort().reverse().join(''))
// }