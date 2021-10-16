// setTimeout can remember variables from its lexical scope even they execute on different timeline

let global = 1;

setTimeout(function () {
    let local = 10;
    console.log(global, local);
}, 1000);