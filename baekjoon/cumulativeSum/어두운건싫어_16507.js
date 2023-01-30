const input = require("fs")
  .readFileSync("16507.txt")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  const [R, C, Q] = input.shift().split(" ").map(Number);
  const map = Array.from(new Array(R + 1), () => new Array(C + 1).fill(0));
  const result = [];

  for (let i = 1; i <= R; i++) {
    map[i] = [0].concat(input.shift().split(" ").map(Number));
  }

  for (let i = 1; i < R + 1; i++) {
    for (let j = 1; j < C + 1; j++) {
      map[i][j] += map[i][j - 1] + map[i - 1][j] - map[i - 1][j - 1];
    }
  }

  for (let i = 0; i < Q; i++) {
    const [x1, y1, x2, y2] = input.shift().split(" ").map(Number);
    const sum =
      map[x2][y2] - map[x2][y1 - 1] - map[x1 - 1][y2] + map[x1 - 1][y1 - 1];
    const share = (y2 - y1 + 1) * (x2 - x1 + 1);
    result.push(Math.floor(sum / share));
  }
  console.log(result.join("\n"));
};

solution();
