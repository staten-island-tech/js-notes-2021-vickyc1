//DOM (Document Object Model) is created by the browser when a web page is loaded.Looks like a tree/branches of elements/nodes, like parent elements on top and child elements beneath.
//can use JS to read/change/interact with the DOM

//querying/searching the DOM in console
document;

//id in the html should be unique to itself
document.getElementById("page-banner"); //grabs an element, the id and everything in that id, from the html document

var banner = document.getElementById("page-banner"); //stores the info in a variable
var bookLists = document.getElementById("book-list");

//querying for several elements, ex: class name which can be the same but from diff divs
var titles = document.getElementsByClassName("title");
//gets a HTMLCollection, which in some ways behaves and doesnt behave like a array. Can access elements using the array swuare bracket notation. ex: titles[0]

//GETELEMENTSBYTAGNAME - return a collection of elements with the same tag
var lis = document.getElementsByTagName("li");
lis[2];

//set i=0 and as long as i is less than the length of titles (in this case is 2), i will plus 1 and run this console.log function each time
for (i = 0; i < titles.length; i++) {
  console.log(titles[i]);
}

//turns title into a array
var titles = document.getElementsByClassName("title");
console.log(Array.isArray(titles)); //returns true if it is an array
console.log(Array.isArray(Array.from(titles))); //Array.from(titles) turns it into a array

Array.from(titles).forEach(function (item) {
  console.log(item);
}); //another way than the for-loop above for cycling throug the HTMLCollection

const wmf = document.querySelector("#book-list li:nth-child(2) .name"); //in the booklist id, grap the 2nd child on the li list, and the one with the span with class = "name" within
console.log(wmf);

var books = document.querySelector("#book-list li .name"); //grabs the first ONE with the span of name within book-list id. querySelector only gives out one, not all

books = document.querySelectorAll("#book-list li .name");
//grabs ALL with the span of name within book-list id. returns a NodeList, not a HTMLCollection. don't need to do the array.from method before doing the forEach
console.log(books);

//UPDATES THE TEXTCONTENT
//grabs the text from each span
Array.from(books).forEach(function (book) {
  console.log(book.textContent);
});

Array.from(books).forEach(function (book) {
  book.textContent = "test"; //overwritten the previous content to test
});

Array.from(books).forEach(function (book) {
  book.textContent += " (book title)"; //appends, so adds in book title to the textContent. NEED THE +=
});

//UPDATE THE HTML
const bookList = document.querySelector("#book-list");
console.log(bookList.innerHTML); //every html in book-list is logged to the console
bookList.innerHTML = "<h2>Books and more books...</h2>"; //overwritten entire html there with this
bookList.innerHTML += "<p>This is how you add HTML</p>"; //add on this
