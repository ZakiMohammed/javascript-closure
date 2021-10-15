// creating inner ref directly by immediately invoking the outer function

const innerRef = (function () {
    let num = 10;
    return function () {
        console.log(num);
    };
})();

innerRef();