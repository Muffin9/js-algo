const fs = require('fs');
const input = fs.readFileSync('1302.txt').toString().trim().split("\n");

const solution = () => {
    const N = +input.shift();
    const arr = [...input];
    const map = new Map();
    
    arr.forEach((el) => {
        if(map.has(el)) {
            let value = map.get(el);
            map.set(el, value += 1);
        } else {
            map.set(el, 1);
        }
    });

    const result = [...map].sort((a, b) => {
        if(a[1] === b[1]) {
            return a[0].localeCompare(b[0]);
        } else {
            return b[1] - a[1];
        }
    });

    const test = ['b', 'c', 'd', 'a'];
    console.log(test);
    test.sort((a, b) => {
        // if(a < b) return -1; // a b 순 정렬 
        // if(a > b) return 1; // b a 순 정렬
        // if(a == b) return 0; // 그대로 ... 
    });
    console.log(test);

    console.log(result[0][0]);
}

solution();