// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function makeFunc() {
  let name = 'May';  
  let count = 0;
  function displayName() {
    count += 1;  //keeps track of times invoked
    console.log(name+count);  //name and original count can be accessed because it is in a larger scope
  }
  return displayName; 
}

const myFunc = makeFunc();
myFunc();
myFunc();
myFunc();


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function() {
    return ++count;
  }
};

const newCounter = counter();
// Example usage: const 1newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let count = 0;
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  return {
    increment: function(){return ++count},
    decrement: function(){return --count}
  }
};
const newCounterFactory = counterFactory();

console.log(newCounterFactory.increment());
console.log(newCounterFactory.increment());
console.log(newCounterFactory.increment());
console.log(newCounterFactory.decrement());
console.log(newCounterFactory.decrement());
console.log(newCounterFactory.decrement());