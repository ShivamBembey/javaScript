// // Named Functions
// function additn(a, b) {
//     return a + b;
//   }

// // Function Expressions
// var mult = function(a, b) {
//     return a * b;
//   };

// // Arrow Functions 
// var subt = (a, b) => a - b;

// // Immediately Invoked Function Expressions
// (function() {
//     console.log("Hello");
//   })();

// // Anonymous Functions
// const greet = function(name) {
//     console.log(`Hello, ${name}!`);
//   };
// console.log(greet)

// Constructor Functions
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
const per1 = new Person("Shivam", 22);
console.log(per1.name);
console.log(per1.age);

// // Recursive Functions
// function factorial(n) {
//     if (n === 0) {
//       return 1;
//     } 
//     else {
//       return n * factorial(n - 1);
//     }
//   }
// console.log(factorial(6));


// // Higher-order function
// // Returning function
// function higherOrderFunction() {
//     return function() {
//       console.log("Good Morning!");
//     };
//   }
// const res = higherOrderFunction();
// res();
// //Accepting function
// function highOrdFunc(x) {
//     x();
//   }
// function printThis() {
//     console.log("This is a higher-order function");
// }
// highOrdFunc(printThis);