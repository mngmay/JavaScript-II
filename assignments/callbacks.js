// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

getLength(items, function(len){
  console.log(len)
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length-1])
}

last(items, function(last){
  console.log(last)
});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  sum = x+y;
  return cb(sum);
}

sumNums(2, 3, function(s){
  console.log(s) //could also just console.log sum as the variable defined in sumNums and not pass a parameter
});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  multi = x*y;
  return cb(multi);
}

multiplyNums(2, 3, function(product){
  console.log(product)
});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
 if(list.includes(item)){
   return cb(true);
 }
 else{
   return cb(false);
 }
}

//true check
contains('Notebook', items, function(item) {
  console.log(item);
});

//false check
contains('Poop', items, function(item) {
  console.log(item);
});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
