// ES6+ --> EcmaScript 2015
/** 
let, const

Template Literals
Older way
----------
let name = "John";
console.log("Hello " + name + ", welcome to the session");
New Way
----------
console.log(`Hello ${name}, welcome to the session`);

Arrow Function
Old Way
----------
function add(a, b) {
    // logic
    return a+b;
}

// New Way
----------
const add = (a, b) => {
    // logic
    return a+b;
}

function greet(name) {
    console.log(`Hello, ${name}`)
}

function greet(name = 'User') {
    console.log(`Hello, ${name}`)
}

// Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const person1 = new Person("Divyansh", 24);
person1.introduce();

const person2 = new Person("Wonderland", 40);
person1.introduce();


Inheritance (extends, super Keyword)
---------------------------------
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  introduce() {
    console.log(
      `Hi, I'm ${this.name} and I'm ${this.age} years old and I'm studying ${this.course}`
    );
  }
}

const student1 = new Student("Rajashree", 25, "CSE");
student1.introduce();








*/

// console.log("53: ", this);

// function hola() {
//   console.log("56: ", this);
// }

// hola();

// const obj = { name: "Arjun", greet: hola };
// obj.greet();

// const obj2 = {
//   name: "Krishna",
//   greet: () => {
//     console.log("67: ", this);
//   },
// };

// obj2.greet();

// function Person(name) {
//   this.name = name;
// }

// const person1 = new Person("Jogindar");
// console.log(person1.name);

// const person = {
//   name: "Alice",
//   age: 30,
//   sayHello: function () {
//     console.log(`Hello, my name is ${this.name}`);
//   },
// };

// const person2 = {
//   name: "Wonderland",
//   age: 40,
//   sayHello: function () {
//     console.log(`Hello, my name is ${this.name}`);
//   },
// };

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   introduce() {
//     console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
//   }
// }

// const person1 = new Person("Divyansh", 24);
// person1.introduce();

// const person2 = new Person("Wonderland", 40);
// person1.introduce();
