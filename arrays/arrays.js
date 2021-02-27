//FOR EACH

/* .forEach() calls a function once for each element in an array, in ascending order
 3 arguments- value, index, array object
 adds value and index to each item

 ex: itemArray.forEach(dog -> dog + 2) adds 2 to each item of the array
*/
let names = ["Ania", "Dave", "Hannah", "Bob"];

//for each item/name in our name array, want to print out this for each item.
names.forEach((name) => {
  console.log(name + " is the best!");
});

const squares = document.querySelectorAll("div");

squares.forEach((square) => {
  square.addEventListener("click", clickOutcome); //if click on the div which is now assigned cosntant square, will invoke clickOutcome function
});

function clickOutcome() {
  alert("I have been clicked!");
}

//-----

//ARRAYS - used for holding a list of items where the orders matters. each thing in an array is an ITEM and its position in the array is the INDEX. Number of items in an array is its LENGTH and each item can be any type like strings, boolenas, etc... array is an object.

const name = ["wes", "kait", "snickers"]; //brackets marks an array.
//array has no keys. order of 0,1,2,3,etc

console.log(name[0]); //gives us wes, the first item
console.log(name.length); //checks how many items there are. Is not 0 base
console.log(name[names.length - 1]); //names.length is 3, but there is not 3 bc base 0, so 3-1

name.push("lux"); //mutatable. PUSH adds it to the end
console.log(name);
const names2 = [...name, "lux"]; //immutable

name.unshift("poppy"); //UNSHIFT adds to the front
console.log(name);
const name3 = ["poppy", ...name];
console.log(name3);

const bikes = ["bianchi", "miele", "panasonic", "miyata"];
const newBikes = [...bikes.slice(0, 2), "benotto", ...bikes.slice(2)]; //ADDS benotto to the middle of the array. slice(2) starts at 2 and keeps going so miyata is included
console.log(newBikes);

const newBikes2 = [...newBikes.slice(0, 3), ...newBikes.slice(4)]; //REMOVE panasonic from the array
console.log(newBikes2);

const kaitIndex = name.findIndex((name) => name === "kait");
console.log(kaitIndex); //finds the index of kait
console.log(name[kaitIndex]); //checks it is true

const newNamesWithoutKait = [
  //get everything up to kait index
  ...name.slice(0, kaitIndex), ///... shows you spread the array, not create a new one
  //everything after Kait index
  ...name.slice(kaitIndex + 1),
];
console.log(newNamesWithoutKait);

//another way
const newNamesWithoutKaitAnother = [
  //get everything up to kait index
  name.slice(0, kaitIndex),
  //everything after Kait index
  name.slice(kaitIndex + 1),
].flat();
console.log(newNamesWithoutKaitAnother);

const comments = [
  { text: "Cool Beans", id: 123 },
  { text: "Love this", id: 133 },
  { text: "Cool mangos", id: 233 },
  { text: "good bikes", id: 333 },
  { text: "so good", id: 433 },
];

function deleteComment(id, comments) {
  //first find the index of the item in the array
  const commentIndex = comments.findIndex((comment) => comment.id === id);
  //make a new arrayw without that tiem in it
  return [
    ...comments.slice(0, commentIndex),
    ...comments.slice(commentIndex + 1),
  ];
  //return our new array
} //console type in deleteComment (233, comments) for example

//---

//Mutation Method - DO CHANGE THE ORIGINAL DATA
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbersBackwards = numbers.reverse();
console.log(numbersBackwards);
console.log(numbers); //the origingal array is changed.

//Immutable- method doesnt change the original data but returns a new array.
const pizzaSlice = numbers.slice(2, 4); // SLICE lets you take a shallow copy of a portion of the original array in a new array object where begin and end is the indec of items in that array and end is not included, is IMMUTABLE. starts at item 2 and stops at 4 - doesnt include 4.
console.log(pizzaSlice); //7,6
console.log(numbers); //9,8,7,6,5,4,3,2,1

const numbersReversed = [...numbers].reverse();
//numbersReversed.reverse();
console.log(numbersReversed);

//SPLICE- changes the content of an array by removing or replacing existing elements. is MUTABLE. Has a start and how many you will go for.
console.log(numbers); //9,8,7,6,5,etc,1
numbers.splice(3, 2); //takes out 6,5
console.log(numbers); // [9,8,7,4,3,2,1]
