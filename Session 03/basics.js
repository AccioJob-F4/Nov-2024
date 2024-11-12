/**
 * Synchronous Code
console.log("1");
console.log("2");
console.log("3");
console.log("4");
*/

/**
 *  Asynchronous Code
console.log("1");
setTimeout(() => console.log("2"), 2000);
setTimeout(() => console.log("3"), 1000);
console.log("4");
*/

/**
 * EVENT LOOP 

 * Call Stack
function first() {
  second();
}

function second() {
  third();
}

function third() {
  console.log("Third Function");
}

first();


 * Task Queue (Callback Queue or Macrotask Queue)
 * Microtask Queue (more priority as compared to task queue)

console.log("1");

setTimeout(() => {
  console.log("2");
}, 2000);

setTimeout(() => console.log("3"), 1000);
console.log("4");
*/

/** 
Example 01

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

setTimeout(() => {
  console.log("3");
}, 1000);

setTimeout(function() {
    console.log("3");
  }, 1000);

Promise.resolve().then(() => {
  setTimeout(() => {
    console.log("4");
  }, 3000);
});

setTimeout(() => {
  console.log("5");
}, 0);

console.log("6");

*/

console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

Promise.resolve().then(() => {
  console.log(3);
});

Promise.resolve().then(() => {
  console.log(4);
});

setTimeout(() => {
  console.log(5);
}, 0);

console.log(6);
