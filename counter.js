// const Counter = () => {
//     let count = 0;
//     return {
//         increment: () => ++count,
//         decrement: () => --count,
//         value: () => count
//     };
// }

const Counter = (() => {
    let count = 0;
    return () => ({
        increment: () => ++count,
        decrement: () => --count,
        value: () => count
    });
})();

const counter = Counter();

counter.increment();
counter.increment();
counter.increment();
console.log('counter2', counter.value());
counter.decrement();
counter.decrement();
console.log('counter2', counter.value());