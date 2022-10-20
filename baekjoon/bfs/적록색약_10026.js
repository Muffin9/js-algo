const [value, ...input] = require('fs').readFileSync('10026.txt').toString().trim().split("\n");

const solution = () => {
    const N = +value;
    const map = new Array(N);
    let visited = Array.from(new Array(N), () => new Array(N).fill(false));
    const moveX = [-1, 1, 0, 0];
    const moveY = [0, 0, -1, 1];

    for(let i = 0; i < N; i++) {
        map[i] = input[i].split("");
    }

    const bfs = (x, y) => {
        const queue = [[x, y]];

        while(queue.length) {
            const [x, y] = queue.shift();
            visited[x][y] = true;
            const currentColor = map[x][y];

            for(let i = 0; i < 4; i++) {
                const nextX = x + moveX[i];
                const nextY = y + moveY[i];
                if(nextX < 0 || nextX >= N || nextY < 0 || nextY >= N) continue;
                if(visited[nextX][nextY]) continue;

                if(map[nextX][nextY] === currentColor) {
                    visited[nextX][nextY] = true;
                    queue.push([nextX, nextY]);
                }
            }
        }
    }

    let blindNessCount = 0;
    let notBlindNessCount = 0;


    // 적록색약 아닌 사람.
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
          if (!visited[i][j]) {
            bfs(i, j);
            notBlindNessCount++;
          }
        }
    }

    // 적록색약 일 때
    for(let i = 0; i < N; i++) {
        map[i] = input[i].split("");
    }
    // 색 Change
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
          if (map[i][j] === "G") map[i][j] = "R";
        }
      }
    visited = Array.from(new Array(N), () => new Array(N).fill(false));
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
          if (!visited[i][j]) {
            bfs(i, j);
            blindNessCount++;
          }
        }
    }
    console.log(notBlindNessCount, blindNessCount);
}

solution();