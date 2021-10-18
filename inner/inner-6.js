// creating inner ref directly by immediately invoking the outer function (arrow)

let value0 = 1;

const innerRef = (() => {
    let value1 = 10;
    return () => {
        let value2 = 100;
        console.log(value0, value1, value2);
    };
})();

innerRef();