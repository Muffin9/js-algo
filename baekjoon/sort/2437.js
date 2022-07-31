const fs = require('fs');
const input = fs.readFileSync('2437.txt').toString().trim().split("\n");

const solution = () => {
    const N = +input.shift();
    const numbers = input.shift().split(" ").map(v => +v).sort((a, b) => a - b);
    let saveWeight = numbers[0];

    for(let i = 1; i < numbers.length; i++) {
        if(numbers[i] > saveWeight + 1) {
            console.log(saveWeight + 1);
            return;
        }
        else saveWeight += numbers[i]
    }

    console.log(saveWeight);
}

solution();