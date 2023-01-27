const [N, ...input] = require('fs').readFileSync('2667.txt').toString().trim().split("\n");

const solution = () => {
    const map = Array.from(new Array(+N), () => []);
    const visited = Array.from(new Array(+N), () => new Array(+N).fill(false));
    const dy = [-1, 0, 1, 0];
    const dx = [0, 1, 0, -1];
    let cnt = 1;
    const result = [];
    for(let i = 0; i < +N; i++) {
        map[i] = input[i].split("").map(Number);
    }

    const bfs = (col, row) => {
        const queue = [[col, row]];
        visited[col][row] = true;

        while(queue.length) {
            const [col, row] = queue.shift();
            for(let i = 0; i < 4; i++) {
                const ny = col + dy[i];
                const nx = row + dx[i];

                if(nx < 0 || ny < 0 || nx >= +N || ny >= N) continue;
                if(!visited[ny][nx] && map[ny][nx]) {
                    visited[ny][nx] = true;
                    cnt += 1;
                    queue.push([ny, nx]);
                }
            }
        }
    }

    for(let i = 0; i < +N; i++) {
        for(let j = 0; j < +N; j++) {
            if(!visited[i][j] && map[i][j]) {
                bfs(i, j);
                result.push(cnt);
                cnt = 1;
            }
        }
    }

    result.sort((a, b) => a - b);
    console.log(result.length);
    console.log(result.join("\n"))
}

solution();