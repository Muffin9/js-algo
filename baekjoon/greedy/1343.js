const fs = require('fs');
const input = fs.readFileSync('1343.txt').toString().trim();

const solution = () => {
    const firstParsing = input.replace(/XXXX/g, 'AAAA');
    const secondParsing = firstParsing.replace(/XX/g, "BB");

    const xStrcheck = secondParsing.indexOf('X');
    if(xStrcheck === -1) {
        console.log(secondParsing);
    } else {
        console.log(-1);
    }
}

solution();