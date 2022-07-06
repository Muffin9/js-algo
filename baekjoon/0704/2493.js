const fs = require('fs');
const input = fs.readFileSync("2493.txt").toString().split("\n");

const solution = () => {
    const N = +input.shift();
    const top = input.shift().split(" ").map(v => +v);

    const result = new Array(N).fill(0);
    const stack = [];

    for (let i = N - 1; i >= 0; i--) {
        if (stack.length !== 0 && top[stack[stack.length - 1]] < top[i]) {
          while(top[stack[stack.length - 1]] < top[i]) {
            const x = stack.pop();
            result[x] = i + 1;
          }
        }
        stack.push(i);
    }
    console.log(result);
}

solution()