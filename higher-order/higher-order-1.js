// passing function as parameter

const num1 = 6;
const num2 = 3;

const compute = operation => operation();

const add = () => num1 + num2;
const sub = () => num1 - num2;

console.log(compute(add));
console.log(compute(sub));
