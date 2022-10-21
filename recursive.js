// JavaScript Algorithms and Data Structures

//-----TASK
// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of
// an array arr.

function sum(arr, n) {

    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
}

//-----TASK
// We have defined a function called countdown with one parameter (n). The function should use
// recursion to return an array containing the integers n through 1 based on the n parameter.
// If the function is called with a number less than 1, the function should return an empty array.
// For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1].
// Your function must use recursion by calling itself and must not use loops of any kind.
function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countdown(n - 1);
        countArray.unshift(n);

        return countArray;
    }
}

//-----TASK
// We have defined a function named rangeOfNumbers with two parameters.
// The function should return an array of integers which begins with a number represented
// by the startNum parameter and ends with a number represented by the endNum parameter.
// The starting number will always be less than or equal to the ending number.
// Your function must use recursion by calling itself and not use loops of any kind.
// It should also work for cases where both startNum and endNum are the same.
function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) {
        return [startNum];
    } else {

        let numberArr = rangeOfNumbers(startNum, endNum - 1);
        numberArr.push(endNum);

        console.log(numberArr)
        return numberArr;
    }
};
rangeOfNumbers(6, 9)