//INTRO TO JS
let x = "hi";
console.log(x);

console.log("Hey Dev Ed");

//DATA TYPES

//VARIABLE: like boxes where can add diff types of data in them like #'s, text
//ex: life bar in game where holds a number and will subtract or add depending on the situtation like taking a hit

var life = 100; //NUMBER, can +,-, /,*
life = 50; // now 50 becomes the number displayed
life = life - 10; // life = 40
life = life / 10; // life = 40 / 10 = 4
var name = "Vic"; //STRING

var checkout = false; //BOOLEAN = value of true or false

console.log(life);

var box;
console.log(box); //will be undefined, bc reads the variable but it is not defined
var box = null; //no value or has a value of nothing

//OBJECT SYMBOL

const hi = 100; //constant- can not change, modify it, or redeclare it. for example using it with images bc dont tend to change it. With var, can change.

let hey = 100; //can change value
hey = hey - 50;
console.log(hey);

//STRING CONCATENATION - takes both string and adds together, making one long string
const myAge = 24;
const yourAge = 21;
console.log(myAge + yourAge);

console.log("Hello my name is" + " Vicky"); //string

//console.log('Hello it\'s me'); if using single quote, can put a \ before the single  quote in the concatenation or use a double quote outside
//can do this: when making string, can put a single quote. but either is fine.

var name = "vic";
console.log(`Hello it's me and my name is ${name}`); // don't need to worry about single or double quote. ` is found to the left of the 1.

const firstname = "Vicky";
const age = 24;

console.log("Hello it's me " + name + " and my age is " + age + " and hi");
console.log(`Hello it's me ${name} and my age is ${age}`); // MUCH CLEANER and works the same

const combined = name + age;
console.log(combined); // get vic24
//bc not both numbers, cant  add together. Not both strings (one string and one number), so js is going to make the number a string.
console.log(typeof combined); //string
