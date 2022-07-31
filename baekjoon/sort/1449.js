const fs = require('fs');
const input = fs.readFileSync('1449.txt').toString().trim().split("\n");

const solution = () => {
    const [N, L] = input.shift().split(" ").map(v => +v);
    const arr = input.shift().split(" ").map(v => +v).sort((a, b) => a - b);
    let start = arr[0];
    let tape = 1;

    for(let i = 1; i < arr.length; i++) {
        if(L <= arr[i] - start) {
            tape += 1;
            start = arr[i];
        }
    }
    console.log(tape);
}

solution();