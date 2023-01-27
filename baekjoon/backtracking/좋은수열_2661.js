const { resourceLimits } = require("worker_threads");

const input = require("fs").readFileSync("2661.txt").toString().trim();

const solution = () => {
  const N = +input;
  let flag = false;

  const dfs = (str) => {
    let start = str.length - 1;
    let end = str.length;
    for (let i = 1; i <= str.length / 2; i++) {
      if (str.substring(start - i, end - i) === str.substring(start, end)) {
        return;
      }
      start -= 1;
    }

    if (str.length === N) {
      console.log(str);
      flag = true;
      return;
    }
    for (let i = 1; i <= 3; i++) {
      if (flag) return;
      dfs(str + i);
    }
  };

  dfs("1");
};

solution();
