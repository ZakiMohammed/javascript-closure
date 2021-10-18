// creating inner function and passing the inline reference of inner function from outer function

let value0 = 1;

function outer() {
    let value1 = 10;
    return function () {
        let value2 = 100;
        console.log(value0, value1, value2);
    };
}

const innerRef = outer();

innerRef();