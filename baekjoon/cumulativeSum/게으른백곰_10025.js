const input = require("fs")
  .readFileSync("10025.txt")
  .toString()
  .trim()
  .split("\n");

// sliding window
const solution = () => {
  const [N, K] = input.shift().split(" ").map(Number);
  const board = input.map((s) => s.split(" ").map(Number));
  let answer = 0;

  const maxCoord = board.reduce((prev, curr) => {
    const coord = curr[1];
    return Math.max(prev, coord);
  }, 0);

  const arr = [...Array(maxCoord + 1)].fill(0);

  for (let row of board) {
    const [ice, coord] = row;
    arr[coord] = ice;
  }

  let window = 0;

  for (let i = 0; i < K + 1 && i < arr.length; i++) {
    window += arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    let left = i - K - 1;
    let right = i + K + 1;
    window = window - (arr[left] || 0) + (arr[right] || 0);

    answer = Math.max(answer, window);
  }
  console.log(answer);
};

solution();
