// creating inner ref directly by immediately invoking the outer function (arrow)

const innerRef = (() => {
    let num = 10;
    return () => console.log(num);
})();

innerRef();