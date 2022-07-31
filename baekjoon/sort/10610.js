const fs = require('fs');
const input = fs.readFileSync('10610.txt').toString().trim();

const solution = () => {
    const arr = input.split("").map(v => +v);
    if(!arr.includes(0)) {
        console.log(-1);
        return;
    }
    arr.sort();
    const sum = arr.reduce((prev, cur) => cur += prev, 0);
    if(sum % 3 !== 0) console.log(-1);
    else console.log(arr.sort((a, b) => b - a).join(""));
}

solution();