const input = require("fs")
  .readFileSync("11659.txt")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  const [N, M] = input
    .shift()
    .split(" ")
    .map((v) => +v);
  const numArr = [0].concat(...input.shift().split(" ").map(Number));
  const result = [];

  for (let i = 1; i < numArr.length; i++) {
    numArr[i] += numArr[i - 1];
  }

  for (let i = 0; i < input.length; i++) {
    const [start, end] = input[i].split(" ").map(Number);
    result.push(numArr[end] - numArr[start - 1]);
  }
  console.log(result.join("\n"));
};

solution();
