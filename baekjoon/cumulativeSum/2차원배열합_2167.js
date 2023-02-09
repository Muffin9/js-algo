const input = require("fs")
  .readFileSync("2167.txt")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  const [N, M] = input.shift().split(" ").map(Number);
  const map = Array.from(new Array(N + 1), () => new Array(M + 1).fill(0));

  for (let i = 1; i <= N; i++) {
    map[i] = [0].concat(input.shift().split(" ").map(Number));
  }

  for (let i = 1; i < N + 1; i++) {
    for (let j = 1; j < M + 1; j++) {
      map[i][j] += map[i][j - 1] + map[i - 1][j] - map[i - 1][j - 1];
    }
  }

  const K = +input.shift();
  const result = [];

  for (let i = 0; i < K; i++) {
    const [x1, y1, x2, y2] = input.shift().split(" ").map(Number);

    result.push(
      map[x2][y2] - map[x2][y1 - 1] - map[x1 - 1][y2] + map[x1 - 1][y1 - 1]
    );
  }
  console.log(result.join("\n"));
};

solution();
