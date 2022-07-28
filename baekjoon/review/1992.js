const fs = require('fs');
const input = fs.readFileSync('1992.txt').toString().trim().split("\n");

const solution = () => {
    const N = +input.shift();
    const treeMap = input.splice(0, N).map(v => v.split("").map(v => +v));
    const result = [];

    const checkValue = (row, col, depth) => {
        const standard = treeMap[row][col];
        for(let i = row; i < row + depth; i++) {
            for(let j = col; j < col + depth; j++) {
                if(standard !== treeMap[i][j]) return false;
            }
        }
        return true;
    }

    const divide = (row, col, depth) => {
        if(checkValue(row, col, depth)) {
            result.push(treeMap[row][col])
            return;
        }

        result.push("(");
        depth /= 2;
        divide(row, col, depth);
        divide(row, col + depth, depth);
        divide(row + depth, col, depth);
        divide(row + depth, col + depth, depth);
        result.push(")");
        
    }

    divide(0, 0, N);
    console.log(result.join(""))
}

solution();