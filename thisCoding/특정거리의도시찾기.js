const input = require('fs').readFileSync('특정거리의도시찾기.txt').toString().split("\n");

function solution() {
    const [N, M, K, X] = input.shift().split(" ").map(v => +v);
    const graph = new Map();
    const visited = new Array(N + 1).fill(0);

    for(let i = 0; i < M; i++) {
        const [v1, v2] = input.shift().split(" ").map(v => +v);
        graph.get(v1) ? graph.set(v1, [...graph.get(v1), v2]) : graph.set(v1, [v2]);
    }

    const bfs = (start) => {
        const queue = [start];

        while(queue.length) {
            const nextNode = queue.shift();

            const nodes = graph.get(nextNode);
            if(!nodes) return;
            for(const node of nodes) {
                if(!visited[node])  {
                    visited[node] = visited[nextNode] + 1;
                    queue.push(node);
                }
            }
        }
    }

    bfs(X, 0);
    const results = [];
    visited.map((v, idx) => {
        if(v === K) results.push(idx);
    });

    if(!results.length) console.log(-1);
    else {
        console.log(results.join("\n"));
    }
}

solution();