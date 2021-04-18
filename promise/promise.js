//PROMISE - wait for smth to happen, then can run the code
//returning immediately and fresolving happening when it is done
function makePizza(toppings = []) {
  const pizzaPromise = new Promise(function (resolve, reject) {
    // reject if people try putting pineapple on pizza
    if (toppings.includes("pineapple")) {
      reject("Seriously?");
    }
    //influences the order or time it takes to process the array based on how long it is
    const amountOfTimeToBake = 500 + toppings.length * 200;
    //wait 1 sec for the pizza to cook
    setTimeout(function () {
      //when you are ready, you can resolve this promise
      resolve(`Here is your pizza with the toppings ${toppings.join(" ")}`);
    }, 1000);
    //if something went wrong, we can reject this promise;
  });
  return pizzaPromise;
}

const pepperoniPromise = makePizza(["pepperoni"]);
const canadianPromise = makePizza(["pepperoni", "mushrooms", "onions"]);
console.log(pepperoniPromise, canadianPromise);

console.log(pepperoniPromise);
//gettting return value by chaining .then
pepperoniPromise.then(function (pizza) {
  console.log("got it");
  console.log(pizza);
});

console.log("first");
//shorter way to write above
makePizza(["pepperoni"])
  .then(function (pizza) {
    console.log(pizza);
    return makePizza(["ham", "cheese"]);
  })
  //can chain multiple
  .then(function (pizza) {
    console.log(pizza);
    return makePizza(["hot peppers", "onion", "feta", "pineapple"]);
  })
  .then(function (pizza) {
    console.log(pizza);
    return makePizza();
  })
  .then(function (pizza) {
    console.log(pizza);
    return makePizza(["two", "three", "one", "two", "three"]);
  })
  .then((pizza) => {
    console.log("All done. Here is your last pizza");
    console.log(pizza);
  })
  //applies to all
  .catch(handleError);
console.log("right away");

//run them concurrently
const pizzaPromise1 = makePizza(["hot peppers", "onion", "feta"]);
const pizzaPromise2 = makePizza(["two", "three", "one", "two", "three"]);
const pizzaPromise3 = makePizza(["ham", "cheese"]);

//Promise.all - static method
//makes it so that takes all three promises and will resolve when all three subpromises have been resolved themselves
// resolve at same time, instead of individually that does it at diff times
const dinnerPromise = Promise.all([
  pizzaPromise1,
  pizzaPromise2,
  pizzaPromise3,
]);
dinnerPromise.then((pizzas) => {
  console.log(pizzas);
});

dinnerPromise.then(function (pizzas) {
  //destructure
  const [hi, bye, hey] = pizzas;
  console.log(hi, bye, hey);
});

//another way
dinnerPromise.then(function ([hi, bye, hey]) {
  console.log(hi, bye, hey);
});

//promise.race waits until first one is ready
const firstPizzaPromise = Promise.race([
  pizzaPromise1,
  pizzaPromise2,
  pizzaPromise3,
]);
firstPizzaPromise.then((pizza) => {
  console.log("You must be hungry, here is the first one ready");
  console.log(pizza);
});

function handleError(err) {
  console.log("Oh noo!");
  console.log(err);
}

makePizza(["cheese", "pineapple"])
  .then((pizza) => {
    console.log(pizza);
  })
  .catch(handleError);

//.THEN & .CATCH, longer way to write above withou passing as a function
makePizza(["cheese", "pineapple"])
  .then((pizza) => {
    console.log(pizza);
  })
  .catch((err) => {
    console.log("Oh no!");
    console.log(err);
  });

const p1 = makePizza(["pep"]);
const p2 = makePizza(["pineapple"]);

//Promise.allSettled tells if all is done regardless if resolved or rejected
const dinnerPromise2 = Promise.allSettled([p1, p2]);

dinnerPromise2.then((results) => {
  console.log(results);
});

//ASYNC AWAIT
//asynchronously waiting for the function to run, so the rest of the js is running and it does not interfere with those code

//pizza1 runs, then pizza2 runs
async function makeDinner() {
  const pizza1 = await makePizza(["pepperoni"]);
  const pizza2 = await makePizza(["mushrooms"]);
  console.log(pizza1);
  console.log(pizza2);
}
makeDinner();

//runs concurrently, same time
async function makeDinners() {
  const pizzaPromise1 = makePizza(["pepperoni"]);
  const pizzaPromise2 = makePizza(["mushrooms"]);
  const [pep, mush] = await Promise.all([pizzaPromise1, pizzaPromise2]);
  console.log(pep, mush);
}
makeDinners();
