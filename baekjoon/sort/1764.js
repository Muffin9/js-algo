const fs = require('fs');
const input = fs.readFileSync('1764.txt').toString().trim().split("\n");

const solution = () => {
    const [N, M] = input.shift().split(" ").map(v => +v);
    const set = new Set([...input.splice(0, N)]);
    const result = [];

    for(let i = 0; i < M; i++) {
        const value = input.shift();
        if(set.has(value)) result.push(value);
    }

    result.sort();
    console.log(`${result.length}\n${result.join("\n")}`)
}

solution();