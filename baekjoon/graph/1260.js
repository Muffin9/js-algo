const fs = require('fs');
const input = fs.readFileSync('1260.txt').toString().trim().split("\n");

const solution = () => {
    const [N, M, V] = input.shift().split(" ").map(v => +v);
    const map = Array.from(new Array(N+1), () => new Array(N+1).fill(0));
    let visited = Array.from(new Array(N+1), () => new Array(N+1).fill(0));
    let result = [];
    const DFS = (map, visited, from) => {
        result.push(from);

        for(let i = 0; i <= N; i++) visited[i][from] = 1;

        for(let to = 0; to <= N; to++) {
            if(map[from][to] === 1 && visited[from][to] === 0) {
                DFS(map, visited, to);
            }
        }
    }

    const BFS = (map, visited, queue) => {
        while(queue.length !== 0) {
            const from = queue.shift();
            result.push(from);

            for(let i = 0; i <= N; i++) visited[i][from] = 1;

            for(let to = 0; to <= N; to++) {
                if(map[from][to] === 1 && visited[from][to] === 0) {
                    if(!queue.includes(to)) queue.push(to);
                }
            }
        }
    }

    for(let i = 0; i < M; i++) {
        const [v1, v2] = input.shift().split(" ").map(v => +v);
        map[v1][v2] = 1;
        map[v2][v1] = 1;
    }

    DFS(map, visited, V);
    console.log(result.join(" "));
    const queue = [];
    result = [];
    visited = Array.from(new Array(N+1), () => new Array(N+1).fill(0));
    queue.unshift(V);
    BFS(map, visited, queue);
    console.log(result.join(" "));
}

solution();