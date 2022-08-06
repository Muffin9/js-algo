const fs = require('fs');
const input = fs.readFileSync('11053.txt').toString().trim().split("\n");

const solution = () => {
    const N = +input.shift();
    const arr = input.shift().split(" ").map(v => +v);
    const dp = new Array(N).fill(1);

    for(let i = 0; i <= N; i++) {
        for(let j = 0; j < i; j++) {
            if(arr[i] > arr[j] && dp[j] + 1 > dp[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }

    console.log(dp[N - 1]);
}

solution();