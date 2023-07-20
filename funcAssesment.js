// Other functions of an arrow function. 

// Lexical 'this': 
// Regular function with dynamic 'this' context
const person = {
    name: 'Shivam',
    sayHi: function() {
      console.log(`Hi, my name is ${this.name}.`);
    }
};
person.sayHi();
  
// Arrow function with lexical 'this' context
const personArrow = {
    name: 'Shivam',
    sayHello: () => {
      console.log(`Hello, my name is ${this.name}.`);
    }
};
personArrow.sayHello(); 

//Generator Function

function* countDown(num) {
    while (num > 0) {
      yield num;
      num--;
    }
  }
  
const iter = countDown(5); //inv arg5

console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);

// First Class Function

// can be passed as an argument

// can be returned by an another function

// can be assigned as a value to a variable, object or array


// i) Assigning a function to a variable:
function printName(name) {

  console.log(name);

}
// Assign the function to a variable
var random = printName;
// Access it
random("Shivam");

// ii) Passing a function as an argument to another function:

function passFunction(callback) {
  callback("YsHIVAM")

}
function sayHello(name) {
console.log(`Hello ${name}! Welcome To CloudEQ`)
}
passFunction(sayHello);

// iii) Returning a function from another function:
function outerFunction() {

  return function innerFunction() {

    console.log("Inner function is executed!");

  };
}
const inner = outerFunction();
inner(); // Output: Inner function is executed!