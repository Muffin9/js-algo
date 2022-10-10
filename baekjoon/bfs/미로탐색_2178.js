const fs = require('fs');
const input = fs.readFileSync('2178.txt').toString().trim().split("\n");

const solution = () => {
    const [N, M] = input.shift().split(" ").map(v => +v);
    const map = Array.from(new Array(N), () => new Array(M).fill(0));
    const visited = Array.from(new Array(N), () => new Array(M).fill(0));
    const moveX = [-1, 1, 0, 0];
    const moveY = [0, 0, -1, 1];

    for(let i = 0; i < N; i++) {
        map[i] = input[i].split("").map(v => +v)
    }

    const BFS = (y, x) => {
        const queue = [{ x, y }];
        visited[y][x] = 1;

        while(queue.length) {
            const { y, x } = queue.shift();
            
            for(let i = 0; i < 4; i++) {
                const nextX = x + moveX[i];
                const nextY = y + moveY[i];

                if(nextX >= 0 && nextX < M && nextY >= 0 && nextY < N) {
                    if(!visited[nextY][nextX] && map[nextY][nextX]) {
                        visited[nextY][nextX] = visited[y][x] + 1;
                        queue.push({ y: nextY, x: nextX });
                    }
                }
            }
        }
    }

    BFS(0, 0);
    console.log(visited);
}

solution();