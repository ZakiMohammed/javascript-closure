// setTimeout execution sequence

console.log('before setTimeout');

setTimeout(function () {
    console.log('within setTimeout');
}, 0);

console.log('after setTimeout');