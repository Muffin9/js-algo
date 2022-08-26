const fs = require('fs');
const input = fs.readFileSync('12845.txt').toString().trim().split("\n");

const solution = () => {
    const N = +input.shift();
    const arr = input.shift().split(" ").map(v => +v);
    arr.sort((a, b) => b - a);
    let sum = 0;
    for(let i = 1; i < N; i++) {
        sum += arr[0] + arr[i];
    }

    console.log(sum);
}

solution();