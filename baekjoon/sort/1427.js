const fs = require('fs');
const input = fs.readFileSync('1427.txt').toString().trim();

const solution = () => {
    const arr = input.split("").map(v => +v);
    arr.sort((a, b) => b - a);
    console.log(arr.join(""));
}

solution();