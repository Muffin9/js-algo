const fs = require('fs');
const input = fs.readFileSync('15651.txt').toString().trim();

const solution = () => {
    const [N, M] = input.split(" ").map(v => +v);
    const arr = new Array(M);
    const result = [];
    const recur = (depth) => {
        if(depth === M) {
            result.push(arr.join(" "));
            return;
        }

        for(let i = 0; i < N; i++) {
            arr[depth] = i + 1;
            recur(depth + 1)
        }
    }

    recur(0);
    console.log(result.join("\n"));
}

solution();