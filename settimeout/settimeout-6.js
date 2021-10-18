// setTimeout can remember variables from its lexical scope even they execute on different timeline (arrow)

let value0 = 1;

const level1 = () => {
    let value1 = 10;
    return () => {
        let value2 = 100;
        return () => {
            let value3 = 1000;
            return () => {
                let value4 = 10000;
            
                setTimeout(() => {
                    let value5 = 100000;
                    console.log(value0, value1, value2, value3, value4, value5);
                }, 1000);
            }
        }
    }
}
const level2 = level1();
const level3 = level2();
const level4 = level3();

level4();

// level1()()()();
