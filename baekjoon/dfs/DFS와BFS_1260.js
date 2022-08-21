const fs = require('fs');
const input = fs.readFileSync('DFS와BFS_1260.txt').toString().trim().split("\n");

const solution = () => {
    const [N, M, V] = input.shift().split(" ").map(v => +v);
    const graph = new Array(N + 1).fill([]);
    let visited = new Array(N + 1).fill(false);
    for(let i = 0; i < M; i++) {
        const [v1, v2] = input.shift().split(" ").map(v => +v);
        // graph[v1].push(v2);
        // graph[v2].push(v1); // 이거 왜 안될까 ?
        graph[v1] = [...graph[v1], v2];
        graph[v2] = [...graph[v2], v1];
    }

    graph.forEach((values) => {
        values.sort((a, b) => a - b);
    })
    
    const dfs = (start) => {
        visited[start] = true;

        for(let i = 0; i < graph[start].length; i++) {
            if(!visited[graph[start][i]]) {
                answer += `${graph[start][i]} `;
                dfs(graph[start][i]);
            }
        }
    }

    const bfs = (start) => {
        const queue = [start];

        while(queue.length !== 0) {
            const value = queue.shift();
            visited[value] = true;
            for(let i = 0; i < graph[value].length; i++) {
                if(!visited[graph[value][i]]) {
                    visited[graph[value][i]] = true;
                    answer += `${graph[value][i]} `;
                    queue.push(graph[value][i]);
                }
            }
        }
    }

    let answer = `${V} `;
    dfs(V);
    console.log(answer);
    visited = new Array(N + 1).fill(false);
    answer = `${V} `;
    bfs(V);
    console.log(answer);

}

solution();