const fs = require('fs');
const input = fs.readFileSync('영역_구하기_2583.txt').toString().trim().split("\n");

const solution = () => {
    // visited 방문여부인 직사각형인 것들 다 1로 바꿔주기.
    // 직사각형 내부를 제외하고 나머지 부분 넓이 구하기.
    const [M, N, K] = input.shift().split(" ").map(v => +v);
    const graph = Array.from(new Array(N), () => new Array(M).fill(0));
    const visited = [...graph];
    const result = [];
    const dx = [0, 0, -1, 1];
    const dy = [1, -1, 0 ,0];
    let areaCount = 0;

    const dfs = (x, y) => {
        visited[x][y] = true;
        areaCount += 1;
        for(let i = 0; i < 4; i++) {
            const nextX = x + dx[i];
            const nextY = y + dy[i];
            if(nextX >= 0 && nextY >= 0 && nextX < N && nextY < M && !visited[nextX][nextY] && graph[nextX][nextY] === 0) {
                dfs(nextX, nextY);
            }
        }
    }

    for(let i = 0; i < K; i++) {
        const [x1, y1, x2, y2] = input.shift().split(" ").map(v => +v);

        for(let j = x1; j < x2; j++) {
            for(let k = y1; k < y2; k++) {
                graph[j][k] = 1;
                visited[j][k] = true;
            }
        }
    }

    for(let i = 0; i < M; i++) {
        for(let j = 0; j < N; j++) {
            if(graph[i][j] === 0  && !visited[i][j]) {
                areaCount = 0;
                dfs(i, j);
                result.push(areaCount);
            }
        }
    }

    console.log(result);
}

solution();