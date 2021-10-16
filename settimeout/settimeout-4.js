// setTimeout can remember variables from its lexical scope even they execute on different timeline

let value0 = 1;

function level1() {
    let value1 = 10;
    function level2() {
        let value2 = 100;
        function level3() {
            let value3 = 1000;
            function level4() {
                let value4 = 10000;
            
                setTimeout(function () {
                    console.log(value0, value1, value2, value3, value4);
                }, 1000);
            }
            level4();
        }
        level3();
    }
    level2();
}

level1();