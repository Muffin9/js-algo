const fs = require('fs');
const input = fs.readFileSync("2493.txt").toString().trim().split("\n");

const solution = () => {
    const N = +input.shift();
    const arr = input.shift().split(" ").map(v => +v);

    const stack = []
    const result = new Array(N).fill(0);

    console.log(result);
}

solution();