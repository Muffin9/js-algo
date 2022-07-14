const fs = require('fs');
const input = fs.readFileSync("11729.txt").toString();

const solution = () => {
    const N = +input;
    const answer = [];

    const calculateCountHanoi = (N) => {
        if(N === 1) return 1;
        else return 2 * calculateCountHanoi(N - 1) + 1
    }

    const hanoiTop = (N, start, middle, end) => {
        if(N === 1) {
            answer.push(`${start} ${end}`);
            return;
        }

        hanoiTop(N-1, start, end, middle);
        answer.push(`${start} ${end}`);
        hanoiTop(N-1, middle, start, end);
    }

    answer.push(calculateCountHanoi(N));
    hanoiTop(N, 1, 2, 3);
    console.log(answer.join("\n"))
}

solution();