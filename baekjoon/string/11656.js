const fs = require('fs');
const input = fs.readFileSync("11656.txt").toString().trim();

const solution = () => {
    const arr = [];

    for(let i = 0; i < input.length; i++) {
        arr.push(input.slice(i));
    }

    console.log(arr.sort().join("\n"));
}

solution();