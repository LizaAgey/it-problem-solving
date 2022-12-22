// JavaScript Algorithms and Data Structures FREECODECAMP

//-----TASK
//The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
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
function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal"
        : (a > b) ? "a is greater"
            : "b is greater";
}
//In the checkSign function, use multiple conditional operators - following the recommended format used in findGreaterOrEqual - to check if a number is positive, negative or zero. The function should return positive, negative or zero.
function checkSign(num) {
    return (num >0) ? "positive" : (num < 0) ? "negative" : "zero";
}

checkSign(10);

// CODEWARS

//-----TASK
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!//
// The function takes a name as its only argument, and returns one of the following strings://
//     name + " plays banjo"
//     name + " does not play banjo"
// Names given are always valid strings.


function areYouPlayingBanjo(name) {
    if (name.charAt(0).toLowerCase() === "r") {
        return name + " plays banjo"
    } else {
        return name + " does not play banjo"
    }

}

//-----TASK
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates
// and the paperwork has 'm' pages.//
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
function paperwork(n, m) {
    if ((n <0 || m<0 ) ){return 0} else {return m * n}

}

//-----TASK
// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
function basicOp(operation, value1, value2) {
    switch (operation) {
        case "+" :
            return value1 + value2;
        case "-":
            return value1 - value2;
        case "*" :
            return value1 * value2;
        case "/" :
            return value1 / value2
        default :
            return 0
    }
}

console.log(basicOp('+', 4, 7))
console.log(basicOp('-', 15, 18))
console.log(basicOp('*', 5, 5))
console.log(basicOp('/', 49, 7))