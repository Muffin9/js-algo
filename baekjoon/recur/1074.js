const fs = require('fs');
const input = fs.readFileSync('1074.txt').toString().trim();

const solution = () => {
    const [N, r, c] = input.split(" ").map(v => +v);
    let answer = 0;
    const depth = Math.pow(2, N) * Math.pow(2, N);

    const Z = (row, col, depth) => {
        if(row === c && col === r) {
            console.log(answer);
            return;
        }

        // 몇 사분면에서 재귀를 돌릴지 체킹 해줘야할듯.
        if(c < row + depth && c >= row && r < col + depth && r >= col) {
            depth /= 2;
            Z(row, col, depth);
            Z(row + depth, col, depth);
            Z(row, col + depth, depth);
            Z(row + depth, col + depth, depth);
        } else {
            answer += depth * depth;
        }
    }

    Z(0, 0, depth);
}

solution();