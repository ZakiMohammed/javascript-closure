// creating inner increment & decrement function and passing object from counter function

function counter() {
    let count = 0;

    function increment() {
        return ++count;
    }
    function decrement() {
        return --count;
    }

    return ({
        increment,
        decrement
    });
}

const counter1 = counter();

console.log(counter1.increment())
console.log(counter1.increment())
console.log(counter1.increment())

console.log(counter1.decrement())