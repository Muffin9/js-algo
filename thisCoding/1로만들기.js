let value = require('fs').readFileSync('1로만들기.txt').toString().trim();

function solution() {
    // X가 3으로 나누어떨어지면 3으로 나눈다.
    // X가 2로 나누어떨어지면 2로 나눈다.
    // X에서 1을 뺀다.

    const dp = new Array(+value + 1).fill(0);
    for(let i = 2; i < dp.length; i++) {
        dp[i] = dp[i - 1] + 1;

        if(i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);

        else if(i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    }

    console.log(dp[value]);
}

solution(); // 3