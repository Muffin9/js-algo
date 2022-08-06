const fs = require('fs');
const input = fs.readFileSync('1182.txt').toString().trim().split("\n");

const solution = () => {
    const [N, S] = input.shift().split(" ").map(v => +v);
    const arr = input.shift().split(" ").map(v => +v);
    let answer = 0;

    const recur = (idx, sum) => {
        if(idx === N) return;

        if(sum + arr[idx] === S ) {
            answer += 1;
            return; 
        }

        recur(idx + 1, sum);
        recur(idx + 1, sum + arr[idx]);
    }

    recur(0, 0);
    console.log(answer);
}

solution();