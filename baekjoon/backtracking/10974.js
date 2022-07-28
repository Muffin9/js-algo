const fs = require('fs');
const input = fs.readFileSync('10974.txt').toString().trim().split("\n");

const solution = () => {
    const N = +input.shift();
    const arr = new Array(N);
    const visitied = new Array(N).fill(false);
    const result = [];
    for(let i = 0; i < N; i++) {
        arr[i] = i + 1;
    }

    const recur = (depth) => {
        if(depth === N) {
            result.push(arr.join(" "));
            return;
        }

        for(let i = 0; i < N; i++) {
            if(visitied[i]) continue;
            visitied[i] = true;
            arr[depth] = i + 1
            recur(depth + 1);
            visitied[i] = false;
        }
    }

    recur(0);
    console.log(result.join("\n"));
}

solution();