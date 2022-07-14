const fs = require('fs');
const input = fs.readFileSync('16505.txt');

const solution = () => {
    const N = +input;
    const len = Math.pow(2, N);
    const starMap = Array.from(new Array(len), () => new Array(len).fill(' '));

    const drawStar = (row, col, num) => {
        if(num === 1) {
            starMap[row][col] = '*'
            return;
        }
        num /= 2;
        drawStar(row, col, num);
        drawStar(row + num, col, num);
        drawStar(row, col + num, num);
    }

    drawStar(0, 0, len);

    for (let i = 0; i< len; i++) {
        let row = "";
        for (let j = 0; j < len - i; j++) {
            row += starMap[i][j];
        }
        console.log(row);
    }
}

solution();