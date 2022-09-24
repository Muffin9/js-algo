const fs = require('fs');
const input = fs.readFileSync("10773.txt").toString().split("\n");

const solution = () => {
    const n = +input.shift();
    const stack = [];
    for(let i = 0; i < n; i++) {
        const value = +input[i];
        if(value === 0) {
            stack.pop();
        } else {
            stack.push(value);
        }
    }
    const sum = stack.reduce((prev, cur) => prev += cur,0);
    console.log(sum);
}

solution();