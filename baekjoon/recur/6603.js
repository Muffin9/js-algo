const fs = require('fs');
const input = fs.readFileSync('6603.txt').toString().trim().split("\n");

const solution = () => {

    const recur = (idx, depth, arr, lotto, k) => {
        if(depth === 6) {
            console.log(lotto.join(" "));
            return;
        }

        for(let i = idx; i < k; i++) {
            lotto[depth] = arr[i];
            recur(i + 1, depth + 1, arr, lotto, k);
        }
    }

    while(true) {
        if(+input[0] === 0) return;
        const [k, ...arr] = input.shift().split(" ").map(v => +v);
        const lotto = new Array(6).fill(0);
        recur(0, 0, arr, lotto, k);
        console.log();
    }
}

solution();