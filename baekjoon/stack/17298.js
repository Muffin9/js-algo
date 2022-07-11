const fs = require('fs');
const input = fs.readFileSync("17298.txt").toString().split("\n");

const solution = () => {
    const N = +input.shift();
    const arr = input.shift().split(" ").map(v => +v)
    const stack = [];
    const answer = new Array(N).fill(-1);

    for(let i = 0; i < N; i++) {
        while(stack.length !== 0 && arr[stack[stack.length - 1]] < arr[i]) {
            answer[stack[stack.length - 1]] = arr[i];
            stack.pop();
        }
        stack.push(i);
    }

    console.log(answer.join(" "));
}

solution();