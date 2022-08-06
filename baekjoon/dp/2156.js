const fs = require('fs');
const input = fs.readFileSync('2156.txt').toString().trim().split("\n");

const solution = () => {
    const N = +input.shift();
    const arr = [0, ...input].map(v => +v);
    const dp = new Array(N);

    dp[0] = 0;
    dp[1] = arr[1];
    dp[2] = arr[1] + arr[2];

    for(let i = 3; i <= N; i++) {
        dp[i] = Math.max(dp[i - 2] + arr[i], arr[i - 1] + arr[i] + dp[i-3], dp[i-1]);
    }

    console.log(dp[N]);
}

solution();