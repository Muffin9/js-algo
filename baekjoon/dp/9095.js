const fs = require('fs');
const input = fs.readFileSync('9095.txt').toString().trim().split("\n");

const solution = () => {
    const N = +input.shift();
    const arr = [...input].map(v => +v);
    
    const recur = (sum, n, result) => {
        if(sum > n) return;
        if(sum === n) {
            result.push(1);
            return;
        }

       recur(sum + 1, n, result);
       recur(sum + 2, n, result);
       recur(sum + 3, n, result);
   }

    for(let i = 0; i < N; i++) {
        let result = [];
        recur(0, arr[i], result);
       console.log(result.length);
   }
}

solution();
