const fs = require('fs');
const input = fs.readFileSync("1181.txt").toString().trim().split("\n");

const solution = () => {
    const N = +input.shift()
    const set = new Set();
    for(let i = 0; i < N; i++) {
        set.add(input.shift());
    }
    const result = Array.from(set).sort((a, b) => {
        if(a.length !== b.length) return a.length - b.length;
        if (a > b) return 1;
        if (a < b) return -1;
    });
    
    console.log(result.join("\n"));
}

solution();