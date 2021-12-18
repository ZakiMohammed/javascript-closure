// passing function as parameter

const compute = (operation) => operation(num1, num2);

const add = (num1, num2) => num1 + num2;
const sub = (num1, num2) => num1 - num2;
const mul = (num1, num2) => num1 * num2;
const div = (num1, num2) => num1 / num2;

const num1 = 6;
const num2 = 3;

console.log(compute(add));
console.log(compute(sub));
console.log(compute(mul));
console.log(compute(div));