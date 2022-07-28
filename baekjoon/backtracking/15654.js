const fs = require('fs');
const input = fs.readFileSync('15654.txt').toString().trim().split("\n");

const solution = () => {
    const [N, M] = input.shift().split(" ").map(v => +v);
    const arr = input.shift().split(" ").map(v => +v).sort((a, b) => a - b);
    const savedArr = new Array(M);
    const visited = new Array(N);
    const result = [];

    const recur = (depth) => {
        if(depth === M) {
            result.push(savedArr.join(" "));
            return;
        }

        for(let i = 0; i < N; i++) {
            if(visited[i]) continue;
            visited[i] = true;
            savedArr[depth] = arr[i];
            recur(depth + 1);
            visited[i] = false;
        }
    }

    recur(0);
    console.log(result.join("\n"));
}

solution();