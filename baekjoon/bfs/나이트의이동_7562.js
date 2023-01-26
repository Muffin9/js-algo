const input = require("fs")
  .readFileSync("7562.txt")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  let testCase = +input.shift();
  const move = [
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
  ];

  const bfs = (N, y, x, cnt, endY, endX, visited) => {
    const queue = [[y, x, cnt]];
    visited[y][x] = true;
    while (queue.length) {
      const [y, x, cnt] = queue.shift();

      if (y === endY && x === endX) {
        console.log(cnt);
        return;
      }
      for (let i = 0; i < move.length; i++) {
        const ny = y + move[i][1];
        const nx = x + move[i][0];

        if (nx < 0 || ny < 0 || nx >= N || ny >= N || visited[ny][nx]) continue;
        visited[ny][nx] = true;
        queue.push([ny, nx, cnt + 1]);
      }
    }
  };

  while (testCase--) {
    const N = +input.shift();
    const map = Array.from(new Array(N), () => new Array(N).fill(0));
    const visited = Array.from(new Array(N), () => new Array(N).fill(false));
    const [startY, startX] = input.shift().split(" ").map(Number);
    const [endY, endX] = input.shift().split(" ").map(Number);
    bfs(N, startY, startX, 0, endY, endX, visited);
  }
};

solution();
