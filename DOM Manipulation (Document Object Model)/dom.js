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

/*
Array.from(books).forEach(function (book) {
  book.textContent = "test"; //overwritten the previous content to test
});
*/

Array.from(books).forEach(function (book) {
  book.textContent += " (book title)"; //appends, so adds in book title to the textContent. NEED THE +=
});

//UPDATE THE HTML
const bookList = document.querySelector("#book-list");
console.log(bookList.innerHTML); //every html in book-list is logged to the console
//bookList.innerHTML = "<h2>Books and more books...</h2>"; //overwritten entire html there with this
bookList.innerHTML += "<p>This is how you add HTML</p>"; //add on this

//Tranverse upward through the DOM. from children to the parent element
console.log("the parent node:", bookList.parentNode); //writes it out
console.log("the parent node:", bookList.parentElement); //outputs it to console as well

console.log("the parent node:", bookList.parentElement.parentElement); //finds parent element of the book list, then find parent element of that.

//Tranverse downward through the DOM. from parent to the children element
console.log(bookList.childNodes); //gets all those text nodes
console.log(bookList.children); //gets element children

//Transversing from sibling to sibling
//const bookList = document.querySelector("#book-list"); already written above
console.log("book-list next sibling is", bookList.nextSibling); //gets next node bc line break
console.log("book-list next sibling is", bookList.nextElementSibling); //get next element sibling

console.log("book-list previous sibling is", bookList.previousSibling);
console.log("book-list previous sibling is", bookList.previousElementSibling);

bookList.previousElementSibling.querySelector("p").innerHTML += "<br />Hello"; //search in the header for a p tag and add a (line)break then text
//"grabs a reference to the book list, then use the previous element sibling property to get a header, then query selector to query everything in the header and find the p, then changing the html"

//add event listener to h2 with click
var h2 = document.querySelector("#book-list h2");
h2.addEventListener("click", function (e) {
  console.log(e.target);
  console.log(e);
});

//delete the li if click on delete btn
var btns = document.querySelectorAll("#book-list .delete");
Array.from(btns).forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const li = e.target.parentElement; //grabs li
    li.parentNode.removeChild(li);
  });
});

//prevent from going to another page
const link = document.querySelector("#page-banner a");
link.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("navigation to", e.target.textContent, "was prevented");
});

//Event Bubbling
//event listener added to smth will fire, will fire to the parent per say if parent also has a eventlistener there, cont...

//better way to delete when click on button. still can delete even if add one more book bc are still clicking on ul tag, which the book added is inside of
const list = document.querySelector("#book-list ul");
list.addEventListener("click", function (e) {
  if (e.target.className == "delete");
  const li = e.target.parentElement; //gets the parent element of the ul
  li.parentNode.removeChild(li); //gets the parent above this one abd remove
});

//Interacting with Forms
//add book-list
const addForm = document.forms["add-book"]; //id of the form
addForm.addEventListener("submit", function (e) {
  e.preventDefault(); //prevents default behavior in forms that when click, refreshes the page
  const value = addForm.querySelector('input[type="text"]').value;

  //create elements
  const li = document.createElement("li");
  const bookName = document.createElement("span");
  const deleteBtn = document.createElement("span");

  //add content
  deleteBtn.textContent = "delete";
  bookName.textContent = value;

  //add class name of "name" and "delete" into html
  bookName.classList.add("name");
  deleteBtn.classList.add("delete");

  //append to DOM. order matters
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li); //appended li to the list
});

//add style in console
var li = document.querySelector("li:last-child");
li.style.color = "red";
li.style.marginTop = "60px";
