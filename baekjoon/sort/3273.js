const fs = require('fs');
const input = fs.readFileSync('3273.txt').toString().trim().split("\n");

const solution = () => {
    const N = +input.shift();
    const arr = input.shift().split(" ").map(v => +v).sort((a, b) => a - b);
    const x = +input.shift();
    let answer = 0;
    for(let i = 0; i < arr.length; i++) {
        const standard = arr[i];
        for(let j = i + 1; j < arr.length; j++) {
            if(x === standard + arr[j]) {
                answer += 1;
                break;
            }
        }
    }
    console.log(answer);
}

solution();