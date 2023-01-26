let fs = require("fs");
let [T, ...input] = fs.readFileSync("1012.txt").toString().split("\n");

const solution = () => {
  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];

  while (T--) {
    const [M, N, K] = input.shift().split(" ").map(Number);
    const map = Array.from(new Array(N), () => new Array(M).fill(0));
    const bfs = (y, x, visited) => {
      const queue = [[y, x]];
      visited[y][x] = true;

      while (queue.length) {
        const [curY, curX] = queue.shift();
        for (let i = 0; i < 4; i++) {
          const ny = curY + dy[i];
          const nx = curX + dx[i];

          if (nx < 0 || ny < 0 || nx >= M || ny >= N) continue;
          if (map[ny][nx] === 1 && !visited[ny][nx]) {
            visited[ny][nx] = true;
            queue.push([ny, nx]);
          }
        }
      }
    };

    let cnt = 0;
    const visited = Array.from(new Array(N), () => new Array(M).fill(false));

    for (let i = 0; i < K; i++) {
      const [row, col] = input.shift().split(" ").map(Number);
      map[col][row] = 1;
    }

    for (let col = 0; col < N; col++) {
      for (let row = 0; row < M; row++) {
        if (map[col][row] === 1 && !visited[col][row]) {
          cnt += 1;
          bfs(col, row, visited);
        }
      }
    }
    console.log(cnt);
  }
};

solution();
