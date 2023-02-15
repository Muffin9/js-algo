const input = require("fs")
  .readFileSync("1987.txt")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  const [R, C] = input[0].split(" ").map(Number);
  const START_CAPITAL_CODE = 65;
  const graph = Array.from(new Array(R), () => new Array(C));
  const alphaArr = new Array(26).fill(false);
  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];
  let answer = Number.MIN_SAFE_INTEGER;

  for (let i = 1; i <= R; i++) {
    graph[i - 1] = input[i].split("");
  }

  const dfs = (r, c, cnt) => {
    answer = Math.max(answer, cnt);
    for (let i = 0; i < 4; i++) {
      const ny = r + dy[i];
      const nx = c + dx[i];

      if (ny < 0 || nx < 0 || ny >= R || nx >= C) continue;
      const code = graph[ny][nx].charCodeAt(0) - START_CAPITAL_CODE;
      if (!alphaArr[code]) {
        alphaArr[code] = true;
        dfs(ny, nx, cnt + 1);
        alphaArr[code] = false;
      }
    }
  };

  alphaArr[graph[0][0].charCodeAt(0) - START_CAPITAL_CODE] = true;

  dfs(0, 0, 1);
  console.log(answer);
};

solution();
