const fs = require('fs');
const input = fs.readFileSync('18870.txt').toString().trim().split("\n");

const solution = () => {
    const N = input.shift();
    const arr = [...input.shift().split(" ").map(v => +v)];
    const sortedArr = [...arr].sort((a, b) => a - b);
    const set = Array.from(new Set(sortedArr));
    const obj = {};
    const result = [];
    set.forEach((el, idx) => obj[el] = idx);

    for(let i = 0; i < N; i++) {
        result.push(obj[arr[i]]);
    }
    
    console.log(result.join(" "));
}

solution();