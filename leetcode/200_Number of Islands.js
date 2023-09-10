/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const dx = [0, 1, 0, -1]; // col
  const dy = [-1, 0, 1, 0]; // row

  const rowLen = grid.length;
  const colLen = grid[0].length;

  const visited = Array.from({ length: rowLen }, () =>
    Array(colLen).fill(false)
  );

  let landCount = 0;

  const bfs = (y, x) => {
    const queue = [[y, x]];
    visited[y][x] = true;
    while (queue.length) {
      const [y, x] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const nextX = x + dx[i];
        const nextY = y + dy[i];

        if (
          nextX < 0 ||
          nextY < 0 ||
          nextX >= colLen ||
          nextY >= rowLen ||
          visited[nextY][nextX]
        )
          continue;

        if (grid[nextY][nextX] === "1") {
          visited[nextY][nextX] = true;
          queue.push([nextY, nextX]);
        }
      }
    }
  };

  for (let y = 0; y < rowLen; y++) {
    for (let x = 0; x < colLen; x++) {
      if (!visited[y][x] && grid[y][x] === "1") {
        landCount += 1;
        bfs(y, x);
      }
    }
  }

  return landCount;
};

// numIslands([
//   ["1", "1", "1", "1", "0"],
//   ["1", "1", "0", "1", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "0", "0", "0"],
// ]);

// numIslands([
//   ["1", "1", "0", "0", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "1", "0", "0"],
//   ["0", "0", "0", "1", "1"],
// ]);

numIslands([
  ["0", "1", "0"],
  ["1", "0", "1"],
  ["0", "1", "0"],
]);
