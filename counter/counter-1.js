// creating inner increment function and passing the reference of inner increment function from counter function

function counter() {
    let count = 0;
    return function () {
        return ++count;
    };
}

const counter1 = counter();

console.log(counter1())
console.log(counter1())
console.log(counter1())
console.log(counter1())