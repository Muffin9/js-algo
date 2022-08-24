const fs = require('fs');
const input = fs.readFileSync('1543.txt').toString().trim().split("\n");

const solution = () => {
    const document = input.shift();
    const word = input.shift();
    console.log(document.split(word).length -1);
}

solution();