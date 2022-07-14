const fs = require('fs');
const input = fs.readFileSync("1992.txt").toString().split("\n");

const solution = () => {
    const N = +input.shift();
    const treeMap = new Array(N);
    const result = [];

    for(let i = 0; i < treeMap.length; i++) {
        treeMap[i] = input.shift().split("").map(v => +v);
    }

    const checkValue = (row, col, num) => {
        const standard = treeMap[row][col];

        for(let i = row; i < row + num; i++) {
            for(let j = col; j < col + num; j++) {
                if(standard !== treeMap[i][j]) return false;
            }
        }

        return true;
    }

    const devide = (row, col, num) => {
        if(checkValue(row, col, num)) {
            result.push(treeMap[row][col]);
        } else {
            result.push('(');

            num /= 2;
            devide(row, col, num);
            devide(row, col + num, num);
            devide(row + num, col, num);
            devide(row + num, col + num, num);

            result.push(')');
        }
    }


    devide(0, 0, N);
    console.log(result.join(""));
}

solution();