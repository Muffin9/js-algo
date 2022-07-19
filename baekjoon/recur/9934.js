const fs = require('fs');
const input = fs.readFileSync('9934.txt').toString().trim().split("\n");

const solution = () => {
    const N = +input.shift();
    const data = input.shift().split(" ").map(v => +v);

    const answer = Array.from(Array(N), () => new Array());

    const divide = (depth, start, end) => {
        if (depth === N) return;

        const mid = Math.floor((start + end) / 2);
        answer[depth].push(data[mid]);
        divide(depth + 1, start, mid - 1);
        divide(depth + 1, mid + 1, end);
    };

    divide(0, 0, data.length);
    console.log(answer.map((v) => v.join(' ')).join('\n'));
}

solution();