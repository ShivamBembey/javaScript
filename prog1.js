<<<<<<< HEAD
// Arithmetic operators
var a = 11;
var b = 30;

console.log("Arithmetic Operator");
console.log(a + b); //Addition
console.log(a - b); //Subtraction
console.log(a * b); //Multiplication
console.log(a / b); //Division
console.log(a % b); //Modulo

// Assignment operators
var c = 3;

console.log("Assignment Operator");
c += 4; // c = c+4: 7
console.log(c);
c -= 2; // c = c-2: 5
console.log(c);
c *= 5; // c = c*5: 25
console.log(c);
c /= 5; // c = c/5: 5
console.log(c);
c %= 2; // c = c%2: 1
console.log(c);

// Logical operators
var p = true;
var q = false;

console.log("Logical Operator");
console.log("LogicalAnd:",p && q);
console.log("LogicalOr:",p || q);
console.log("LogicalNot:", !q);

// Comparison operators
var x = 5;
var y = 8;

console.log("Comparison Operator");
console.log("isEqual:", x==y);
console.log("isNotEqual:", x!=y);
console.log("isGreater:", x>y);
console.log("isLess:", x<y);
console.log("isGreaterOrEqual:", x>=y);
console.log("isLessOrEqual:", x<=y);

//Ternary operator
var age = 22;
console.log("Ternary Operator")
=======
// Arithmetic operators
var a = 11;
var b = 30;

console.log("Arithmetic Operator");
console.log(a + b); //Addition
console.log(a - b); //Subtraction
console.log(a * b); //Multiplication
console.log(a / b); //Division
console.log(a % b); //Modulo

// Assignment operators
var c = 3;

console.log("Assignment Operator");
c += 4; // c = c+4: 7
console.log(c);
c -= 2; // c = c-2: 5
console.log(c);
c *= 5; // c = c*5: 25
console.log(c);
c /= 5; // c = c/5: 5
console.log(c);
c %= 2; // c = c%2: 1
console.log(c);

// Logical operators
var p = true;
var q = false;

console.log("Logical Operator");
console.log("LogicalAnd:",p && q);
console.log("LogicalOr:",p || q);
console.log("LogicalNot:", !q);

// Comparison operators
var x = 5;
var y = 8;

console.log("Comparison Operator");
console.log("isEqual:", x==y);
console.log("isNotEqual:", x!=y);
console.log("isGreater:", x>y);
console.log("isLess:", x<y);
console.log("isGreaterOrEqual:", x>=y);
console.log("isLessOrEqual:", x<=y);

//Ternary operator
var age = 22;
console.log("Ternary Operator")
>>>>>>> 19bff6c201fcef05c0945034f77b5a72cf886087
console.log("isAdult", age>=18 ? 'Yes' : 'No');