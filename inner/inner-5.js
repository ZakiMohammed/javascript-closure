// creating inner ref directly by immediately invoking the outer function

let value0 = 1;

const innerRef = (function () {
    let value1 = 10;
    return function () {
        let value2 = 100;
        console.log(value0, value1, value2);
    };
})();

innerRef();