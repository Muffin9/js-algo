const fs = require('fs');
const input = fs.readFileSync('11656.txt').toString().trim();

const solution = () => {
    const result = [];

    for(let i = 0; i < input.length; i++) {
        result.push(input.slice(i));
    }
    result.sort();
    console.log(result.join('\n'));
}

solution();