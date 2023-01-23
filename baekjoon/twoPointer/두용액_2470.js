const [N, input] = require("fs")
  .readFileSync("2470.txt")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  const arr = input
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;
  let result = [arr[left], arr[right]];
  let target = Number.MAX_SAFE_INTEGER;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (Math.abs(sum) < Math.abs(target)) {
      target = sum;
      result = [arr[left], arr[right]];
    }

    if (sum === 0) break;
    else if (sum > 0) right -= 1;
    else if (sum < 0) left += 1;
  }

  console.log(result.join(" "));
};

solution();
