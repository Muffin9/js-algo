const fs = require('fs');
const input = fs.readFileSync('연결요소의개수.txt').toString().trim().split("\n");

const solution = () => {
    const [N, M] = input.shift().split(" ").map(v => +v);
    const visited = new Array(N + 1).fill(false);
    const graph = Array.from(new Array(N + 1), () => []);
    let connectLen = 0;
    for(let i = 0; i < M; i++) {
        const [n1, n2] = input.shift().split(" ").map(v => +v);
        graph[n1].push(n2);
        graph[n2].push(n1);
    }

    const dfs = (num) => {
        if(visited[num]) return;
        visited[num] = true;

        for(let k = 0; k < graph[num].length; k++) {
            if(!visited[graph[num][k]]) {
                dfs(graph[num][k]);
            }
        }
    }

    for(let i = 1; i <= N; i++) {
        if(!visited[i]) {
            connectLen += 1;
            dfs(i);
        }
    }
    console.log(connectLen);
}

solution();