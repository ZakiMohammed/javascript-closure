// creating inner increment & decrement function for constructor Counter function with ES6 signature

class Counter {
    constructor() {
        let count = 0;

        this.increment = function () {
            return ++count;
        };
        this.decrement = function () {
            return --count;
        };
    }
}

const counter1 = new Counter();

console.log(counter1.increment())
console.log(counter1.increment())
console.log(counter1.increment())

console.log(counter1.decrement())