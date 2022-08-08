const fs = require('fs');
const input = fs.readFileSync('1057.txt').toString().trim();

const solution = () => {
    let [N, a, b] = input.split(" ").map(v => +v);
    let answer = 0;
    while(a !== b) {
        a = Math.floor(a / 2) + a % 2;
        b = Math.floor(b / 2) + b % 2;
        answer += 1;
    }

    answer ? console.log(answer): console.log(-1);
}

solution();