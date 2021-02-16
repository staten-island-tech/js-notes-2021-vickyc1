const age = 10;

if (age > 18) {
  console.log("You are good to go!"); //if const age = 20, will appear bc 20 > 18 Is true.
} else if (age === 18) {
  //=== compares them. == also works in this same but can encounter bugs
  console.log("Yay");
} else if (age < 15) {
  //used to check another condition
  console.log("Wow you are really young...");
} else {
  console.log("You are not old enough"); //if const age= 16, this will show up bc 16 < 18, 16 > 15.
}

// equal is ==
// >= is greater than or equal to
// <= is smaller than or equal to

const dice1 = 6;
const dice2 = 3;

if (dice1 === 6 && dice2 === 6) {
  console.log("You rolled a double");
} else {
  console.log("You didn't");
}

if (dice1 === 6 || dice2 === 6) {
  // || means "or" - if at least one of this is correct
  console.log("yay");
}

// OBJECTS - lets us group properties and values. can store related data, functionality. Used where the order of the properties does not matter.

/* literal syntax of an object
{

}
*/
const year = 100;
const person = {
  year: year, // property (age, name) on the left
  name: "wes", //value (100, "wes") on the right. seperated by a colon. value can be any type.
  propertyToCheck: "Never",
  "cool-dude": true, // properties can have -, variables can not
  "really cool": false,
  777: true,
  clothing: {
    //nested object
    shirts: 10,
    pants: 2,
  },
  sayHello: function (greeting = "Hey") {
    return `${greeting} ${this.name}`;
  },
  sayHello(greeting = "Hey") {
    //method shorthand
    return `${greeting} ${this.name}`;
  },
};

person.job = "Web Developer"; //can add a property to above - person
person.age = 50; // can rewrite. properties can change but actual object itself can't be rewritten. Is a const.

const wesFroze = Object.freeze(person); //can not change
console.log(person);

//can access a property on smth by... "person.clothing" etc.. on console

console.log(person.age); //two ways of accessing a property
const propertyToCheck = prompt("What do you want to check?");
console.log(propertyToCheck);
console.log(person[propertyToCheck]); //square brackets notation when the property for the object is stored in a variable

//person.jobs ? person.jobs.side : "Jobs doesn't exist"; - ? to check if the one exist, then checks or note the next one

const nameInput = document.querySelector('[name="first"]');
//const name = nameInput.value;
//console.log(name);
const name = nameInput ? nameInput.value : ""; //checks if theres a nameInput. if has, finds the value. if not, empty string
console.log(name);

delete person.job; //deletes the property
person.age = undefined;
person.age = null; // undefined and null is not delete. Is redefining it.

// Methods- function that lives inside a object
