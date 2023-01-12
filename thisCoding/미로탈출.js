const input = require('fs').readFileSync('미로탈출.txt').toString().split("\n");

function solution() {
    const [n, m] = input.shift().split(" ").map(v => +v);
    // 북 동 남 서
    const dy = [-1 ,0, 1, 0];
    const dx = [0, 1, 0, -1];

    const maps = Array.from(new Array(n), () => new Array(m));
    input.forEach((m ,idx) => {
        maps[idx] = m.split("").map(v => +v);
    });

    const BFS = (x, y) => {
        const queue = [[x, y]];
        
        while(queue.length) {
            const [x, y] = queue.shift();

            for(let i = 0; i < 4; i++) {
                const nextX = x + dx[i];
                const nextY = y + dy[i];

                if(nextX < 0 || nextY < 0 || nextX >= n || nextY >= m) continue;

                if(maps[nextX][nextY] === 1) {
                    maps[nextX][nextY] = maps[x][y] + 1;
                    queue.push([nextX, nextY]);
                }
            }
        }
    }

    BFS(0, 0);
    console.log(maps[n - 1][m - 1]);
}

solution();