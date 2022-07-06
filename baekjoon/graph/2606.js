const fs = require('fs');
const input = fs.readFileSync("2606.txt").toString().split("\n");

const solution = () => {
    const N = +input.shift();
    const M = +input.shift();
    const map = Array.from(new Array(N + 1), () => new Array(N + 1).fill(0));
    let visited = Array.from(new Array(N+1), () => new Array(N+1).fill(0));
    const result = [];
    const BFS = (map, visited, queue) => {
        while(queue.length) {
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

    for(let i = 0 ; i < M; i++) {
        const [v1, v2] = input.shift().split(" ").map(v => +v);
        map[v1][v2] = 1;
        map[v2][v1] = 1;
    }

    const queue = [];
    queue.unshift(1);
    BFS(map, visited, queue);
    console.log(result.length - 1);
}

solution();