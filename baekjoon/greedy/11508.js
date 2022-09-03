// const fs = require('fs');
// const input = fs.readFileSync('11508.txt').toString().trim().split("\n");

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const N = +input.shift();
    const arr = [...input].map(v => +v);
    arr.sort((a, b) => b - a);
    let answer = 0;

    for(let idx = 0; idx < arr.length; idx++) {
        if((idx + 1) % 3 === 0) continue;
        answer += arr[idx];
    };
    console.log(answer);
    process.exit();
});

// const solution = () => {
//     const N = +input.shift();
//     const arr = [...input].map(v => +v);
//     arr.sort((a, b) => b - a);
//     let answer = 0;

//     for(let idx = 0; idx < arr.length; idx++) {
//         if((idx + 1) % 3 === 0) continue;
//         answer += arr[idx];
//     };
//     console.log(answer);
// }

// solution();