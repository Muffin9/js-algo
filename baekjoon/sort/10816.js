const fs = require('fs');
const input = fs.readFileSync('10816.txt').toString().trim().split('\n');

const solution = () => {
    const N = +input.shift();
    const inputCards = input.shift().split(" ").map(v => +v);
    const M = +input.shift();
    const checkCards = input.shift().split(" ").map(v => +v);
    const map = new Map();
    const result = [];

    for(let i = 0; i < N; i++) {
        if(map.has(inputCards[i])) map.set(inputCards[i], map.get(inputCards[i]) + 1);
        else map.set(inputCards[i], 1);
    }

    for(let i = 0; i < M; i++) {
        if(map.has(checkCards[i])) result.push(map.get(checkCards[i]));
        else result.push(0);
    }

    console.log(result.join(" "));
}

solution();