function solution(maps) {
    // -1 checking.
    const n = maps.length;
    const m = maps[0].length;
    const visited = Array.from({length: n}, () => new Array(m).fill(0));

    const moveX = [-1, 1, 0, 0];
    const moveY = [0, 0, -1, 1];

    const checkBlock = (x, y) => {
        if(x >= 0 && x < n && y >= 0 && y < m) return true;
        return false;
    }

    const bfs = (x, y) => {
        const queue = [{x, y}];
        visited[x][y] = true;

        while(queue.length) {
            const {x, y} = queue.shift();

            for(let i = 0; i < 4; i++) {
                const nextX = x + moveX[i];
                const nextY = y + moveY[i];

                if(!checkBlock(nextX, nextY)) continue;

                if(!visited[nextX][nextY] && maps[nextX][nextY]) {
                    visited[nextX][nextY] = visited[x][y] + 1;
                    queue.push({x: nextX, y: nextY});
                }
            }
        }
    }

    bfs(0, 0);
    if(visited[n - 1][m - 1] === 0) return -1;
    return visited[n - 1][m - 1];
}   


const maps = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]
const maps2 = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]];
solution(maps2);