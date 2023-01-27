const input = require("fs")
  .readFileSync("1759.txt")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  const [L, C] = input.shift().split(" ").map(Number);
  const arr = input.shift().split(" ").sort();
  const vowels = ["a", "e", "i", "o", "u"];
  const visited = new Array(C).fill(false);
  const result = [];

  const dfs = (idx, str) => {
    if (str.length === L) {
      // check cnt
      let collectionCnt = 0;
      let consonantCnt = 0;
      str.split("").forEach((s) => {
        if (vowels.includes(s)) collectionCnt += 1;
        else consonantCnt += 1;
      });

      if (collectionCnt >= 1 && consonantCnt >= 2) result.push(str);
      return;
    }

    for (let i = idx; i < C; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      dfs(i + 1, str + arr[i]);
      visited[i] = false;
    }
  };

  dfs(0, "");

  console.log(result.join("\n"));
};

solution();
