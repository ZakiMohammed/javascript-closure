// global scope for a function

let global = 20;

function foo() {
    let local = 10;

    console.log(local);
    console.log(global);
}

foo();