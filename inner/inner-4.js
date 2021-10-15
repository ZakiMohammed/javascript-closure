// creating outer function variable

const outer = function () {
    let num = 10;
    return function () {
        console.log(num);
    };
};

const innerRef = outer();

innerRef();