const input = require("fs")
  .readFileSync("11722.txt")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  const N = +input[0];
  const dp = new Array(N).fill(1);
  const arr = input[1].split(" ").map(Number);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  console.log(Math.max(...dp));
};

solution();

// 1 1 2 2 2 3
