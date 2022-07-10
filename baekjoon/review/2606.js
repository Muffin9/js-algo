const fs = require('fs');
const input = fs.readFileSync("2606.txt").toString().trim().split("\n");

const solution = () => {
    const N = +input.shift();
    const edgeNum = +input.shift();
    const map = Array.from(new Array(N+1), () => new Array(N+1).fill(0));
    const visited = new Array(N + 1);
    let count = 0;

    const DFS = (start) => {
        visited[start] = 1;
        for(let i = 1; i <= N; i++) {
            if(map[start][i] === 1 && !visited[i]) {
                count += 1;
                DFS(i);
            }
        }
    }

    for(let i = 0; i < edgeNum; i++) {
        const [v1 ,v2] = input.shift().split(" ");
        map[v1][v2] = 1;
        map[v2][v1] = 1;
    }

    DFS(1);
    console.log(count);
}

solution();