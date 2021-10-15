// creating inner function

function outer() {
    let num = 10;

    function inner() {
        console.log(num);
    }

    inner();
}

outer();