const fs = require('fs');
const input = fs.readFileSync('2630.txt').toString().split("\n");

const solution = () => {
    const N = +input.shift();
    const paper = new Array(N);
    const result = new Array(2).fill(0);
    for(let i = 0; i < N; i++) {
        paper[i] = input.shift().split(" ").map(v => +v);
    }

    const checkPaper = (row, col ,num) => {
        const standard = paper[row][col];
        for(let i = row; i < row + num; i++) {
            for(let j = col; j < col + num; j++) {
                if(standard !== paper[i][j]) {
                    return false;
                }
            }
        }
        return true;
    }

    const devide = (row, col, num) => {
        if(checkPaper(row, col, num)) {
            result[paper[row][col]] += 1;
        } else {
            num /= 2;
            for(let i = 0; i < 2; i++) {
                for(let j = 0; j < 2; j++) {
                    devide(row + (num * i), col + (num * j), num);
                }
            }
        }
    }

    devide(0, 0, N);
    console.log(result.join("\n"));
}

solution();