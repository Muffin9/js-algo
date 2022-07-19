const fs = require('fs');
const input = fs.readFileSync('1780.txt').toString().trim().split("\n");

const solution = () => {
    const N = +input.shift();
    const map = new Array(N);
    const answer = new Array(3).fill(0);

    for(let i = 0; i < N; i++) {
        map[i] = input.shift().split(" ").map(v => +v +1);
    }

    const checkValue = (row, col, num) => {
        const standard = map[row][col];

        for(let i = row; i < row + num; i++) {
            for(let j = col; j < col + num; j++) {
                if(standard !== map[i][j]) return false;
            }
        }
        return true;
    }

    const divide = (row, col, num) => {
        if(checkValue(row, col, num)) {
            answer[map[row][col]] += 1;
            return;
        }

        num /= 3;
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                divide(num * i + row, num * j + col, num);
            }
        }
    }

    divide(0, 0, N);
    console.log(answer.join("\n"));

}

solution();