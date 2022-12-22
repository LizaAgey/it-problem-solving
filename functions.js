// JavaScript Algorithms and Data Structures FREECODECAMP

//-----TASK
//Use destructuring assignment within the argument to the function half to send only max and min inside the function.
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};


const half = ({max, min}) => (max + min) / 2.0;


//-----TASK
//Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.

const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);

//-----TASK
//Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

function towerBuilder(nFloors) {
    let lowElQty = 1 + 2 * (nFloors - 1)
    let building = []
    for (let i = 1; i <= nFloors; i++) {
        let stars = []
        for (let j = 0; j < i; j++) {
            stars.push("*")
        }

        let sidesQty = (lowElQty - i) / 2
        let leftSide = []
        for (let j = 0; j < sidesQty; j++) {
            leftSide.push(" ")
        }
        building.push([...leftSide, ...stars, ...leftSide].join(""))
    }
    return building
}

console.log(towerBuilder(4))

//Best practice:
function towerBuilder(nFloors) {
    var tower = [];
    for (var i = 0; i < nFloors; i++) {
        tower.push(" ".repeat(nFloors - i - 1)
            + "*".repeat((i * 2) + 1)
            + " ".repeat(nFloors - i - 1));
    }
    return tower;
}