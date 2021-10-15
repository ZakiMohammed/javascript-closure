// creating inner function and passing the inline reference of inner function from outer function

function outer() {
    let num = 10;
    return function () {
        console.log(num);
    };
}

const innerRef = outer();

innerRef();