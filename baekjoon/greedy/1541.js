const fs = require('fs');
const input = fs.readFileSync('1541.txt').toString().trim();

const solution = () => {
    const arr = input.split("-").map(str => str.split("+").map(Number).reduce((prev, cur) => prev + cur, 0));
    let answer = arr.shift();

    for(let i = 0; i < arr.length; i++) {
        answer -= arr[i];
    }

    console.log(answer);
}

solution();