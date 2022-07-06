const fs = require('fs');
const input = fs.readFileSync("2178.txt").toString().split("\n");

const solution = () => {
    const [N, M] = input.shift().split(" ").map(v => +v);
    const map = Array.from(new Array(N), () => new Array(N).fill(0));
    const visited = Array.from(new Array(N), () => new Array(N).fill(0));
    
    const BFS = (xPos, yPos) => {
        const xMove = [0, 0, -1, 1];
        const yMove = [1, -1, 0, 0];
        const queue = [];
        queue.push({ yPos, xPos });
        visited[yPos][xPos] = 1;

        while(queue.length) {
            const { yPos, xPos } = queue.shift();
            for (let i = 0; i < 4; i++) {
                const nextY = yPos + yMove[i];
                const nextX = xPos + xMove[i];
                if (nextY >= 0 && nextY < N && nextX >= 0 && nextX < M) {
                    if (!visited[nextY][nextX] && map[nextY][nextX]) {
                        visited[nextY][nextX] = visited[yPos][xPos] + 1;
                        queue.push({ yPos: nextY, xPos: nextX });
                    }
                }
            }
        }
    }

    for(let i = 0; i < N; i++) {
        const row = input.shift().split("").map(v => +v);
        map[i] = row;
    }
    BFS(0, 0);
    console.log(visited[N - 1][M - 1]);
}

solution();
