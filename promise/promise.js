//PROMISE - wait for smth to happen, then can run the code
function makePizza(toppings) {
  const pizzaPromise = new Promise(function (resolve, reject) {
    //when you are ready, you can resolve this poromise
    resolve("Here is your pizza with the toppings ${toppings.join('')}");
    //if something went wrong, we can reject this promise;
  });
  return pizzaPromise;
}

const pepperoniPromise = makePizza(["pepperoni"]);
const canadianPromise = makePizza(["pepperoni", "mushrooms", "onions"]);
console.log(pizza);
