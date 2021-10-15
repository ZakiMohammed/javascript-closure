// creating inner function and passing the reference of inner function from outer function

function outer() {
    let num = 10;

    function inner() {
        console.log(num);
    }

    return inner;
}

const innerRef = outer();

innerRef();