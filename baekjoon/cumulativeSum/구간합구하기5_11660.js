const fs = require("fs");
const [input, ...arr] = fs
  .readFileSync("11660.txt")
  .toString()
  .trim()
  .split("\n");

// https://tesseractjh.tistory.com/290
const solution = () => {
  const [N, M] = input.split(" ").map((v) => +v);
  const map = Array.from(new Array(N + 1), () => new Array(N + 1).fill(0));

  for (let i = 0; i < N; i++) {
    map[i + 1] = [0].concat(arr[i].split(" ").map(Number));
  }
  // map 누적합 배치
  for (let i = 1; i < N + 1; i++) {
    for (let j = 1; j < N + 1; j++) {
      map[i][j] += map[i][j - 1] + map[i - 1][j] - map[i - 1][j - 1];
    }
  }

  console.log(map);
  const result = [];

  // N 만큼 순회하며 누적합 계산
  for (let i = 0; i < M; i++) {
    const [x1, y1, x2, y2] = arr[i + N].split(" ").map(Number);
    // 15 + 12
    console.log(
      map[x2][y2],
      map[x2][y1 - 1],
      map[x1 - 1][y2],
      map[x1 - 1][y1 - 1]
    );
    result.push(
      map[x2][y2] - map[x2][y1 - 1] - map[x1 - 1][y2] + map[x1 - 1][y1 - 1]
    );
  }
  console.log(result);
};

solution();
