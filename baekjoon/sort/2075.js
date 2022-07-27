const fs = require('fs');
const input = fs.readFileSync('2075.txt').toString().trim().split("\n");

const solution = () => {
    const N = +input.shift();
    const arr = new Array(N * N);
    let idx = 0;

    for(let i = 0; i < N; i++) {
        const newArr = input[i].split(" ");
        for(let j = 0; j < N; j++) {
            arr[idx++] = +newArr[j];
        }
    }
    arr.sort((a, b) => a - b);
    console.log(arr[arr.length - N]);
}

solution();