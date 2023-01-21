const input = require('fs').readFileSync('3184.txt').toString().trim().split("\n");

const solution = () => {
    const [R, C] = input.shift().split(" ").map(Number);
    const map = Array.from(new Array(R), () => new Array(C));
    const visited = Array.from(new Array(R), () => new Array(C).fill(false));
    const dy = [-1, 0, 1, 0];
    const dx = [0, 1, 0, -1];
    const result = [0, 0];
    for(let i = 0; i < R; i++) {
        map[i] = input.shift().split("");
    }

    const bfs = (row, col) => {
        const queue = [[row, col]];
        visited[row][col] = true;
        let sheep = 0;
        let wolf = 0;
        
        while(queue.length) {
            const [row, col] = queue.shift();
            
            if(map[row][col] === 'o') sheep += 1;
            if(map[row][col] === 'v') wolf += 1;

            for(let i = 0; i < 4; i++) {
                const nx = row + dx[i];
                const ny = col + dy[i];

                if(nx < 0 || ny < 0 || nx >= R || ny >= C) continue;
                if(!visited[nx][ny] && map[nx][ny] !== '#') {
                    visited[nx][ny] = true;
                    queue.push([nx, ny]);
                }
            }
        }
        if(sheep > wolf) {
            result[0] += sheep;
        } else {
            result[1] += wolf;
        }
    }

    for(let i = 0; i < R; i++) {
        for(let j = 0; j < C; j++) {
            if(!visited[i][j] && map[i][j] !== '#') {
                bfs(i, j);
            }
        }
    }
    
    console.log(result.join(" "));
}

solution();