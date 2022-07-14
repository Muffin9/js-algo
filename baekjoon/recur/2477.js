// base Case : (i / 3) % 3 == 1 && (j / 3 ) % 3 == 1

const fs = require('fs');
const input = fs.readFileSync('2477.txt');

const solution = () => {
    const N = +input;
    const map = Array.from(new Array(N), () => new Array(N).fill(' '));


    const checkValue = (row, col, num) => {
        // console.log(row, col, num);
        return ((row / num) % 3 === 1 && (col / num) % 3 === 1) ? true : false;
    }

    const drawStar = (row, col, num) => {
        if(checkValue(row, col, num)) {
            map[row][col] = ' ';
        } else {
            num /= 3;
            if(num === 0) map[row][col] = '*';
            else drawStar(row, col, num);
        }
    }

    for(let i = 0; i < N; i++)
    {
        for(let j = 0; j < N; j++)
            drawStar(i, j, N);
    }
    
    for(let i = 0; i < N; i++)
    {
        let row = "";
        for(let j = 0; j < N; j++) {
            row += map[i][j];
        }
        console.log(row);
    }
}

solution();