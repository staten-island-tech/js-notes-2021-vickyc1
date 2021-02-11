const name = "Vic"; //global scope

//function: set of code that does a task

/*
function upperCase() {}

ex: const galleryImages the lower-upper case is by convention, makes it more visible
*/

function logger() {
  //brackets mean what is included in this function only happens in this function. If put const name here, and put console.log(name) later on, won't work
  console.log("Party Time");
  console.log("Party Time");
  console.log("Party Time");
  console.log("Party Time");
  console.log(name);
} //function scope

logger(); //runs the code and makes it appear, executes the function

//Variables in global scope is available in function scope, but the opposite is not true. ex: console.log(name) can work in the function scope bc const name = "Vic" is in global scope

function adder(num1, num2) {
  //can add parameters in parethesis
  console.log(num1 + num2);
}

adder(5, 10); //this defines the value so it will be put into num1 & num2, then calculated

//ONE WAY TO USE FUNCTIONS
function toUpper(text) {
  const upperCased = text.toUpperCase(); //built in to-uppercase
  console.log(upperCased);
}

toUpper(name); //makes it all uppercased

const youtuber = "hi";
toUpper(youtuber); //makes hi -> HI

//ANOTHER WAY TO USE FUNCTIONS THROUGH SETTING IT A CONST
const toLower = function () {
  sdss;
};

//ANOTHER WAY- shortest way to write a function (the beginning of it)
const toItalic = () => {
  sdlskd;
};

//----------------------PARAMETERS AND ARGUMENTS

//parameters- like placeholders, bc dont know what the values will be until run the function
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  //billAmount and taxRate are PARAMETERS
  console.log(billAmount, taxRate);
  console.log("Running Calculate Bill!!");
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

const myTotal = calculateBill(100, 0.13); //100, 0.13 are ARGUMENTS- actual values
const myTotal2 = calculateBill(200, 0.13); //(200, 0.13) is call/run/invoke
console.log(myTotal, myTotal2);
//much simpler, no need to reassign values to billAmount and taxRate bc the values where you are calc the total are put as parameters

//can pass it indirectly or directly through value, variables that have a value,etc... When values get passed into a function they sort of get renamed to whatever it is that you defined the function's parameters as. Still works.
const wesTotal = 500;
const wesTaxRate = 0.3;
const myTotal3 = calculateBill(wesTotal, wesTaxRate);

function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}
const greeting = sayHiTo("Wes");
console.log(greeting);

//can pass it as an "expression" too or a variable + number as long as variable is defined
const myTotal4 = calculateBill(20 + 20 + 30, 0.15);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = "Silly Goose") {
  return `HEY ${name.toUpperCase()}`;
} //if someone doesn't pass this parameter called name, the default is silly goose

//pass it in (the "wes")
doctorize("wes");
yell("wes");
yell(doctorize("wes"));

//uses default tip rate but not tax rate
const myBill4 = calculateBill(100, undefined, 0.2);
console.log(myBill4);
