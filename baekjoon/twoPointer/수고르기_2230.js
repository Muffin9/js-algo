const [input, ...arr] = require("fs")
  .readFileSync("2230.txt")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  const [N, M] = input.split(" ").map(Number);
  const nums = arr.map(Number).sort((a, b) => a - b);
  let left = 0;
  let right = 1;
  let answer = Number.MAX_SAFE_INTEGER;

  while (left < N && right < N) {
    const diff = nums[right] - nums[left];
    if (diff === M) {
      answer = M;
      break;
    }

    if (diff < M) {
      right += 1;
      continue;
    }

    left += 1;
    answer = Math.min(answer, diff);
  }

  console.log(answer);
};

solution();
