function wait(ms = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

//can only use await in async
async function go() {
  console.log("starting");
  await wait(2000);
  console.log("running");
  await wait(200);
  console.log("ending");
}

go();


//await can be used in any function

//function declaration
async function fd() {}

//arrow function
const arrowFn = async () => {};

//call back
window.addEventListener("click", async function () {});

//
const person = {
  //method
  sayHi: async function () {},
  //method shorthand
  async sayHello() {
    //
  },
  //function property
  sayHey: async () => {},
};

//cont, added on promise folder js 