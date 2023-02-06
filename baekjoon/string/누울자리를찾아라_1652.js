const [N, ...input] = require("fs")
  .readFileSync("1652.txt")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  const result = [0, 0];
  let rowMaxCnt = 0;
  let colMaxCnt = 0;

  for (let i = 0; i < +N; i++) {
    let rowCnt = 0;
    let colCnt = 0;

    for (let j = 0; j < +N; j++) {
      if (input[i][j] === ".") {
        rowCnt += 1;
      } else if (input[i][j] === "X") {
        if (rowCnt >= 2) rowMaxCnt += 1;
        rowCnt = 0;
      }

      if (input[j][i] === ".") {
        colCnt += 1;
      } else if (input[j][i] === "X") {
        if (colCnt >= 2) colMaxCnt += 1;
        colCnt = 0;
      }
    }

    if (rowCnt >= 2) rowMaxCnt += 1;
    if (colCnt >= 2) colMaxCnt += 1;
  }

  console.log(rowMaxCnt, colMaxCnt);
};

solution();
