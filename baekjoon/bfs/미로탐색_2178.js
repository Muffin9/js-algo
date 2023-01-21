const fs = require('fs');
const input = fs.readFileSync('2178.txt').toString().trim().split("\n");

const solution = () => {
    const [N, M] = input[0].split(" ").map(Number);
    const map = Array.from(new Array(N), () => new Array(M))
    const visited = Array.from(new Array(N), () => new Array(M).fill(false));
    const dy = [-1, 0, 1, 0];
    const dx = [0, 1, 0, -1];

    for(let i = 0; i < N; i++) {
        map[i] = input[i + 1].split("").map(Number);
    }

    
    const BFS = (col, row) => {
        const queue = [[col, row]];
        visited[col][row] = true;
        while(queue.length) {
            const [col, row] = queue.shift();
            for(let i = 0; i < 4; i++) {
                const ny = col + dy[i];
                const nx = row + dx[i];

                if(nx < 0 || ny < 0 || nx >= M || ny >= N || !map[ny][nx]) continue;

                if(!visited[ny][nx] && map[ny][nx]) {
                    visited[ny][nx] = true;
                    map[ny][nx] = map[col][row] + 1;
                    queue.push([ny, nx]);
                }
            }
        }
    }

    BFS(0, 0);
    console.log(map[N - 1][M - 1]);
}

solution();