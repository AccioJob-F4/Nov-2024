// VARIABLES AND DATATYPES
/*
--> var -- function-scoped, re-declare, update, issues (hoisting)
--> let -- block scoped, re-declare, update
--> const -- block-scoped, limited update
*/

// // HOW JS SEES DUE TO HOISTING
// var a;
// console.log(a);
// a = 10;

// // ACTUAL
// console.log(a);
// var a = 10;

// console.log(b);
// const b = 10;

// ------------------------------------------------------------------------------------------------

// Primitive Datatypes
// String, Number, Boolean, Null, Undefined, BigInt, Symbol

// Reference types
// Objects, Arrays

// Boolean --> truthy/falsy

// undefined --> unintentional absence of value
// null --> intentional absence of value

// ------------------------------------------------------------------------------------------------

// Scoping

// const add = (a, b) => {
//   if (a > 0) {
//     let alpha = 10;

//   }
//   console.log("🚀 ~ add ~ alpha:", alpha);
//   return a + b;
// };

// function subtract(a, b) {
//   return a - b;
// }

// console.log(add(2, 3));

// ------------------------------------------------------------------------------------------------

// CONTROL STRUCTURES
// --> Conditionals
// --> Loops

// ------------------------------------------------------------------------------------------------

// Objects & Arrays

// const person = { fname: "Divyansh", lname: "Singh" };

// // DOT Notation
// console.log(person.fname);

// // Brackett Notation
// console.log(person["fname"]);

// const fruits = ["pineapple", "apple", "guava", 235, 223, true, {}, []];
// // 0, 1, 2

// console.log(fruits[-1]);

// ------------------------------------------------------------------------------------------------

// CLOSURES

// function outer() {
//   let count = 5;

//   return function inner() {
//     count = count + 20;
//     console.log(count);
//   };
// }

// const innerFn = outer();
// innerFn();

// ------------------------------------------------------------------------------------------------

// Arrow Functions

// function add(parameters) {}

// const add = (a, b) => {
//   console.log(a + b);
// };

// add(2, 4);

// ------------------------------------------------------------------------------------------------

// Template Literals

// const a = "hello";

// console.log(a + " World!");
// console.log(`${a} World!`);

// ------------------------------------------------------------------------------------------------

// forEach. for of

// const fruits = ["pineapple", "apple", "guava", 235, 223, true, {}, []];
// // fruits.forEach((element, idx) => {
// //   console.log("🚀 ~ fruits.forEach ~ idx:", idx);
// //   console.log("🚀 ~ fruits.forEach ~ element:", element);
// // });

// for (let ele of fruits) {
//   console.log("🚀 ~ ele:", ele);
// }
