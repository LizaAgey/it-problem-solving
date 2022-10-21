// JavaScript Algorithms and Data Structures FREECODECAMP

//-----TASK
//The function should check if name is an actual contact's firstName and the given property (prop) is
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
// Replace the two assignments with an equivalent destructuring assignment.
// It should still assign the variables today and tomorrow the values of today and tomorrow
// from the HIGH_TEMPERATURES object.
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

const {today, tomorrow}  = HIGH_TEMPERATURES;

//Option 2

const HIGH_TEMPERATURES_SECOND = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES_SECOND;

//Option 3
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST