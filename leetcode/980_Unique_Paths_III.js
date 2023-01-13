/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let answerPath = 0;

    // 북 동 남 서
    const dy = [-1, 0, 1, 0];
    const dx = [0, 1, 0, -1];
    let blocks = 0;
    const visited = Array.from(new Array(m), () => new Array(n).fill(false));
    let player = [];
    // 플레이어 위치 셋팅.
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] === 0) blocks += 1;
            if(grid[i][j] === 1) {
                player[0] = i;
                player[1] = j;
            }
        }
    }

    visited[player[0]][player[1]] = true; // 플레이어 위치는 방문 처리.

    const dfs = (x, y, count) => {
        if(grid[x][y] === 2 && count === blocks) {
            answerPath += 1;
            return;
        }

        visited[x][y] = true;
        for(let i = 0; i < 4; i++) {
            const moveX = x + dx[i];
            const moveY = y + dy[i];
            if(moveX < 0 || moveY < 0 || moveX >= m || moveY >= n) continue;
            if(grid[moveX][moveY] === -1) continue;
            if(!visited[moveX][moveY]) {
                dfs(moveX, moveY, count + 1);
            }
        }
        visited[x][y] = false;
    }

    dfs(player[0], player[1], -1);
    console.log(answerPath);
}

const grid = [[1,0,0,0],[0,0,0,0],[0,0,0,2]];

uniquePathsIII(grid); // 4