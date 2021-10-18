// creating outer function variable

let value0 = 1;

const outer = function () {
    let value1 = 10;
    return function () {
        let value2 = 100;
        console.log(value0, value1, value2);
    };
};

const innerRef = outer();

innerRef();