// creating inner function

let value0 = 1;

function outer() {
    let value1 = 10;

    function inner() {
        let value2 = 100;
        console.log(value0, value1, value2);
    }

    inner();
}

outer();