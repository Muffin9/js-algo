// 0 ~ 100 까지 BFS로 계속 탐색해주면서 거기서 가장 최대값을 리턴하면 되는 문제.
const [value, ...input] = require('fs').readFileSync('2468.txt').toString().trim().split("\n");


const solution = () => {
    const N = +value;
    const map = Array.from(new Array(N), () => []);
    const moveX = [-1, 1, 0, 0];
    const moveY = [0, 0, -1, 1];
    let answer = 0;
    for(let i = 0; i < N; i++) {
        map[i] = input[i].split(" ").map(v => +v);
    }

    const sinkMap = (visited, num) => {
        for(let i = 0; i < N; i++) {
            for(let j = 0; j < N; j++) {
                if(map[i][j] <= num) visited[i][j] = true;
            }
        }
    }

    const bfs = (visited, x, y) => {
        const queue = [[x, y]];

        while(queue.length) {
            const [x, y] = queue.shift();
            visited[x][y] = true;

            for(let i = 0; i < 4; i++) {
                const nextX = x + moveX[i];
                const nextY = y + moveY[i];
                if(nextX < 0 || nextX >= N || nextY < 0 || nextY >= N) continue;
                if(!visited[nextX][nextY]) {
                    visited[nextX][nextY] = true;
                    queue.push([nextX, nextY]);
                }
            }
        }
    }

    for(let i = 0; i <= 100; i++) {
        const visited = Array.from(new Array(N), () => new Array(N).fill(false));
        let count = 0;
        sinkMap(visited, i);
        for(let j = 0; j < N; j++) {
            for(let k = 0; k < N; k++) {
               // visited BFS. 
               if(!visited[j][k]) {
                visited[j][k] = true;
                bfs(visited, j, k);
                count += 1;
                }
            }
        }
        answer = Math.max(answer, count);
    }
    console.log(answer);
}

solution();