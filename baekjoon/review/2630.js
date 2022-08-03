const fs = require('fs');
const input = fs.readFileSync('2630.txt').toString().trim().split("\n");

const solution = () => {
    const N = +input.shift();
    const arr = input.splice(0, N).map(v => v.split(" ").map(v => +v));
    const result = new Array(2).fill(0);


    const checkValue = (row, col, depth) => {
        const standard = arr[row][col];
        
        for(let i = row; i < row + depth; i++) {
            for(let j = col; j < col + depth; j++) {
                if(arr[i][j] !== standard) return false;
            }
        }
        return true;
    }

    const recur = (row, col, depth) => {
        if(checkValue(row, col, depth)) {
            result[arr[row][col]] += 1;
            return;
        }

        depth /= 2;
        recur(row, col, depth);
        recur(row + depth, col, depth);
        recur(row, col + depth, depth);
        recur(row + depth, col + depth, depth);
    }

    recur(0, 0, N);
    console.log(result.join('\n'));
}

solution();