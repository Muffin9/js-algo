const input = require("fs")
  .readFileSync("5582.txt")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  const str1 = input[0];
  const str2 = input[1];
  const dp = Array.from(new Array(str1.length), () =>
    new Array(str2.length).fill(0)
  );

  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < dp[i].length; j++) {
      if (str1[i] === str2[j]) dp[i][j] = 1;
    }
  }

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      if (dp[i][j] && dp[i - 1][j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
    }
  }

  let maxCount = 0;

  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < dp[i].length; j++) {
      maxCount = Math.max(maxCount, dp[i][j]);
    }
  }
  console.log(maxCount);
};

solution(); // 5
