const fs = require('fs');
const input = fs.readFileSync('11399.txt').toString().trim().split("\n");

const solution = () => {
    const N = +input.shift();
    const atm = input.shift().split(" ").map(v => +v);

    atm.sort((a, b) => a - b);

    let savedValue = atm[0];
    let result = atm[0];
    for(let i = 1; i < atm.length; i++) {
        savedValue += atm[i];
        result += savedValue;
    }
    console.log(result);
}

solution();