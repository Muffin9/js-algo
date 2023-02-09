const input = require("fs")
  .readFileSync("1926.txt")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  const [n, m] = input[0].split(" ").map(Number);
  const graph = Array.from(new Array(n), () => new Array(m).fill(0));
  const visited = Array.from(new Array(n), () => new Array(m).fill(false));
  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];
  let totalCnt = 0;
  let maxSum = 0;

  const bfs = (r, c) => {
    const queue = [[r, c]];
    visited[r][c] = true;
    let cnt = 1;
    while (queue.length) {
      const [r, c] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const ny = r + dy[i];
        const nx = c + dx[i];

        if (ny < 0 || nx < 0 || ny >= n || nx >= m) continue;

        if (!visited[ny][nx] && graph[ny][nx]) {
          cnt += 1;
          visited[ny][nx] = true;
          queue.push([ny, nx]);
        }
      }
    }
    return cnt;
  };

  for (let i = 0; i < n; i++) {
    graph[i] = input[i + 1].split(" ").map(Number);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!visited[i][j] && graph[i][j]) {
        totalCnt += 1;
        const imageCnt = bfs(i, j);
        maxSum = Math.max(maxSum, imageCnt);
      }
    }
  }
  console.log(totalCnt);
  console.log(maxSum);
};

solution();
