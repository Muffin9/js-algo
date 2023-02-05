const [n, input, x] = require("fs")
  .readFileSync("3273.txt")
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
  let answer = 0;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === +x) {
      answer += 1;
    }

    if (sum >= +x) {
      right -= 1;
    } else {
      left += 1;
    }
  }
  console.log(answer);
};

solution();
