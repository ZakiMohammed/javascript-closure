// creating inner increment & decrement function 
// for constructor Counter function

function Counter() {
    let count = 0;

    this.increment = () => ++count;
    this.decrement = () => --count;
    this.value = () => count;
}

const counter1 = new Counter();

console.log(counter1.value())
console.log(counter1.increment())
console.log(counter1.increment())
console.log(counter1.increment())

console.log(counter1.decrement())