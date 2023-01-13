const input = require('fs').readFileSync("연구소.txt").toString().trim().split("\n");

const solution = () => {
    const [N, M] = input.shift().split(" ").map(v => +v);
    const graph = input.map((i) => i.split(' ').map(Number));
    const dx = [0, 1, 0, -1];
    const dy = [-1, 0, 1, 0];

    let maxValue = 0;

    const spreadVirus = (copyGraph) => {
        const queue = [];

        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
              if (copyGraph[i][j] === 2) queue.push([i, j]);
            }
        }

        while(queue.length) {
            const [x, y] = queue.shift();

            for(let k = 0; k < 4; k++) {
                const nextX = x + dx[k];
                const nextY = y + dy[k];
                if(nextX < 0 || nextY < 0 || nextX >= N || nextY >= M) continue;
                if(copyGraph[nextX][nextY] === 0) {
                    copyGraph[nextX][nextY] = 2
                    queue.push([nextX, nextY]);
                }
            }
        }
    }

    const calculatedBlockCount = (copyGraph) => {
        let cnt = 0;
        for(let i = 0 ; i < N; i++) {
            for(let j = 0; j < M; j++) {
                if(copyGraph[i][j] === 0) cnt += 1;
            }
        }
        return cnt;
    }

    const dfs = (depth) => {
        if(depth === 3) {
            let copyGraph = graph.map((v) => [...v]);
            spreadVirus(copyGraph);
            const blcokCnt = calculatedBlockCount(copyGraph);
            maxValue = Math.max(blcokCnt, maxValue);
            return;
        }

        for(let i = 0; i < N; i++) {
            for(let j = 0; j < M; j++) {
                    if(graph[i][j] === 0) {
                    graph[i][j] = 1;
                    dfs(depth + 1);
                    graph[i][j] = 0;
                }
            }
        }
    }

    dfs(0);
    console.log(maxValue);
}

solution();