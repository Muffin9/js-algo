const fs = require('fs');
const input = fs.readFileSync('1912.txt').toString().trim().split("\n");

const solution = () => {
    const N = +input.shift();
    const arr = input.shift().split(" ").map(v => +v);
    const dp = new Array(N);
    dp[0] = arr[0];
    for(let i = 1; i < N; i++) {
        if(arr[i] > arr[i] + dp[i - 1]) {
            dp[i] = arr[i];
        }
        else dp[i] = arr[i] + dp[i - 1];
    }
    console.log(Math.max(...dp));
}

solution();