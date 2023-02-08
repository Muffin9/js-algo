// S에서 T가 되도록 DFS를 사용하면 경우의 수가 많아져서 시간초과가 발생
const input = require("fs")
  .readFileSync("12904.txt")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  const a = input[0].trim().split("");
  const b = input[1].trim().split("");

  while (true) {
    if (a.length === b.length) {
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return console.log("0");
      }
      return console.log("1");
    }

    if (b[b.length - 1] === "A") {
      b.pop();
    } else if (b[b.length - 1] === "B") {
      b.pop();
      b.reverse();
    }
  }
};

solution();
