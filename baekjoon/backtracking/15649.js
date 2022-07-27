const fs = require('fs');
const input = fs.readFileSync('15649.txt').toString().trim();

const solution = () => {
    const [N, M] = input.split(" ").map(v => +v);
    const arr = new Array(N);
    const visited = new Array(N).fill(false);

    const recur = (depth) => {
        if(depth === M) {
            let answer = '';
            for(let i = 0; i < M; i++) {
                answer += +arr[i] + ' '
            }
            console.log(answer);
            return;
        }

        for(let i = 0; i < N; i++) {
            if(visited[i]) continue;
            visited[i] = true;
            arr[depth] = i + 1;
            recur(depth + 1);
            visited[i] = false;
        }
    } 

    recur(0);
}

solution();