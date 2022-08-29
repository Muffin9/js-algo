const fs = require('fs');
const input = fs.readFileSync('섬의개수_4963.txt').toString().trim().split("\n");

const solution = () => {
    const result = [];
    const dx = [-1, 0, 1, -1, 1, -1, 0, 1];
    const dy = [1, 1, 1, 0 ,0, -1 ,-1 ,-1];
    while(true) {
        const [w, h] = input.shift().split(" ").map(v => +v);
        if(w === 0 && h === 0) {
            console.log(result.join("\n"));
            return;
        }

        const map = new Array(w);
        const visitied = Array.from(new Array(h), () => new Array(w).fill(0));
        for(let i = 0; i < h; i++) {
            map[i] = input.shift().split(' ').map(v => +v);
        }

        let isLandCount = 0;

        const dfs = (y, x) => {
            visitied[y][x] = 1;
            for(let i = 0; i < 8; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];
                if(nx >= 0 && ny >= 0 && nx < w && ny < h && !visitied[ny][nx] && map[ny][nx]) {
                    visitied[ny][nx] = 1;
                    dfs(ny, nx);
                }
            }
        }
        
        for(let i = 0; i < h; i++) {
            for(let j = 0; j < w; j++) {
                if(map[i][j] && !visitied[i][j]) {
                    isLandCount += 1;
                    dfs(i, j);
                }
            }
        }
        result.push(isLandCount);
    }
}

solution();