const input = require("fs")
  .readFileSync("1743.txt")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  const [N, M, K] = input[0].split(" ").map(Number);
  const map = Array.from(new Array(N + 1), () => new Array(M + 1).fill("."));
  const visited = Array.from(new Array(N + 1), () =>
    new Array(M + 1).fill(false)
  );
  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];
  let answer = 0;

  for (let i = 1; i <= K; i++) {
    const [v1, v2] = input[i].split(" ").map(Number);

    map[v1][v2] = "#";
  }

  const bfs = (r, c) => {
    const queue = [[r, c]];
    visited[r][c] = true;
    let cnt = 1;
    while (queue.length) {
      const [r, c] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const ny = r + dy[i];
        const nx = c + dx[i];

        if (nx <= 0 || ny <= 0 || ny > N || nx > M) continue;

        if (!visited[ny][nx] && map[ny][nx] === "#") {
          visited[ny][nx] = true;
          cnt += 1;
          queue.push([ny, nx]);
        }
      }
    }
    return cnt;
  };

  for (let i = 0; i <= N; i++) {
    for (let j = 0; j <= M; j++) {
      if (map[i][j] === "#" && !visited[i][j]) {
        answer = Math.max(answer, bfs(i, j));
      }
    }
  }

  console.log(answer);
};

solution();
