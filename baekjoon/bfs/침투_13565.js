const input = require("fs")
  .readFileSync("13565.txt")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  const [R, C] = input.shift().split(" ").map(Number);
  let map = Array.from(new Array(R), () => new Array(C));
  const startList = [];
  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];
  let correctFlag = false;

  for (let i = 0; i < R; i++) {
    map[i] = input[i].split("").map(Number);
  }

  for (let i = 0; i < R; i++) {
    if (map[0][i] === 0) startList.push([0, i]);
  }

  const bfs = (r, c, visited) => {
    const queue = [[r, c]];

    while (queue.length) {
      const [r, c] = queue.shift();

      if (r === R - 1) {
        correctFlag = true;
        return;
      }

      for (let i = 0; i < 4; i++) {
        const nx = r + dx[i];
        const ny = c + dy[i];

        if (nx < 0 || ny < 0 || nx >= R || ny >= C) continue;
        if (!visited[nx][ny] && map[nx][ny] === 0) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
        }
      }
    }
  };

  for (let i = 0; i < startList.length; i++) {
    const visited = Array.from(new Array(R), () => new Array(C).fill(false));
    const [r, c] = startList[i];
    bfs(r, c, visited);
    if (correctFlag) break;
  }

  if (correctFlag) console.log("YES");
  else console.log("NO");
};

solution();
