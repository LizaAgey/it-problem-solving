// JavaScript Algorithms and Data Structures FREECODECAMP

//-----TASK
//Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.
function randomRange(myMin, myMax) {

    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

}

//-----TASK
parseInt(string, radix);
const a = parseInt("11", 2);

//Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.
function convertToInteger(str) {
    return parseInt(str, 2)
}

convertToInteger("10011");