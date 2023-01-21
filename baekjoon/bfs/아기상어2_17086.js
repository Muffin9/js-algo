const input = require('fs').readFileSync('17086.txt').toString().trim().split("\n");

const solution = () => {
    const [N, M] = input.shift().split(" ").map(Number);
    const map  = Array.from(new Array(N), () => []);
    const shark = [];
    const dy = [-1, -1, -1, 0, 1, 1, 1, 0];
    const dx = [-1, 0, 1, 1, 1, 0, -1, -1];

    for(let i = 0; i < N; i++) {
        map[i] = input[i].split(" ").map(Number);
    }

    for(let i = 0; i < N; i++) {
        for(let j = 0; j < M; j++) {
            if(map[i][j] === 1) shark.push([i, j]);
        }
    }
    const bfs = () => {
        while(shark.length) {
            let [col, row] = shark.shift();
            for(let i = 0; i < 8; i++) {
                const ny = col + dy[i];
                const nx = row + dx[i];
                if(nx < 0 || ny < 0 || nx >= M || ny >= N) continue;
                if(map[ny][nx] === 0) {
                    map[ny][nx] = map[col][row] + 1
                    shark.push([ny, nx]);
                }
            }
        }
    }

    bfs();
    let maxValue = 0;
    for(let i = 0; i < N; i++) {
        for(let j = 0; j < M; j++) {
            if (map[i][j] >= maxValue) maxValue = map[i][j]

        }
    }
    console.log(maxValue - 1);
}

solution();