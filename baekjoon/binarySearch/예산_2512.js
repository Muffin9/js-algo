const input = require("fs")
  .readFileSync("2512.txt")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  const N = +input[0];
  const arr = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const target = +input[2];
  let left = 0;
  let right = arr[arr.length - 1];
  let maxValue = Number.MIN_SAFE_INTEGER;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let sum = 0;

    for (let i = 0; i < N; i++) {
      if (mid > arr[i]) sum += arr[i];
      else sum += mid;
    }

    if (target >= sum) {
      if (maxValue < mid) maxValue = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  console.log(maxValue);
};

solution();
