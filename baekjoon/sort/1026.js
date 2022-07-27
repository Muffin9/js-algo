const fs = require('fs');
const input = fs.readFileSync('1026.txt').toString().trim().split("\n");

const solution = () => {
    const N = +input.shift();
    const arrA = input.shift().split(" ").map(v => +v);
    const arrB = input.shift().split(" ").map(v => +v);

    arrA.sort((a, b) => b - a);
    arrB.sort((a, b) => a - b);
    let answer = 0;
    for(let i = 0; i < N; i++) {
        answer += arrA[i] * arrB[i];
    }

    console.log(answer);
}

solution();