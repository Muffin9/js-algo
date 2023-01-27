const input = require("fs").readFileSync("10974.txt").toString();

const solution = () => {
  const N = +input;

  const visited = new Array(N).fill(false);

  const dfs = (arr) => {
    if (arr.length === N) {
      console.log(arr.join(" "));
      return;
    }
    for (let i = 1; i <= N; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      arr.push(i);
      dfs(arr);
      arr.pop();
      visited[i] = false;
    }
  };

  dfs([]);
};

solution();
