const fs = require('fs');
const input = fs.readFileSync('1431.txt').toString().trim().split("\n");

const solution = () => {
    const N = +input.shift();
    const arr = [...input];

    const sum = (str) => {
        return str.match(/[\d]/g)?.reduce((a, c) => a + +c,0) || 0;
    }
    
    arr.sort((a, b) => {
        if(a.length !== b.length) return a.length - b.length;
        else if(a.length === b.length) {
            // sum
            // const aSum = a.split("").reduce((prev, cur) => {
            //     let value = +cur;
            //     if(value >= 1 && value <= 9) return prev += +cur
            //     else return prev;
            // }, 0);
            // const bSum = b.split("").reduce((prev, cur) => {
            //     let value = +cur;
            //     if(value >= 1 && value <= 9) return prev += +cur
            //     else return prev;
            // }, 0);
            const aSum = sum(a),
            bSum = sum(b);
            if(aSum === bSum) {
                return a.localeCompare(b);
            } else return aSum - bSum
        }
    });

    console.log(arr.join("\n"));
}

solution();