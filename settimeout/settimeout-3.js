// setTimeout can remember variables from its lexical scope even they execute on different timeline

let value0 = 1;

function outer() {
    let value1 = 10;

    setTimeout(function () {
        let value2 = 100;
        console.log(value0, value1, value2);
    }, 1000);
}

outer();