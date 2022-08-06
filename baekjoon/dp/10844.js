const fs = require('fs');
const input = fs.readFileSync('10844.txt').toString().trim();

const solution = () => {
    const N = +input;
    const dp = Array.from(new Array(N + 1), () => new Array(10));
    dp[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    dp[2] = [1, 1, 2, 2, 2, 2, 2, 2, 2, 1];

    console.log(dp);
    for(let i = 3; i <= N; i++) {
        for(let j = 0; j < 10; j++) {
            if(j === 0) dp[i][j] = dp[i-1][j+1] % 1000000000;
            else if(j >= 1 && j <= 8) dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % 1000000000;
            else if(j=== 9){
                dp[i][j] = dp[i-1][j-1] % 1000000000;
            }
        }
    }
    let sum = 0;
    for (let k = 0; k < 10; k++) {
        sum += dp[N][k];
    }
    console.log(sum);
}

solution();