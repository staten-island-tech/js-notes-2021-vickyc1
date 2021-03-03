//Notes

//Array prototype.filter
//FILTER- pass it a function, which will loop over every single item in the array, and gives us the inventor. Will take the inventor, loop over it, and for each inventor, will decide if will keep it or not
//ex: filtering the list of inventors for those born in the 1500's
const fifteen = inventors.filter(function (inventor) {
  if (inventor.year >= 1500 && inventor.year < 1600) {
    return true; //keep it!
  }
});
console.table(fifteen);

const fifteen = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
); //same thing as above

//Array.prototype.map()
//MAP- takes in the array, does something with that array and then reutrns a new array but of the same length. filter above can take 10 and return 2, but map will return 10.
//ex: array of the inventory first and last names
const fullNames = inventor.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);
console.log(fullNames);

//Array.prototype.sort()
//SORT- when sorting items, older person older than younger person, puts older on top. Returns 1 and -1.
//ex: Sort the invenotrs by birthdate, oldest to youngest
const ordered = inventors.sort(function (a, b) {
  //a is the younger person, b the older
  if (a.year > b.year) {
    return 1;
  } else {
    return -1;
  }
});

const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1)); //same as above but shorter, consised/ saying if a.year is greater than b.year, return 1. if fail, return -1.
console.table(odered);

//Array.prototpye.reduce()
//REDUCE- allow you you sort or build something on every single one
//ex: how many years did all the inventors live?
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);

//sort inventors by years lived
const oldest = inventors.sort(function (a, b) {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;
  return lastGuy > nextGuy ? -1 : 1;
});
console.table(oldest);

//List of Boulevards in Paris that contain 'de' anywhere in the name, based on wikipedia
const category = document.querySelector(".mw-category");
const links = [...category.querySelectorAll("a")]; //can call query selector against any existing DOM element
const de = links
  .map((link) => link.textContent)
  .filter((streetName) => streetName.includes("de"));

//sort people alphabetically by last name
const alpha = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst]= lastOne.split(', ');
    const [bLast, bFirst]= nextOne.split(', ');
  return aLast > bLast ? 1 : -1;
});

//sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
const transportation = data.reduce(function(obj, item) {
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});

//Array.prototype.some()
//SOME- checks if at least one thing in your array meets what you are lookin for.
//ex: Is at least one person 19?
const isAdult = people.some(function(person) {
    const currentYear = (new Date()).getFullYear(); 
    if(currentYear = person.year >= 19) {
    return true;
    }
});
console.log(isAdult);
console.log({isAdult}); //show the name of the variable and the value

const isAdult = people.some(person => {
    const currentYear = (new Date()).getFullYear(); 
    return currentYear = person.year >= 19;
});
const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19 );

//Array.prototype.every()
//EVERY- checks everyone if it meets what you are looking for 
//ex: is everyone 19? 
const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19 );
console.log({allAdults});

//Array.prototype.find()
//FIND is like filter but instead of returning the subset of the array, will reutrn the first item that it finds.
//ex: find comment with the ID of 823423
const comment = comments.find(function(comment) {
    if(comment.id === '823423') {
        return true;
    }
});

const comment = comments.find(comment => comment.id === '823423'); //shortened version using arrowheads
console.log(comment);

//Array.prototype.findIndex()
//FIND- find where smth is inside of the array
//ex: find the comment with this ID. delete the comment with the ID of 823423
const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);
// comments.splice(index, 1);
const newComments = [ //builds a new array of comments
  ...comments.slice(0, index),
  ...comments.slice(index + 1)
];