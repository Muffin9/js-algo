const [elements, ...input] = require('fs').readFileSync('1743.txt').toString().trim().split("\n");

const solution = () => {
    const [N, M, K] = elements.split(" ").map(v => +v);
    const map = Array.from({length: N}, () => new Array(M).fill(0));
    let visited = Array.from(Array(N), () => Array(M).fill(false));
    const moveX = [-1, 1, 0, 0];
    const moveY = [0, 0, -1, 1];
    for(let i = 0; i < input.length; i++) {
        const [y, x] = input[i].split(" ").map(v => +v);
        map[y - 1][x - 1] = 1;
    }
    
    const dfs = (y, x) => {
        visited[y][x] = true;
        for (let i = 0; i < 4; i++) {
            const nx = x + moveX[i];
            const ny = y + moveY[i];
        
            if(nx < 0 || ny < 0 || nx >= M || ny >= N) return;
            if (!visited[ny][nx] && map[ny][nx] === 1) {
              trashCount += 1;
              dfs(ny, nx);
            }
        }
    }

    let trashCount = 1;
    const trash = [];
    for(let i = 0; i < N; i++) {
        for(let j = 0; j < M; j++) {
            if(map[i][j] === 1) {
                dfs(i , j);
                trash.push(trashCount);
                trashCount = 1;
            }
        }
    }

    console.log(Math.max(...trash));
}

solution();