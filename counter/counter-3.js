// creating inner increment & decrement function and 
// passing object from counter function using arrow function

const counter = () => {
    let count = 0;
    return ({
        increment: () => ++count,
        decrement: () => --count,
        value: () => count
    });
}

const counter1 = counter();

console.log(counter1.value())
console.log(counter1.increment())
console.log(counter1.increment())
console.log(counter1.increment())

console.log(counter1.decrement())