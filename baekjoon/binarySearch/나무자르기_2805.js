const input = require("fs")
  .readFileSync("2805.txt")
  .toString()
  .trim()
  .split("\n");

// 1. (4 + 46 / 2) ,,,, 25 , 1 + 15 + 17 + 21 => 54 > M 더크면 left 값을 mid + 1로.
// 2. (26 + 46) / 2 ,,, 36 , 4 + 6 + 10   => 20 OK
const solution = () => {
  const [N, M] = input[0].split(" ").map(Number);
  const arr = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  let left = 0;
  let right = arr[arr.length - 1];
  let answer = Number.MIN_SAFE_INTEGER;

  while (left <= right) {
    let mid = ~~((left + right) / 2);
    let sum = 0;

    for (let i = 0; i < N; i++) {
      if (arr[i] > mid) sum += arr[i] - mid;
    }

    if (sum >= M) {
      answer = Math.max(answer, mid);
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  console.log(answer);
};

solution();
