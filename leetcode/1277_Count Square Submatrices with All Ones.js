/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
  const rowLen = matrix.length;
  let colLen = matrix[0].length;

  let count = 0;
  let dp = Array(rowLen + 1)
    .fill(0)
    .map(() => Array(colLen + 1).fill(0));

  for (let i = 1; i <= rowLen; i++) {
    for (let j = 1; j <= colLen; j++) {
      if (matrix[i - 1][j - 1] === 1) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        count += dp[i][j];
      }
    }
  }

  return count;
};

countSquares([
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 1, 1, 1],
]);
