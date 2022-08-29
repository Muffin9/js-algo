const fs = require('fs');
const [values, ...input] = fs.readFileSync('연결요소의개수_11724.txt').toString().trim().split("\n");

const solution = () => {
    const [N, M] = values.split(" ").map(v => +v);
    // const graph = Array.from(new Array(N + 1), () => []);
    const graph = new Map();
    const visited = new Array(N + 1).fill(false);
    for(let i = 1; i <= N; i++) {
        graph.set(i, []);
    }

    for(let i = 0; i < M; i++) {
        const [v1, v2] = input[i].split(" ").map(v => +v);
        // graph[v1] = [...graph[v1], v2];
        // graph[v2] = [...graph[v2], v1];
        graph.set(v1, [...graph.get(v1), v2]);
        graph.set(v2, [...graph.get(v2), v1]);
    }

    // const bfs = (start) => {
    //     if(visited[start]) return;
    //     const queue = [start];

    //     while(queue.length !== 0) {
    //         const value = queue.shift();
    //         visited[value] = true;
    //         for(let i = 0; i < graph[value].length; i++) {
    //             if(!visited[graph[value][i]]) {
    //                 visited[graph[value][i]] = true;
    //                 queue.push(graph[value][i]);
    //             }
    //         }
    //     }
    // }

    const dfs = (start) => {
        visited[start] = true;

        for (let i = 0; i < graph.get(start).length; i++) {
            const next = graph.get(start)[i];

            if (!visited[next]) {
                dfs(next);
            }
        }
    };

    let connectionLen = 0;

    for(let i = 1; i <= N; i++) {
        if(!visited[i]) {
            connectionLen += 1;
            // bfs(i);
            dfs(i);
        }
    }
    console.log(connectionLen);
}

solution();