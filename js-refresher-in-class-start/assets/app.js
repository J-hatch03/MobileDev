class Car { 
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

const myCar = new Car("Lexus", "Rx 350", 2009)

console.log(myCar)

const user = {
    name: "Jaren",
    age: 27,
    email: "jaren@example.com"
}

console.log(user.name)

// arrays

const hobbies = ["reading", "coding", "sports"]

console.log(hobbies[1]);

//add to the end of th array

hobbies.push("snowboarding")

console.log(hobbies)

// map: returns a new array, can be used to transform into an object

const newHobbies = hobbies.map((hobby) => hobby.toUpperCase());
console.log(newHobbies);

// destructuring 
const [first, Last] = ["Jaren", "Hatch"];

console.log(first)
console.log(Last)

// Spread operator

const fruits = ["apple", "bannana", "pineapple"];
console.log(fruits);
const mergedFruits = ["grapes", "strawberry", ...fruits];
console.log(mergedFruits);