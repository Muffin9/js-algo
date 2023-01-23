const input = require("fs")
  .readFileSync("2559.txt")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  const [N, K] = input[0].split(" ").map(Number);
  const arr = [0].concat(input[1].split(" ").map(Number));
  let maxValue = Number.MIN_SAFE_INTEGER;
  for (let i = 1; i <= N; i++) {
    arr[i] = arr[i] + arr[i - 1];
  }

  for (let i = K; i <= N; i++) {
    maxValue = Math.max(maxValue, arr[i] - arr[i - K]);
  }

  console.log(maxValue);
};

solution();
