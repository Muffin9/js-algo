const fs = require('fs');
const input = fs.readFileSync('숫자판_2210.txt').toString().trim().split("\n");

const solution = () => {
    const boards = new Array(5);
    for(let i = 0; i < boards.length; i++) {
        boards[i] = input[i].split(" ").map(v => +v);
    }
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    const result = [];

    const dfs = (x, y, str) => {
        if(str.length === 6) {
            if(!result.includes(str)) result.push(str);
            return;
        }

        for(let i = 0; i < 4; i++) {
            const nextX = x + dx[i];
            const nextY = y + dy[i];
            if(nextX >= 0 && nextX < 5 && nextY >= 0 && nextY < 5) {
                dfs(nextX, nextY, str + boards[nextX][nextY])
            }
        }
    }

    for(let i = 0; i < 5; i++) {
        for(let j = 0; j < 5; j++) {
            dfs(i, j, '');
        }
    }
    
    console.log(result.length);
}

solution();