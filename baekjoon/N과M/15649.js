const fs = require('fs');
const input = fs.readFileSync('15649.txt').toString().trim().split("\n");

const solution = () => {
    const [N, M] = input.shift().split(" ").map(v => +v);
    const arr = new Array(N);
    const visited = new Array(N).fill(false);

    for(let i = 0; i < N; i++) {
        arr[i] = i + 1;
    }

    const recur = (nums, idx) => {
        if(idx === M) {
            console.log(nums.split("").join(" "));
            return;
        }

        for(let i = 0; i < N; i++) {
            if(visited[i]) continue;
            visited[i] = true;
            recur(nums + arr[i], idx + 1);
            visited[i] = false;
        }
    }

    recur('', 0);
}

solution();