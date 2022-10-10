const fs = require('fs');
const [N, M] = fs.readFileSync('15650.txt').toString().trim().split(" ").map(v => +v);

const solution = () => {
    const visited = new Array(N);
    const arr = new Array(N);
    for(let i = 0; i < N; i++) {
        arr[i] = i + 1;
    }

    const recur = (nums, idx, count) => {
        if(count === M) {
            console.log(nums.split("").join(" "));
            return;
        }

        for(let i = idx;  i < N; i++) {
            if(visited[i]) continue;
            visited[i] = true;
            recur(nums + arr[i], i + 1, count + 1);
            visited[i] = false;
        }
    }

    recur('', 0, 0);
}

solution();