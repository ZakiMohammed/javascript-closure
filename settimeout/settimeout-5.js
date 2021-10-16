// setTimeout can remember variables from its lexical scope even they execute on different timeline

let value0 = 1;

function level1() {
    let value1 = 10;
    return function () {
        let value2 = 100;
        return function () {
            let value3 = 1000;
            return function () {
                let value4 = 10000;
            
                setTimeout(function () {
                    let value5 = 100000;
                    console.log(value0, value1, value2, value3, value4, value5);
                }, 1000);
            }
        }
    }
}

level1()()()();