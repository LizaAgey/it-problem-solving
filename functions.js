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
    setGear (newGear) {
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);