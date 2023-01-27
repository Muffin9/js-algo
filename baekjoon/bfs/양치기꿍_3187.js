const input = require("fs")
  .readFileSync("3187.txt")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  const [R, C] = input.shift().split(" ").map(Number);
  const map = Array.from(new Array(R), () => new Array(C));
  const visited = Array.from(new Array(R), () => new Array(C).fill(false));
  for (let i = 0; i < R; i++) {
    map[i] = input.shift().split("");
  }
  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];
  let answer = 0;

  const result = [0, 0];

  const bfs = (r, c) => {
    const queue = [[r, c]];
    visited[r][c] = true;
    let sheepCnt = 0;
    let wolfCnt = 0;

    while (queue.length) {
      const [r, c] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const nx = r + dy[i];
        const ny = c + dx[i];

        if (nx < 0 || ny < 0 || nx >= R || ny >= C || map[nx][ny] === "#")
          continue;

        if (!visited[nx][ny]) {
          visited[nx][ny] = true;
          if (map[nx][ny] === "v") wolfCnt += 1;
          else if (map[nx][ny] === "k") sheepCnt += 1;
          queue.push([nx, ny]);
        }
      }
    }
    return [sheepCnt, wolfCnt];
  };

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (!visited[i][j]) {
        const [sheepCnt, wolfCnt] = bfs(i, j);
        if (wolfCnt !== 0 || sheepCnt !== 0) {
          if (sheepCnt > wolfCnt) {
            result[0] += sheepCnt;
          } else {
            result[1] += wolfCnt;
          }
        }
      }
    }
  }
  console.log(result.join(" "));
};

solution();
