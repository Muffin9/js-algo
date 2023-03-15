const input = require("fs")
  .readFileSync("4158.txt")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  let answer = 0;
  let idx = 0;
  while (true) {
    const [N, M] = input[idx].split(" ").map(Number);

    if (N === 0 && M === 0) break;

    const sangeunCD = new Array(1000001).fill(0);
    idx += 1;
    for (let i = idx; i <= N; i++) {
      const cdValue = +input[i];
      sangeunCD[cdValue] = 1;
    }

    idx += N;

    for (let j = idx; j <= idx + M; j++) {
      const sunyoungCD = +input[j];
      if (sangeunCD[sunyoungCD]) answer += 1;
    }

    idx += M;

    console.log(answer);
  }
};

solution();
