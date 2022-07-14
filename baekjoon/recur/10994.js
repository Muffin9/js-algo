const fs = require('fs');
const input = fs.readFileSync('10994.txt').toString();

const solution = () => {
    const N = +input;
    const len = 4 * N - 3;
    const starMap = Array.from(new Array(len), () => new Array(len).fill(' '))

    // const drawStar = (row, col ,num) => {
    //     if(num === 1) {
    //         starMap[row][col] = '*';
    //         return;
    //     }

    //     const currentLen = (4 * num) - 3;
        
    //     for (let j = col; j < col + currentLen; j++) {
    //         starMap[row][j] = '*';
    //         starMap[row + currentLen - 1][j] = '*';
    //     }

    //     for(let i = row; i < row + currentLen; i++) {
    //         starMap[i][col] = '*';
    //         starMap[i][col + currentLen - 1] = '*';
    //     }

    //     drawStar(row + 2, col + 2, num - 1);
    //     return;
    // }

    // drawStar(0, 0, N);
    // for(let i = 0; i < starMap.length; i++) {
    //     let row = "";
    //     for(let j = 0; j < starMap.length; j++) {
    //         row += starMap[i][j];
    //     }
    //     console.log(row);
    // }
}

solution();