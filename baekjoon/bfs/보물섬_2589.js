const input = require("fs")
  .readFileSync("2589.txt")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  const [N, M] = input.shift().split(" ").map(Number);
  const map = Array.from(new Array(N), () => new Array(M));
  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];
  let maxValue = 0;

  for (let i = 0; i < N; i++) {
    map[i] = input.shift().split("");
  }

  const bfs = (y, x) => {
    const queue = [[y, x]];
    const visited = Array.from(new Array(N), () => new Array(M).fill(false));
    const path = Array.from(new Array(N), () => new Array(M).fill(0));
    visited[y][x] = true;
    path[y][x] = 1;
    let cnt = 0;

    while (queue.length) {
      const [y, x] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const ny = y + dy[i];
        const nx = x + dx[i];

        if (nx < 0 || ny < 0 || ny >= N || nx >= M || map[ny][nx] === "W")
          continue;
        if (map[ny][nx] === "L" && !visited[ny][nx]) {
          path[ny][nx] = path[y][x] + 1;
          visited[ny][nx] = true;
          cnt = Math.max(cnt, path[ny][nx]);
          queue.push([ny, nx]);
        }
      }
    }

    return cnt - 1;
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === "L") {
        maxValue = Math.max(bfs(i, j), maxValue);
      }
    }
  }
  console.log(maxValue);
};

solution();
