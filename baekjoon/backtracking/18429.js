const fs = require('fs');
const input = fs.readFileSync('18429.txt').toString().trim().split("\n");

const solution = () => {
    const [N, K] = input.shift().split(" ").map(v => +v);
    const arr = input.shift().split(" ").map(v => +v);
    for(let i = 0; i < N; i++) {
        arr[i] -= K;
    }
    const visited = new Array(N).fill(false);
    let result = 0;
    const recur = (sum, count) => {
        if(sum < 0) return;
        if(count === N) {
            result += 1;
            return;
        }

        for(let i = 0; i < arr.length; i++) {
            if(visited[i]) continue;
            visited[i] = true;
            sum += arr[i];
            recur(sum, count + 1);
            visited[i] = false;
            sum -= arr[i];
        }
    }

    recur(0, 0);
    console.log(result);
}

solution();
