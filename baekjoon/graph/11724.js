const fs = require('fs');
const input = fs.readFileSync('11724.txt').toString().split("\n");

const solution = () => {
    const [N, M] = input.shift().split(" ").map(v => +v);
    const map = Array.from(new Array(N + 1), () => new Array(N + 1).fill(0));
    const visited = new Array(N + 1);
    let answer = 0;
    
}

solution();