const input = require("fs")
  .readFileSync("1654.txt")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  const [K, N] = input.shift().split(" ").map(Number);
  const arr = input.map(Number).sort((a, b) => a - b);
  let left = 0;
  let right = arr[arr.length - 1];
  let answer = Number.MIN_SAFE_INTEGER;

  while (left <= right) {
    const mid = ~~((left + right) / 2);
    let sum = arr.reduce((acc, cur) => acc + ~~(cur / mid), 0);

    if (sum >= N) {
      if (mid > answer) answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  console.log(answer);
};

solution();
