const fs = require('fs');
const input = fs.readFileSync('15652.txt').toString().trim();

const solution = () => {
    const [N, M] = input.split(" ").map(v => +v);
    const arr = new Array(M);
    const result = [];
    const recur = (idx, depth) => {
        if(depth === M) {
            let answer = arr.join(" ");
            result.push(answer);
            return;
        }

        for(let i = idx - 1; i < N; i++) {
            arr[depth] = i + 1;
            recur(i + 1, depth + 1);
        }
    }

    recur(1, 0);
    console.log(result.join("\n"));
}

solution();