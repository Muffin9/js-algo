const fs = require('fs');
const input = fs.readFileSync('15650.txt').toString().trim();

const solution = () => {
    const [N, M] = input.split(" ").map(v => +v);
    const visited = new Array(N).fill(false);

    const recur = (idx, depth) => {
        if(depth === M) {
            let answer = '';
            for(let i = 0; i < N; i++) {
                if(visited[i]) answer += i + 1 + ' ';
            }
            console.log(answer);
        }

        for(let i = idx; i < N; i++) {
            if(visited[i]) continue;
            visited[i] = true;
            recur(i, depth + 1);
            visited[i] = false;
        }
    }

    recur(0, 0);
}

solution();