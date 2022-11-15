// JavaScript Algorithms and Data Structures FREECODECAMP

//-----TASK
// The function should check if name is an actual contact's firstName and the given property (prop) is
// a property of that contact.
// If both are true, then return the "value" of that property.
// Setup
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {

    let objectWithName

    contacts.forEach(element => {
        if (element["firstName"] === name) {
            objectWithName = element
        }
    })

    if (!objectWithName) {
        return "No such contact"
    }

    if (objectWithName.hasOwnProperty(prop)) {
        return objectWithName[prop]
    } else {
        return "No such property"
    }
}

lookUpProfile("Akira", "likes");

//-----TASK
//Copy all contents of arr1 into another array arr2 using the spread operator.
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];

console.log(arr2);

//-----TASK
// Use destructuring assignment to swap the values of a and b so that a receives
// the value stored in b, and b receives the value stored in a.
let a = 8, b = 6;
[a, b] = [b, a]

const [d, f,,, k] = [1, 2, 3, 4, 5, 6];

//-----TASK
// Use destructuring assignment with the rest parameter to perform an effective Array.prototype.slice()
// so that arr is a sub-array of the original array source with the first two elements omitted.
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {

    const [a,b, ...arr] = list;

    return arr;
}
const arr = removeFirstTwo(source);

// CODEWARS

//-----TASK
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s){
    let arrayLengths =  s.split(" ").map(element=> element.length)
    return Math.min(...arrayLengths)
}

//-----TASK
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let vowels  = ["a", "e", "i", "o", "u"]
    str = str.replace(/\s+/g, '')
    let arraySymbols = str.split("")

    let count = 0
    arraySymbols.forEach(element => {
        if(element === vowels[0]){ ++count}
        if(element === vowels[1]){ ++count}
        if(element === vowels[2]){ ++count}
        if(element === vowels[3]){ ++count}
        if(element === vowels[4]){ ++count}

    })
    return count

}
// -----from Best practice:
//function getCount(str) {
//  return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
// }